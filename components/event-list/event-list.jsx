import React, { useState, useEffect } from 'react';

import { View, Text, FlatList, Image, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import * as Location from 'expo-location';

import Geohash from 'latlon-geohash';

import styles from "./event-list.style";

import {Picker} from '@react-native-picker/picker';


const EventList = () => {
  const [numColumns, setNumColumns] = useState(2); // Initial number of columns
  const [upcomingEventsData, setUpcomingEventsData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [radius, setRadius] = useState('');
  const [radiusUnit, setRadiusUnit] = useState('miles');
  const [location, setLocation] = useState(null);
  const [geoPoint, setGeoPoint] = useState('');

  useEffect(() => {
    getLocation();
  }, []);
  
  // fuction to get user location
  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert('Location permission required', 'Please allow access to your location.');
        return;
      }
  
      await Location.requestBackgroundPermissionsAsync();
  
      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
  
      // convert the long and lat of the device to geoHash as required by the api
      const geoPoint = Geohash.encode(coords.latitude, coords.longitude, 6);
      setGeoPoint(geoPoint);
  
      // Call fetchData after obtaining the location
      fetchData(geoPoint);
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'Failed to get location.');
    }
  };
  
  //api call to ticket master api to fetch events 
  const fetchData = async (geoPoint) => {
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=30&geoPoint=${geoPoint}&sort=distance,date,asc&radius=${radius}&keyword=${keyword}&unit=${radiusUnit}&apikey=hzRbQYyoQVOGZvLgrGMFzRSe9IzMjQjg`);
      const data = await response.json();
      const transformedData = data._embedded.events.map(event => ({
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
        locationCity: event._embedded.venues?.[0]?.city.name || "",
        locationState: event._embedded.venues[0]?.state?.name || "",
        postcode: event._embedded.venues?.[0]?.postalCode || "",
        images: event.images.map(image => image.url),
      }));
      setUpcomingEventsData(transformedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // fuction called when user filter with desired parameters
  const handleSearch = async () => {
    try {

      await Location.requestBackgroundPermissionsAsync();
  
      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
  
      // Fetch data using the obtained location
      const geoPoint = Geohash.encode(coords.latitude, coords.longitude, 6);
      setGeoPoint(geoPoint);
      // Close the modal after updating the list
      setModalVisible(false); 
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=30&geoPoint=${geoPoint}&sort=distance,date,asc&radius=${radius}&keyword=&unit=${radiusUnit}&apikey=hzRbQYyoQVOGZvLgrGMFzRSe9IzMjQjg`);

        const data = await response.json();
        const transformedData = data._embedded.events.map(event => ({
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
            locationCity: event._embedded.venues?.[0]?.city.name || "",
            locationState: event._embedded.venues[0]?.state?.name || "",
            postcode: event._embedded.venues?.[0]?.postalCode || "",
            images: event.images.map(image => image.url),
        }));
        setUpcomingEventsData(transformedData);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }) => (
  
      <View style={styles.eventCard}>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.eventTime}>{item.startTime}</Text>
        </View>
        <Image source={{uri: item.images[0]}} style={styles.eventImage} />
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle}>{item.title}</Text> 
          <View style={styles.dateContainer}>
            <MaterialIcons name="date-range" size={16} color="#666" />
            <Text style={styles.eventDate}>{item.date}</Text>
          </View>
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={16} color="#666"  />
            <Text style={styles.eventLocation}>{item.location}</Text>
          </View>
        </View>
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
      <FlatList
        data={upcomingEventsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        columnWrapperStyle={styles.columnWrapper}
        
      />
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
                  placeholder="keyword"
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
