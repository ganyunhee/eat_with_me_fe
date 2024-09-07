import { Stack, Link } from 'expo-router';

import { View, Text, ScrollView } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

export default function Home() {

  return (
    <ScrollView>
      <Container>
        <Link href={{ pathname: '/kakao-map' }} asChild>
          <Button title="Show Map" />
        </Link>
      </Container>
    </ScrollView>
  );
}


