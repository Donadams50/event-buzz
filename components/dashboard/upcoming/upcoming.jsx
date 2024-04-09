import React, { useState, useEffect } from 'react';

import { View, Text, FlatList, Image  } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import styles from "./upcoming.style";

const UpcomingEvents = () => {
    const [upcomingEventsData, setUpcomingEventsData] = useState([]);
    useEffect(() => {

    // Call the fetchData function when the component mounts
     fetchData();

    //Cleanup function to unsubscribe from the API call when the component unmounts
        return () => {};
    }, []); 

   // Function to fetch data from API
    const fetchData = async () => {
    try {
      // made  a GET request to ticket master endpoint
      const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=hzRbQYyoQVOGZvLgrGMFzRSe9IzMjQjg');
      // Parse the JSON response
      const data = await response.json();
    
    // destructured the data to fit in my own data structure
      const transformedData = data._embedded.events.map(event => ({
        id: event.id,
        title: event.name,
        date: event.dates.start.localDate,
        startTime: event.dates.start.localTime,
        eventType: event.classifications?.[0]?.segment.name || "",  //I used  optional chaining to avoid errors if classifications and segment is missing
        price:event.priceRanges?.[0]?.min || 0, // I used optional chaining to avoid errors if priceRanges is missing
        location: `${event._embedded?.venues?.[0]?.name}, ${event._embedded?.venues?.[0]?.city.name}, ${event._embedded?.venues?.[0]?.address.line1}` || "", // I used optional chaining to avoid errors if _embedded and venues is missing
        locationLong: event._embedded?.venues?.[0]?.location.longitude || 0, // I used optional chaining to avoid errors if location is missing
        locationLat: event._embedded?.venues?.[0]?.location.latitude || 0, // I used optional chaining to avoid errors if location is missing
        locationCountry: event._embedded?.venues?.[0]?.country.name || "", // I used optional chaining to avoid errors if country is missing
        locationCity: event._embedded.venues?.[0]?.city.name || "", // I used optional chaining to avoid errors if city is missing
        locationState: event._embedded.venues[0]?.state.name || "", // I used optional chaining to avoid errors if state is missing
        postcode: event._embedded.venues?.[0]?.postalCode || "", // I used optional chaining to avoid errors if postcode is missing
        images: event.images.map(image => image.url), // Mapped each image URL to an array
      }));
      
      // Update the state with the received data
      setUpcomingEventsData(transformedData);
    } catch (error) {
          console.error('Error fetching data:', error);
    }
    };
    


  // Render item function for FlatList
    const renderItem = ({ item }) => (
      <View style={styles.eventCard}> 
      <View style={styles.dateTimeContainer}>
          <Text style={styles.eventTime}>{item.startTime}</Text>
        </View>
        <Image source={{uri: item.images[0]}} style={styles.eventImage} />
        {/* <Text style={styles.eventTime}>{item.time}</Text> */}
        <View style={styles.eventDetails}>
          <Text numberOfLines={1} style={styles.eventTitle}>{item.title}</Text> 
          <View style={styles.dateContainer}>
            <MaterialIcons name="date-range" size={16} color="#666" />
            <Text style={styles.eventDate}>{item.date}</Text>
            {/* <MaterialIcons name="schedule" size={16} color="#666" />
            <Text style={styles.eventTime}>{item.time}</Text> */}
          </View>
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={16} color="#666" />
            <Text style={styles.eventLocation}>{item.location}</Text>
          </View>
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Upcoming Events Around me</Text>
        <FlatList
          data={upcomingEventsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
        />
      </View>
    );
};


export default UpcomingEvents;
