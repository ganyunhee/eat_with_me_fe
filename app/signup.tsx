import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { StyledView, StyledContainer, StyledText, StyledInput, StyledButton, StyledLink } from '../components/StyledComponents'
import { Link } from 'expo-router'

const signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
  
    const handleSignUp = async () => {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone Number:', phoneNumber);
      console.log('Password:', password);
      console.log('Password Repeat:', passwordRepeat);
  
      // Check if passwords match
      if (password !== passwordRepeat) {
        Alert.alert('Error', 'Passwords do not match.');
        return;
      }
  
      // Prepare the URL-encoded data
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append('name', name);
      urlEncodedData.append('email', email);
      urlEncodedData.append('phoneNumber', phoneNumber);
      urlEncodedData.append('password', password);
  
      try {
        // Send POST request to the backend
        const response = await fetch('https://your-backend-url.com/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: urlEncodedData.toString(),
        });
  
        const result = await response.text(); // Use response.json() if expecting JSON
  
        if (response.ok) {
          console.log('Signup successful:', result);
          Alert.alert('Success', 'You have signed up successfully!');
          // Navigate or handle successful signup here
        } else {
          console.log('Response:', response);
          console.error('Signup failed:', result);
          Alert.alert('Error', result || 'Signup failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        Alert.alert('Error', 'An unexpected error occurred');
      }
    };

  return (
    <ScrollView className="bg-white flex-1 items-center justify-center pb-4">
        <StyledContainer>
        <Image className="m-14" source={require('../assets/logo.svg')}></Image>
        <StyledView className="w-full max-w-sm">
            <StyledInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <StyledInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <StyledInput
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
            />
            <StyledInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <StyledInput
                
                placeholder="Repeat Password"
                value={passwordRepeat}
                onChangeText={setPasswordRepeat}
                secureTextEntry
            />
            {/*
            <Link
                href="/home"
                asChild
                onPress={handleLogin}
                >
            */}
                <StyledButton className="mt-6" onPress={handleSignUp}>
                    Sign Up
                </StyledButton>
            {/*</Link>*/}
            <StyledText className="self-center m-3">Already have an account? <StyledLink href="/login">Sign In</StyledLink></StyledText>
        </StyledView>
        </StyledContainer>
    </ScrollView>
  )
}

export default signup

const styles = StyleSheet.create({})