import React, { useState } from 'react';

import {  useRouter } from "expo-router";

import { Text, View, TouchableOpacity,Image, TextInput, ScrollView} from 'react-native';

import { images} from '../../constants';

import styles from "./login.style";

import { Ionicons } from '@expo/vector-icons';

const Login = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const router = useRouter()
  return (
    
        // Scrollview is the parent tag because of the form, while typing the password,
        //  user might want to see what they are typing
        
       <ScrollView contentContainerStyle={styles.container}>
            
            

            <View style={styles.container}>
                <View style={styles.space} />
                <View style={styles.space} />
                <View style={styles.space} />
                <View style={styles.imageContainer} >
                    <Image source={images.logoLeftBlue} style={styles.image} />
                    <Image source={images.logoRightBlue} style={styles.image} />
                </View>

                <Text style={styles.header}>Event Buzz Login Form</Text>
                <View style={styles.space} />
                 <View style={styles.space} />
    
                <View style={styles.formContainer}>
                   
                 
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                          style={styles.input}
                          value={email}
                          onChangeText={setEmail}
                          
                          keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                          style={styles.input}
                          value={password}
                          onChangeText={setPassword}
                          
                          secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.space} />
                    <TouchableOpacity style={styles.button} onPress={() => { router.push(`/dashboard`);}}>
                      <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.loginContainer}>
                        <Text style={styles.alreadyRegisteredText}>Don't have an existing account?</Text>
                        <TouchableOpacity  onPress={() => { router.push(`/sign-up`);}} >
                          <Text style={styles.loginLink}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
            
            </View>
          
           
      </ScrollView>
    
  );
};

export default Login;
