import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { StyledView, StyledContainer, StyledText, StyledInput, StyledButton, StyledLink } from '../components/StyledComponents'
import { Link } from 'expo-router'

const login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
  
    const handleLogin = () => {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone Number:', phoneNumber);
      console.log('Password:', password);
      console.log('Password Repeat:', passwordRepeat);
    };
  

  return (
    <StyledView className="bg-white flex-1 items-center justify-center pb-4">
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
            <Link
                href="/home"
                asChild
                onPress={handleLogin}
                >
                <StyledButton className="mt-6">
                    Sign Up
                </StyledButton>
            </Link>
            <StyledText className="self-center m-3">Already have an account? <StyledLink href="/login">Sign In</StyledLink></StyledText>
        </StyledView>
        </StyledContainer>
    </StyledView>
  )
}

export default login

const styles = StyleSheet.create({})