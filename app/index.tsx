import React, { useEffect } from 'react';

import { Link, useRouter } from 'expo-router';

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
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <StyledView className="bg-white flex-1 items-center justify-center pb-4">
      <Image source={require('../assets/logo.svg')}></Image>
      <Link href="/login" className="m-4">
        <StyledText className="">Loading . . .</StyledText>
      </Link>
    </StyledView>
  );
}