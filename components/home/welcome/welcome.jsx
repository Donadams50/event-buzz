import React from 'react';

import {  useRouter } from "expo-router";

import { Text, View, TouchableOpacity} from 'react-native';

import styles from "./welcome.style";



const Welcome = () => {
  const router = useRouter()
  return (
    <View style={styles.card}>
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.space} />
      <Text style={styles.caption}>Welcome To Event Buzz. Your Ultimate</Text>
      <Text style={styles.caption}>Live Show Companion.</Text>
      <View style={styles.space} />
      <Text style={styles.subCaption}>The easiest mobile application to get event</Text>
      <Text style={styles.subCaption}> tickets!</Text>
      <View style={styles.space} />
      <TouchableOpacity  onPress={() => { router.push(`/login`);}} style={styles.button}>
         <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
  </View>
    
  );
};

export default Welcome;
