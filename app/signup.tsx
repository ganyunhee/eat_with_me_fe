import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { StyledView, StyledFormView, StyledContainer, StyledText, StyledInput, StyledButton, StyledLink } from '../components/StyledComponents'
import { Link } from 'expo-router'

interface SignUpFormProps {
  username: string,
  email: string,
  phone_number: string,
  password: string,
  passwordRepeat: string
}

const signup = () => {
  const [signUpFormValues, setSignUpFormValues] = useState<SignUpFormProps>({
    username: '',
    email: '',
    phone_number: '',
    password: '',
    passwordRepeat: '',
  });

  const handleChange = (field: keyof SignUpFormProps) => (value: string) => {
    setSignUpFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSignUp = async () => {
    const { username, email, phone_number, password, passwordRepeat } = signUpFormValues;

    // Check if passwords match
    if (password !== passwordRepeat) {
      console.error('Passwords do not match.');
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    const signUpData = {
      username,
      email,
      phone_number,
      password,
    };

    try {
      // Send POST request with JSON format
      console.log('Request body: ', JSON.stringify(signUpData));

      const apiUrl = process.env.EXPO_PUBLIC_BACKEND_API_URL;

      const response = await fetch(`${apiUrl}/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(signUpData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Signup successful:', result);
        Alert.alert('Success', 'You have signed up successfully!');
        // Handle successful signup
      } else {
        console.error('Signup failed:', result);
        Alert.alert('Error', result.message || 'Signup failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      Alert.alert('Error', 'An unexpected error occurred');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrolledWrapper}>
        <StyledContainer>
        <Image className="m-14" source={require('../assets/eatwithme_logo.png')}></Image>
        <StyledFormView>
            <StyledInput
              placeholder="Username"
              value={signUpFormValues.username}
              onChangeText={handleChange('username')}
            />
            <StyledInput
              placeholder="Email"
              value={signUpFormValues.email}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
            />
            <StyledInput
              placeholder="Phone Number"
              value={signUpFormValues.phone_number}
              onChangeText={handleChange('phone_number')}
              keyboardType="phone-pad"
            />
            <StyledInput
              placeholder="Password"
              value={signUpFormValues.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            <StyledInput
              placeholder="Repeat Password"
              value={signUpFormValues.passwordRepeat}
              onChangeText={handleChange('passwordRepeat')}
              secureTextEntry
            />
                <StyledButton className="mt-6" onPress={handleSignUp}>
                    Sign Up
                </StyledButton>
            <StyledText className="self-center m-3">Already have an account? <StyledLink href="/login">Sign In</StyledLink></StyledText>
        </StyledFormView>
        </StyledContainer>
    </ScrollView>
  )
}

export default signup

const styles = StyleSheet.create({
  scrolledWrapper:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    //paddingBottom: "1rem"
    paddingBottom: 20
  }
})