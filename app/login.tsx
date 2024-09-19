import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

import { StyledView, StyledFormView, StyledContainer, StyledText, StyledInput, StyledButton, StyledLink } from '../components/StyledComponents';

interface LoginFormProps {
  username: string;
  password: string;
}

const login = () => {
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
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append('username', loginFormValues.username);
      console.log('Input username:', loginFormValues.username);
      urlEncodedData.append('password', loginFormValues.password);
      console.log('Input password:', loginFormValues.password);

      var myHeaders = new Headers();
      //myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:8081');
      //myHeaders.append('Access-Control-Allow-Credentials', 'true');
      //myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

      const response = await fetch('https://qwer-wfvxm.run.goorm.site/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedData.toString(),
      });

      const result = await response.text();

      if (response.ok) {
        console.log('Login successful:', result);
        // Navigate or handle successful login here
      } else {
        console.log('Response:', response);
        console.error('Login failed:', result);
        Alert.alert('Error', result || 'Login failed');
      }
    } catch (error) {1
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
        />
        <StyledInput
          placeholder="Password"
          secureTextEntry
          onChangeText={handleChange('password')} // Passing the field dynamically
          value={loginFormValues.password}
        />
        <Link href="/home" asChild /*onPress={handleLogin}*/>
        {/* Add onPress={handleLogin} later */}
          <StyledButton className="mt-6 transition-all duration-300" >
            Login
          </StyledButton>
        </Link>
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