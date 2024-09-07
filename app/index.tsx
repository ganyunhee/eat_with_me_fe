import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import Card from "../components/Card";
import { View } from "react-native";

export default function Home() {

  return (
    <>
      <Container >
        <View className={styles.library}>
          {Array(10).fill(0).map((_, i) => <Card key={i} />)}
        </View>
      </Container>
    </>
  );
}

const styles = {
  library: 'flex flex-row flex-wrap gap-4'
}
