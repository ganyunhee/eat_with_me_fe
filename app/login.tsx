import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { StyledView, StyledText, StyledInput, StyledButton } from '../components/StyledComponents';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <StyledView className="flex-1 items-center justify-center bg-white pb-4">
      <Image className="m-14" source={require('../assets/logo.svg')} />
      <StyledView className="w-full max-w-sm">
        <StyledInput placeholder="Email" onChangeText={setEmail} value={email} />
        <StyledInput
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
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

const styles = StyleSheet.create({});
