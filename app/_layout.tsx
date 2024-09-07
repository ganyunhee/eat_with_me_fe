import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
      <Stack.Screen name="create-event" />
      <Stack.Screen name="kakao-map" />
    </Stack>
  )
}
