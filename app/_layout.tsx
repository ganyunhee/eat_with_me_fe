import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="kakao-map" />
      <Stack.Screen name="naver-map" />
    </Stack>
  )
}
