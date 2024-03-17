import React from 'react';
import { View, Text } from 'react-native';

import styles from "./summary.style";

const Summary = () => {
  return (
    <View style={styles.container}>
          {/* Total Tickets Card */}
          <View style={styles.totalTicketcard}>
      
            {/* Display the total ticket count here */}
            <Text style={styles.cardValue}>100</Text>
            <Text style={styles.cardTitle}>Total Tickets</Text>
          </View>
          
          {/* Transactions Card */}
          <View style={[styles.card, styles.transactionsCard]}>
          
            {/* Display the transaction value here */}
            <Text style={styles.cardValue}>$500,000</Text>
            <Text style={styles.cardTitle}>Transactions</Text>
          </View>
    </View>
  );
};



export default Summary;