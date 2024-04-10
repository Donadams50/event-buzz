import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { icons } from '../../../constants';
import styles from './footer.style';

const Footer = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Dashboard */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push(`/dashboard`)}
      >
        <FontAwesome name="home" size={30} color="white" />
        
      </TouchableOpacity>

      {/* Event List */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push(`/event-list`)}
      >
        <Image
          source={icons.eventIconOrange}
          resizeMode="contain"
          style={styles.tabIcon}
        />
       
      </TouchableOpacity>

      {/* My Tickets */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push(`/ticket`)}
      >
        <Image
          source={icons.myTicketIconWhite}
          resizeMode="contain"
          style={styles.tabIcon}
        />
   
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
