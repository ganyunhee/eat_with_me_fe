import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
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
      <Link href="/login" className="m-4">
        <StyledText className="">Go to Login</StyledText>
      </Link>
    </StyledView>
  );
}


