import { Stack, Link } from 'expo-router';

import { View, Text, ScrollView, Image } from 'react-native';
//import { Button } from '~/components/Button';
//import { Container } from '~/components/Container';
//import { ScreenContent } from '~/components/ScreenContent';
//import Card from "../components/Card";

import { StyledView, StyledText, StyledInput, StyledButton } from '../components/StyledComponents';

// grab dummy data from dummyData.json
import dummy_data from "../dummyData.json"

export default function Home() {

  return (
    <StyledView>
      <Image source={require('../assets/logo.svg')}></Image>
      <Link href="/login" ><StyledText>Go to Login</StyledText></Link>
    </StyledView>
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
