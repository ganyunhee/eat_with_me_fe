import { Stack, Link } from 'expo-router';

import { View, Text, ScrollView } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import Card from "../components/Card";

export default function Home() {

  return (
    <ScrollView>
      <Container>
        <View className={styles.library}>
          {Array(10).fill(0).map((_, i) => <Card key={i} />)}
        <Link href={{ pathname: '/kakao-map' }} asChild>
          <Button title="Show Map" />
        </Link>
        </View>
      </Container>
    </ScrollView>
  );
}

const styles = {
  library: 'flex flex-row flex-wrap gap-4'
}
