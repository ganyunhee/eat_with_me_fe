import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import Card from "../components/Card";
import { View } from "react-native";

// grab dummy data from dummyData.json
import dummy_data from "../dummyData.json"

export default function Home() {

  return (
    <>
      <Container >
        <View className={styles.library}>
          {dummy_data.map((data) => {
            return (
              <Card
                key={data.id}
                name={data.name}
                address={data.address}
                rating={data.rating}
                date={data.date}
                attendees={data.attendees}
              />
            )
          })}
        </View>
        <Link href={{ pathname: '/kakao-map', params: { name: 'Dan' }}} asChild>
        </Link>
      </Container>
    </>
  );
}

const styles = {
  library: 'flex flex-row flex-wrap gap-4'
}
