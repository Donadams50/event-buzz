import React, { useState } from 'react';

import {  useRouter } from "expo-router";

import { Text, View, TouchableOpacity,Image, TextInput, ScrollView} from 'react-native';

import { images} from '../../constants';

import styles from "./sign-up.style";

import { Ionicons } from '@expo/vector-icons';

const SignUp = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const router = useRouter()
  return (
    
        // Scrollview is the parent tag because of the form, while typing the password,
        //  user might want to see what they are typing
        
       <ScrollView contentContainerStyle={styles.container}>
          
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
                         
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                          style={styles.input}
                          value={phoneNumber}
                          onChangeText={setPhoneNumber}
                       
                          keyboardType="phone-pad"
                        />
                    </View>
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
                    <TouchableOpacity style={styles.button}   onPress={() => { router.push(`/dashboard`);}}>
                      <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <View style={styles.loginContainer}>
                        <Text style={styles.alreadyRegisteredText}>Have and existing account?</Text>
                        <TouchableOpacity  onPress={() => { router.push(`/login`);}} >
                          <Text style={styles.loginLink}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          
           
      </ScrollView>
    
  );
};

export default SignUp;
