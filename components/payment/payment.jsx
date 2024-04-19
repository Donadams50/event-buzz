// app/PaymentScreen.js

import React, { useEffect, useState } from 'react';
import { View, Button, ActivityIndicator, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initStripe, useStripe, CardField } from '@stripe/stripe-react-native';
import {  useRouter } from "expo-router";
const PaymentScreen = () => {
  const [eventData, setEventData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { confirmPayment } = useStripe();
  const [cardDataComplete, setCardDataComplete] = useState(false);

  useEffect(() => {
    // Retrieve event data from AsyncStorage
    AsyncStorage.getItem('eventData')
      .then((data) => {
        if (data) {
          setEventData(JSON.parse(data));
        }
      })
      .catch((error) => console.error('Error retrieving event data:', error));
  }, []);
  const router = useRouter();

  //fuction to handle payment
  const handlePayPress = async () => {
    if (!eventData) {
      console.error('Event data not found.');
      return;
    }
    if(eventData.price <= 0){
      // Retrieve the current ticketList array from AsyncStorage
      const currentTicketListString = await AsyncStorage.getItem('ticketList');
      let currentTicketList = [];
      
      // If there's a current ticketList, parse it
      if (currentTicketListString) {
        currentTicketList = JSON.parse(currentTicketListString);
      }
      
      // Append eventData to the beginning of the ticketList array
      currentTicketList.unshift(eventData);

      // Save the updated ticketList array back to AsyncStorage
      await AsyncStorage.setItem('ticketList', JSON.stringify(currentTicketList));
      alert("Its a free Payment.  Successful")

      router.push('/ticket');
      
      return
      
    }

    try {
      setIsLoading(true);

      // Create a Payment Intent
      const paymentIntent = await fetchPaymentIntent(eventData.price);

      // Confirm the payment
      const { paymentIntent: confirmedPaymentIntent, error } = await confirmPayment(paymentIntent.data.client_secret, {
        type: 'Card', // Change to lowercase 'card'
        billingDetails: {
          email: 'example@example.com',
        },
        paymentMethodType: 'Card',
      });

      if (error) {

        alert("Payment Failed")
        router.push('/event-details');
        setIsLoading(false);
      } else if (confirmedPaymentIntent) {
        console.log('Payment successful:', confirmedPaymentIntent);

        // Retrieve the current ticketList array from AsyncStorage
        const currentTicketListString = await AsyncStorage.getItem('ticketList');
        let currentTicketList = [];

        // If there's a current ticketList, parse it
        if (currentTicketListString) {
          currentTicketList = JSON.parse(currentTicketListString);
        }

        // Append eventData to the beginning of the ticketList array
        currentTicketList.unshift(eventData);

        // Save the updated ticketList array back to AsyncStorage
        await AsyncStorage.setItem('ticketList', JSON.stringify(currentTicketList));

        // Notify user success
        console.log('Event ticket purchased successfully!');
        setIsLoading(false);
      
        alert("Payment Successful")

        // Navigate to the purchased ticket list
        router.push('/ticket');
      }
    } catch (error) {
      //console.error('Error handling payment:', error);
      setIsLoading(false);
      alert("Payment Failed")
      router.push('/event-details');
    }
  };

  const fetchPaymentIntent = async (amount) => {
    try {
      const amountInCents = Math.round(amount * 100);
      const response = await fetch('http://137.184.159.197:5000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amountInCents, currency: 'usd' }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to fetch payment intent: ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      alert("Payment Failed")
      //console.error('Error fetching payment intent:', error);
      router.push('/event-details');
      throw error;
    }
  };

  return (
    <View style={{ margin: 15 }}>
      <ScrollView keyboardShouldPersistTaps='always'>
        <CardField
          postalCodeEnabled={false}
          autofocus
          placeholders={{
            number: '4343 3332 4444 3333',
            postalCode: '12345',
            cvc: 'cvc',
            expiration: 'mm/yy'
          }}
          cardStyle={{
            borderWidth: 1,
            backgroundColor: '#ffffff',
            borderColor: '#000000',
            borderRadius: 5
          }}
          style={{ width: '100%', height: 100, marginBottom: 60 }}
          onCardChange={(cardDetails) => {
            setCardDataComplete(cardDetails.complete);
          }}
        />

        
      </ScrollView>
      {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : <Button  onPress={handlePayPress} title="Pay" />}
    </View>
  );
};

export default PaymentScreen;
