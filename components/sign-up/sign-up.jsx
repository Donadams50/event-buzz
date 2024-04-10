import React, { useState } from 'react';

import {  useRouter } from "expo-router";

import { Text, View, TouchableOpacity,Image, TextInput, ScrollView, ActivityIndicator} from 'react-native';

import { images} from '../../constants';

import styles from "./sign-up.style";

import { Ionicons } from '@expo/vector-icons';

const SignUp = ({ModalMessage}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = async () => {
    setIsLoading(true); 
   // Validate form fields
   if (!name || !phoneNumber || !email || !password || !confirmPassword) {
    // Display error modal if any required fields are empty
    setIsLoading(false);
    setErrorMessage('Please fill in all required fields.');
    setErrorModalVisible(true);
  
    return;
  }
    try {
      // Make API call to sign up
      const response = await fetch('http://137.184.159.197:5000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username : name,
          phoneNumber,
          email,
          password,
          country: "Nigeria",
          countryTag: "NG",
          confirmPassword,
        }),
      });
    //  console.log(response)
    const data = await response.json();
    console.log(data)
      if (data.status == 200) {
        console.log(response)
        setErrorMessage(data.message);
        setErrorModalVisible(true);
        setIsLoading(false); 
        // Navigate to the dashboard upon successful registration
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

  const router = useRouter()
  return (
    
        // Scrollview is the parent tag because of the form, while typing the password,
        //  user might want to see what they are typing
        
       <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          
            <View style={styles.container}>
                <View style={styles.space} />
                <View style={styles.imageContainer} >
                    <Image source={images.logoLeftBlue} style={styles.image} />
                    <Image source={images.logoRightBlue} style={styles.image} />
                </View>
                <Text style={styles.header}>Event Buzz Registration Form</Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                          style={styles.input}
                          value={name}
                          onChangeText={setName}
                          required
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                          style={styles.input}
                          value={phoneNumber}
                          onChangeText={setPhoneNumber}
                          required
                          keyboardType="phone-pad"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                          style={styles.input}
                          value={email}
                          onChangeText={setEmail}
                          required
                          keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                          style={styles.input}
                          value={password}
                          onChangeText={setPassword}
                          required
                          secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput
                          style={styles.input}
                          value={confirmPassword}
                          onChangeText={setConfirmPassword}
                          
                          secureTextEntry={!showConfirmPassword}
                        />
                        <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
                          <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity  disabled={isLoading}  style={styles.button}   onPress={() => { handleSignUp()}}>
                           {isLoading ? (
                            <ActivityIndicator size="large" color="#083B51" />
                            ) : (
                            <Text style={styles.buttonText}>Register</Text>
                          )}
                    </TouchableOpacity>
                    <View style={styles.loginContainer}>
                        <Text style={styles.alreadyRegisteredText}>Have and existing account?</Text>
                        <TouchableOpacity  onPress={() => { router.push(`/login`);}} >
                          <Text style={styles.loginLink}>Login</Text>
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

export default SignUp;
