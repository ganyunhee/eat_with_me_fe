import { Stack, Link } from 'expo-router';

import { View, Text } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
      </Container>
    </>
  );
}
