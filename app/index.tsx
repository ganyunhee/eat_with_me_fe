import { Stack, Link } from 'expo-router';

import { View, Text } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import Card from "../components/Card";
import { View } from "react-native";

export default function Home() {

  return (
    <>
<<<<<<< HEAD
      <Container >
        <View className={styles.library}>
          {Array(10).fill(0).map((_, i) => <Card key={i} />)}
        </View>
=======
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href={{ pathname: '/kakao-map', params: { name: 'Dan' }}} asChild>
          <Button title="Show Details" />
        </Link>
>>>>>>> 7339f4e1fadf037baff83a99d09ee07671846832
      </Container>
    </>
  );
}

const styles = {
  library: 'flex flex-row flex-wrap gap-4'
}
