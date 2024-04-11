import React, { useState } from 'react';


import { Text, View, TouchableOpacity,Image, TextInput, ScrollView, ActivityIndicator} from 'react-native';

import { images} from '../../constants';

import styles from "./login.style";

import { Ionicons } from '@expo/vector-icons';

import {  useRouter } from "expo-router";

const Login = ({ModalMessage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()
  
  const handleLogin = async () => {
    setIsLoading(true); 
    // Validate form fields
    if (!email || !password) {
     // Display error modal if any required fields are empty
     setIsLoading(false); 
     setErrorMessage('Please fill in all required fields.');
     setErrorModalVisible(true);
     return;
   }
     try {
       // Make API call to sign up
       const response = await fetch('http://137.184.159.197:5000/login', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           email,
           password
         }),
       });
     const data = await response.json();
       if (data.status == 200) {
         console.log(response)
         // Navigate to the dashboard upon successful registration
         setIsLoading(false);
         router.push('/dashboard');
       } else {
        
         //  console.error( response.json());
         setIsLoading(false);
         setErrorMessage(data.message);
         setErrorModalVisible(true);
       }
     } catch (error) {
      setIsLoading(false);
       setErrorMessage("server error");
       setErrorModalVisible(true);
       console.error('Error:', error);
     }
   };

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


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
                    <TouchableOpacity style={styles.button} onPress={() => { handleLogin()}}>
                    {isLoading ? (
                            <ActivityIndicator size="large" color="#083B51" />
                            ) : (
                            <Text style={styles.buttonText}>Login</Text>
                          )}
                    </TouchableOpacity>
                    <View style={styles.loginContainer}>
                        <Text style={styles.alreadyRegisteredText}>Don't have an existing account?</Text>
                        <TouchableOpacity  onPress={() => { router.push(`/sign-up`);}} >
                          <Text style={styles.loginLink}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
            
            </View>
            <ModalMessage
              visible={errorModalVisible}
              message={errorMessage}
              onClose={() => setErrorModalVisible(false)}
            />
           
      </ScrollView>
    
  );
};

export default Login;
