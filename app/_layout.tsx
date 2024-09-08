import '../global.css';
import React from 'react';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import WebHeader from '~/components/WebHeader';

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
            headerShown: false
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            title: "Sign In",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            title: "Sign Up",
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="create-event"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </View>
  );
}