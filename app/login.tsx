import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { StyledView, StyledText, StyledInput, StyledButton } from '../components/StyledComponents';

interface LoginFormProps {
  email: string;
  password: string;
}

const login = () => {
  const [loginFormValues, setLoginFormValues] = useState<LoginFormProps>({
    email: '',
    password: '',
  });

  // Handles changes for email and password
  const handleChange = (field: keyof LoginFormProps) => (value: string) => {
    setLoginFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    console.log(`Email: ${loginFormValues.email}`);
    console.log(`Password: ${loginFormValues.password}`);
  };

  return (
    <StyledView className="flex-1 items-center justify-center bg-white pb-4">
      <Image className="m-14" source={require('../assets/logo.svg')} />
      <StyledView className="w-full max-w-sm">
        <StyledInput
          placeholder="Email"
          onChangeText={handleChange('email')} // Passing the field dynamically
          value={loginFormValues.email}
        />
        <StyledInput
          placeholder="Password"
          secureTextEntry
          onChangeText={handleChange('password')} // Passing the field dynamically
          value={loginFormValues.password}
        />
        <Link href="/home" asChild onPress={handleLogin}>
          <StyledButton className="mt-6 bg-brand transition-all duration-300 hover:bg-brand-light">
            Login
          </StyledButton>
        </Link>
        <StyledText className="m-3 self-center">
          Already have an account?{' '}
          <Link href="/signup" className="font-bold hover:underline hover:decoration-2">
            Sign Up
          </Link>
        </StyledText>
      </StyledView>
    </StyledView>
  );
};

export default login;
