import React, { useState, useEffect } from 'react';

import { View, Text, FlatList, Image, TouchableOpacity, Modal, TextInput, Alert, Platform ,ActivityIndicator} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import * as Location from 'expo-location';

import Geohash from 'latlon-geohash';

import styles from "./event-list.style";

import {Picker} from '@react-native-picker/picker';

import AsyncStorage from '@react-native-async-storage/async-storage';


const EventList = () => {
  const [numColumns, setNumColumns] = useState(2); // Initial number of columns
  const [upcomingEventsData, setUpcomingEventsData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [radius, setRadius] = useState('');
  const [radiusUnit, setRadiusUnit] = useState('miles');
  const [location, setLocation] = useState(null);
  const [geoPoint, setGeoPoint] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getLocation();
  }, []);

  const navigation = useNavigation();

  // fuction to get user location
  const getLocation = async () => {
    try {
    
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== "granted") {
        Alert.alert('Location permission required', 'Please allow access to your location.');
        return;
      }
  
      await Location.requestBackgroundPermissionsAsync();

      const { coords } = await Location.getCurrentPositionAsync({ accuracy: Platform.OS === "android" ? Location.Accuracy.Low : Location.Accuracy.Lowest, });
      
      setLocation(coords);

      // convert the long and lat of the device to geoHash as required by the api
      const geoPoint = Geohash.encode(coords.latitude, coords.longitude, 6);
      setGeoPoint(geoPoint);
  
      // Call fetchData after obtaining the location
      fetchData(geoPoint, coords.latitude, coords.longitude);
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'Failed to get location.');
    }
  };
  
  //api call to ticket master api to fetch events 
  const fetchData = async (geoPoint, lat, long ) => {
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=50&geoPoint=${geoPoint}&sort=distance,date,asc&radius=${radius}&keyword=${keyword}&unit=${radiusUnit}&apikey=hzRbQYyoQVOGZvLgrGMFzRSe9IzMjQjg`);
      const data = await response.json();
      const transformedData = data._embedded.events.map(event => {
        // Calculate distance between user's current location and event location
        const distance = calculateDistance(lat, long, event._embedded?.venues?.[0]?.location.latitude, event._embedded?.venues?.[0]?.location.longitude);
        
        return {
          id: event.id,
          title: event.name || "",
          date: event.dates.start.localDate,
          startTime: event.dates.start.localTime,
          eventType: event.classifications?.[0]?.segment.name || "",
          price: event.priceRanges?.[0]?.min || 0,
          location: `${event._embedded?.venues?.[0]?.name}, ${event._embedded?.venues?.[0]?.city.name}, ${event._embedded?.venues?.[0]?.address.line1}` || "",
          locationLong: event._embedded?.venues?.[0]?.location.longitude || 0,
          locationLat: event._embedded?.venues?.[0]?.location.latitude || 0,
          locationCountry: event._embedded?.venues?.[0]?.country.name || "",
          locationCity: event._embedded?.venues?.[0]?.city.name || "",
          locationState: event._embedded.venues[0]?.state?.name || "",
          postcode: event._embedded.venues?.[0]?.postalCode || "",
          images: event.images.map(image => image.url),
          distance: distance 
        };
      });
      setUpcomingEventsData(transformedData);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // fuction called when user filter with desired parameters
  const handleSearch = async () => {
      // Set loading to true once data is fetched
    try {
      setLoading(true); 
      await Location.requestBackgroundPermissionsAsync();
      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
      // Fetch data using the obtained location
      const geoPoint = Geohash.encode(coords.latitude, coords.longitude, 6);
      setGeoPoint(geoPoint);
      // Close the modal after updating the list
      setModalVisible(false); 
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=30&geoPoint=${geoPoint}&sort=distance,date,asc&radius=${radius}&keyword=${keyword}&unit=${radiusUnit}&apikey=hzRbQYyoQVOGZvLgrGMFzRSe9IzMjQjg`);
      const data = await response.json();
      let transformedData 
      if(data.page.totalElements === 0){
        transformedData  = []
      }else{
        transformedData = data._embedded.events.map(event => {
          // Calculate distance between user's current location and event location
          const distance = calculateDistance(coords.latitude, coords.longitude, event._embedded?.venues?.[0]?.location.latitude, event._embedded?.venues?.[0]?.location.longitude);
          
          return {
            id: event.id,
            title: event.name || "",
            date: event.dates.start.localDate,
            startTime: event.dates.start.localTime,
            eventType: event.classifications?.[0]?.segment.name || "",
            price: event.priceRanges?.[0]?.min || 0,
            location: `${event._embedded?.venues?.[0]?.name}, ${event._embedded?.venues?.[0]?.city.name}, ${event._embedded?.venues?.[0]?.address.line1}` || "",
            locationLong: event._embedded?.venues?.[0]?.location.longitude || 0,
            locationLat: event._embedded?.venues?.[0]?.location.latitude || 0,
            locationCountry: event._embedded?.venues?.[0]?.country.name || "",
            locationCity: event._embedded?.venues?.[0]?.city.name || "",
            locationState: event._embedded?.venues[0]?.state?.name || "",
            postcode: event._embedded?.venues?.[0]?.postalCode || "",
            images: event.images.map(image => image.url),
            distance: distance 
          };
        });
      } 
      setUpcomingEventsData(transformedData);
      // Set loading to false once data is fetched
      setLoading(false); 
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

   // Function to calculate distance between two points using Haversine formula
   const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance.toFixed(2); // Round to 2 decimal places
   };

   // at the click of an event to view more
   const handleEventPress = async (eventData) => {
    try {
      // Save event data to AsyncStorage
      await AsyncStorage.setItem('eventData', JSON.stringify(eventData));
      // Navigate to EventDetails screen
      navigation.navigate('event-details');
    } catch (error) {
      console.error('Error saving event data:', error);
    }
   };


   const renderItem = ({ item }) => (
    <View style={styles.eventCard}>
      <TouchableOpacity onPress={() => handleEventPress(item)}>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.eventTime}>{item.startTime}</Text>
        </View>
        <Image source={{ uri: item.images[0] }} style={styles.eventImage} />
        <View style={styles.eventDetails}>
          <Text numberOfLines={1} style={styles.eventTitle}>{item.title}</Text> 
          <View style={styles.dateContainer}>
            <MaterialIcons name="date-range" size={16} color="#666" />
            <Text style={styles.eventDate}>{item.date}</Text>
          </View>
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={16} color="#666"  />
            <Text numberOfLines={2} style={styles.eventLocation}>{item.location}</Text>
          </View>
          <Text style={styles.distance}>{item.distance} km away</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Events </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filterButton}>
          <MaterialIcons name="filter-list" size={24} color="#000" />
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
      </View>
      {loading ? ( // Show loading indicator while data is loading
        <View style={styles.loadingContainer}>
          <ActivityIndicator   size="large" color="#083B51" />
        </View>
      ) : (
        <FlatList
          data={upcomingEventsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          columnWrapperStyle={styles.columnWrapper}
        />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}

        
      >

        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelIcon}>
              <MaterialIcons name="cancel" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalHeading}>Filter your event by</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Keyword</Text>
                <TextInput
                  style={styles.input}
                  placeholder="keyworrd"
                  value={keyword}
                  onChangeText={text => setKeyword(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Radius</Text>
            <TextInput
              style={styles.input}
              placeholder="radius"
              value={radius}
              onChangeText={text => setRadius(text)}
              keyboardType="numeric"
            />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Radius Unit</Text>
                <Picker
                  selectedValue={radiusUnit}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => setRadiusUnit(itemValue)}
                >
                  <Picker.Item label="Miles" value="miles" />
                  <Picker.Item label="Kilometers" value="km" />
                </Picker>
            </View>
            <TouchableOpacity
              style={styles.searchButton}
              onPress={handleSearch}
            >
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EventList;
