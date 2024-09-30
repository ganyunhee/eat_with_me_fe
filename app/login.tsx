import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { StyledView, StyledFormView, StyledContainer, StyledText, StyledInput, StyledButton, StyledLink } from '../components/StyledComponents';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginFormProps {
  username: string;
  password: string;
}

const login = () => {
  const router = useRouter();

  const [loginFormValues, setLoginFormValues] = useState<LoginFormProps>({
    username: '',
    password: '',
  });

  // Handles changes for email and password
  const handleChange = (field: keyof LoginFormProps) => (value: string) => {
    setLoginFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const loginData = {
        username: loginFormValues.username,
        password: loginFormValues.password
      };

      console.log('Input username:', loginData.username);
      console.log('Input password:', loginData.password);
      
      //CORS Headers
      //var myHeaders = new Headers();
      //myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:8081');
      //myHeaders.append('Access-Control-Allow-Credentials', 'true');
      //myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

      const apiUrl = process.env.EXPO_PUBLIC_BACKEND_API_URL;

      const response = await fetch(`${apiUrl}/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      console.log('Response status:', response.status);
      console.log('Response data:', response);

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const result = await response.json();
        console.log('Login result:', result);
        const access_token = result.token;
        await AsyncStorage.setItem('access_token', access_token);
        console.log('Token saved to AsyncStorage');
        // Handle login here
        // TODO. Handle Invalid credentials
        router.replace("/home");
      } else {
        const text = await response.text();
        console.log('Response text:', text);
        throw new Error('Received non-JSON response from server');
      }

      /*
      const result = await response.json();

      if (response.ok) {
        console.log('Login successful:', result);
        // Navigate or handle successful login here
      } else {
        console.log('Response:', response);
        console.error('Login failed:', result);
        Alert.alert('Error', result || 'Login failed');
      }
      */
    } catch (error) {
      console.error('An error occurred:', error);
      Alert.alert('Error', 'An unexpected error occurred');
    }
  };

  return (
    <StyledView className="flex-1 items-center justify-center bg-white pb-4">
      <StyledContainer>
      <Image className="m-14" source={require('../assets/eatwithme_logo.png')} />
      <StyledFormView>
        <StyledInput
          placeholder="Email"
          onChangeText={handleChange('username')} // Passing the field dynamically
          value={loginFormValues.username}
          returnKeyType='next'
        />
        <StyledInput
          placeholder="Password"
          secureTextEntry
          onChangeText={handleChange('password')} // Passing the field dynamically
          value={loginFormValues.password}
          returnKeyType='done'
          onSubmitEditing={handleLogin}
        />
        {/*<Link href="/home" asChild onPress={handleLogin}> */}
          <StyledButton className="mt-6 transition-all duration-300" onPress={handleLogin}>
            Login
          </StyledButton>
        {/*</Link>*/}
          <StyledText className="m-3 self-center">
          Already have an account?{' '}
          <StyledLink href="/signup">
            Sign Up
          </StyledLink>
          </StyledText>
          </StyledFormView>
        </StyledContainer>  
      </StyledView>
  );
};

export default login