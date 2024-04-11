import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity,ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import eventDetailsStyles from './event-details.style'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  useRouter } from "expo-router";




const EventDetails = () => {
  const router = useRouter();
  const [eventData, setEventData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Retrieve event data from AsyncStorage
    AsyncStorage.getItem('eventData')
      .then((data) => {
        if (data) {
          
          setEventData(JSON.parse(data));
         // console.log(eventData.images)
        }
      })
      .catch((error) => console.error('Error retrieving event data:', error));
  }, []);


  const handlePayment = async () => {
    try {
      setIsLoading(true);
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
      // navigate to purchased ticket list
      router.push(`/ticket`);
    } catch (error) {
      console.error('Error handling payment:', error);
    }
  };


  // Render loading indicator while eventData is empty
  if (!eventData) {
    return (
      <View style={eventDetailsStyles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={eventDetailsStyles.container}>
      <View style={eventDetailsStyles.imageContainer}>
        <ScrollView horizontal ={true} pagingEnabled>
          {eventData.images.map((image, index) => (
            <View key={index}> 
              <Image
                source={{ uri: image }}
                style={eventDetailsStyles.image}
                onError={(error) => console.error("Image loading error:", error)}
              />
            </View>
          ))} 
        </ScrollView>
      </View>
      <View style={eventDetailsStyles.contentContainer}>
        
        <Text style={eventDetailsStyles.title}>{eventData.title}</Text>
        <Text style={eventDetailsStyles.title}>{eventData.eventType}</Text>
        <View style={eventDetailsStyles.infoContainer}>
          <MaterialIcons name="date-range" size={20} color="#666" />
          <Text style={eventDetailsStyles.infoText}>{eventData.date}</Text>
          <Text style={eventDetailsStyles.infoText}>{eventData.startTime}</Text>
        </View>
        <View style={eventDetailsStyles.infoContainer}>
          <MaterialIcons name="location-on" size={20} color="#666" />
          <Text style={eventDetailsStyles.infoText}>{eventData.location}</Text>
        </View>
        <View style={eventDetailsStyles.infoContainer}>
          <Text style={eventDetailsStyles.infoText}>{eventData.postcode}</Text>
          <Text style={eventDetailsStyles.infoText}>{eventData.locationCity},</Text>
          <Text style={eventDetailsStyles.infoText}>{eventData.locationState}</Text>
          <Text style={eventDetailsStyles.infoText}>{eventData.locationCountry}</Text>
        </View>
        {/* <Text style={eventDetailsStyles.description}> {eventData.description}</Text> */}
        <View style={eventDetailsStyles.infoContainer}>
           <Text style={eventDetailsStyles.distance}>{eventData.distance} km away</Text>
        </View>
        <Text style={eventDetailsStyles.price}>Price: ${eventData.price}</Text>
        <TouchableOpacity
          style={eventDetailsStyles.button}
           onPress={() => {
            handlePayment()
           }}
          >
           {isLoading ? (<ActivityIndicator size="large" color="#083B51" />) : (
             <Text style={eventDetailsStyles.buttonText}>Purchase Ticket</Text>
            )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EventDetails;
