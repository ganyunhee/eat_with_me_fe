import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StyledView, StyledText, StyledInput, StyledButton } from '../components/StyledComponents'
import { Link } from 'expo-router'

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <StyledView className="bg-white flex-1 items-center justify-center pb-4">
        <StyledText className="text-3xl font-bold mb-4">Login</StyledText>
        <StyledView className="w-full max-w-sm bg-red-300">
        <StyledText className="mb-2 mt-4">Email</StyledText>
        <StyledInput 
          placeholder="Input your email here"
          onChangeText={setEmail}
          value={email}
        />
        <StyledText className="mb-2 mt-4">Password</StyledText>
        <StyledInput 
          placeholder="Input your password here"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <Link
          href="/home"
          asChild
          onPress={handleLogin}
        >
          <StyledButton className="mt-6">
            Login
          </StyledButton>
        </Link>
        </StyledView>
    </StyledView>
  )
}

export default login

const styles = StyleSheet.create({})