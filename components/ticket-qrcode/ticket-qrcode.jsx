import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './ticket-qrcode.style'; // Import the styles


const TicketQRCode = () => {
  const [ticketData, setTicketData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Retrieve ticket data from AsyncStorage when component mounts
    retrieveTicketData();
  }, []);

  const retrieveTicketData = async () => {
    try {
      // Retrieve ticket data from AsyncStorage
      const storedTicketData = await AsyncStorage.getItem('ticketDataPurchased');
      if (storedTicketData) {
        // If ticket data is found, parse it and set the state
        setTicketData(JSON.parse(storedTicketData));
      }
    } catch (error) {
      console.error('Error retrieving ticket data:', error);
    } finally {
      // After retrieving data, set isLoading to false
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? ( // Show ActivityIndicator if loading
        <ActivityIndicator size="large" color="#083B51" />
      ) : (
      //  ticketData ? (
          <View>
          
            <Text style={styles.title}>{ticketData.title}</Text>
            <View > 
              <QRCode
                value={JSON.stringify(ticketData)}
                size={300}
              />
            </View>
            
            
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>{ticketData.location}</Text>
              <Text style={styles.detailsText}>{ticketData.date} | {ticketData.startTime}</Text>
              <Text style={styles.detailsText}>${ticketData.price}</Text>
            </View>
          </View>
      // ) : (
          
      //     <Text>No ticket data available</Text>
      // )
      )}
    </View>
  );
};

export default TicketQRCode;
