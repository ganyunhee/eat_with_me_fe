import '../global.css';
import React from 'react';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import WebHeader from '~/components/WebHeader'; // Adjust the import path as needed

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <WebHeader />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FFF"
          },
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen 
          name="index"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="home"
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            title: "Sign In",
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            title: "Sign Up",
          }}
        />
        <Stack.Screen name="create-event" />
        <Stack.Screen name="kakao-map" />
      </Stack>
    </View>
  );
}