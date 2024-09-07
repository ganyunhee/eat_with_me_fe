import { StyleSheet, Text, View, Image } from 'react-native'
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
        <Image className="m-14" source={require('../assets/logo.svg')}></Image>
        <StyledView className="w-full max-w-sm">
          <StyledInput 
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <StyledInput 
            placeholder="Password"
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
          <StyledText className="self-center m-3">Already have an account? <Link href="/signup" className="font-bold">Sign Up</Link></StyledText>
        </StyledView>
    </StyledView>
  )
}

export default login

const styles = StyleSheet.create({})