import React from 'react';
import { View, Text , TouchableOpacity} from 'react-native';

import {  useRouter } from "expo-router";

import styles from "./search.style";


const SearchButton = () => {
  const router = useRouter()
  return (
    <TouchableOpacity onPress={() => { router.push(`/event-list`);}} style={styles.container}>
      
      <View style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search Event</Text>
      </View>
      <View style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </View>
    </TouchableOpacity>
  );
};
 
export default SearchButton;