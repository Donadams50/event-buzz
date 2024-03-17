import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const UpcomingEvents = () => {
  // Sample data array of upcoming events
  const upcomingEventsData = [
    { id: '1', title: 'Event 1', date: '27th Oct', image: require('./event1.jpg') },
    { id: '2', title: 'Event 2', date: '28th Oct', image: require('./event2.jpg') },
    // Add more event objects as needed
  ];

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.eventCard}>
      <Image source={item.image} style={styles.eventImage} />
      <View style={styles.eventDetails}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming Events</Text>
      <FlatList
        data={upcomingEventsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true} // Display items horizontally
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
      />
    </View>
  );
};


export default UpcomingEvents;