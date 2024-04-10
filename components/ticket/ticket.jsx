import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import styles from "./ticket.style";

const TicketPage = () => {
  const [ticketList, setTicketList] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Load ticket list from AsyncStorage when component mounts
    loadTicketListFromStorage();
  }, []);

  const loadTicketListFromStorage = async () => {
    try {
      // Retrieve ticket list from AsyncStorage
      const storedTicketList = await AsyncStorage.getItem('ticketList');
      if (storedTicketList !== null) {
        // If ticket list exists, set it to state
        setTicketList(JSON.parse(storedTicketList));
      }
    } catch (error) {
      console.error('Error loading ticket list from AsyncStorage:', error);
    }
  };

  const handleTicketPress = async (ticket) => {
    try {
      // Save the selected ticket data to AsyncStorage
      await AsyncStorage.setItem('ticketDataPurchased', JSON.stringify(ticket));
      // Set the selected ticket and navigate to the TicketQRCode page
      setSelectedTicket(ticket);
      router.push('/ticker-qrcode');
    } catch (error) {
      console.error('Error saving selected ticket data:', error);
    }
  };

  const renderTicketItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleTicketPress(item)} style={styles.ticketContainer}>
      {/* Card for image */}
      <View style={styles.imageCard}>
        <Image source={{ uri: item.images[0] }} style={styles.ticketImage} />
      </View>
      {/* Thin line */}
      <View style={styles.line}></View>
      {/* Card for information */}
      <View style={styles.infoCard}>
        <Text numberOfLines={1} style={styles.ticketTitle}>{item.title}</Text>
        <Text style={styles.ticketInfo}>{item.location}</Text>
        <Text style={styles.ticketInfo}>{item.date} {item.startTime}</Text>
        <Text style={styles.ticketInfo}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tickets</Text>
      {ticketList.length > 0 ? (
        <FlatList
          data={ticketList}
          renderItem={renderTicketItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View style={styles.noTicketsContainer}>
          <Text style={styles.noTicketsText}>No purchased tickets available</Text>
        </View>
      )}
     
    </View>
  );
};

export default TicketPage;
