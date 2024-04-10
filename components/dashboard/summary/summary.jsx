import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

import styles from "./summary.style";

const Summary = () => {
  const [totalTicketCount, setTotalTicketCount] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);

  useEffect(() => {
    // Load values from AsyncStorage when component mounts
    loadValuesFromStorage();
  }, []);

  const loadValuesFromStorage = async () => {
    try {
      // Retrieve ticket list and calculate total ticket count
      const ticketList = await AsyncStorage.getItem('ticketList');
      const parsedTicketList = ticketList ? JSON.parse(ticketList) : [];
      const countOfTickets = parsedTicketList.length;
      
      // Calculate total transactions by summing up prices
      let sumOfPrices = 0;
      parsedTicketList.forEach(ticket => {
        sumOfPrices += ticket.price ? ticket.price : 0;
      });

      // Save values to AsyncStorage
      await AsyncStorage.setItem('totalTicketCount', countOfTickets.toString());
      await AsyncStorage.setItem('totalTransactions', sumOfPrices.toString());

      // Update state with the calculated values
      setTotalTicketCount(countOfTickets);
      setTotalTransactions(sumOfPrices);
    } catch (error) {
      console.error('Error loading values from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Total Tickets Card */}
      <View style={styles.totalTicketcard}>
        {/* Display the total ticket count here */}
        <Text style={styles.cardValue}>{totalTicketCount}</Text>
        <Text style={styles.cardTitle}>Total Tickets</Text>
      </View>

      {/* Transactions Card */}
      <View style={[styles.card, styles.transactionsCard]}>
        {/* Display the transaction value here */}
        <Text style={styles.cardValue}>${totalTransactions}</Text>
        <Text style={styles.cardTitle}>Transactions</Text>
      </View>
    </View>
  );
};

export default Summary;
