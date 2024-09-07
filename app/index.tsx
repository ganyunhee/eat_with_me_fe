import { Link, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { StyledView, StyledText, StyledInput, StyledButton } from '../components/StyledComponents';

// I think all below can be deleted pretty safely
// import { Button } from '~/components/Button';
// import { Container } from '~/components/Container';
//import { Button } from '~/components/Button';
//import { Container } from '~/components/Container';
//import { ScreenContent } from '~/components/ScreenContent';
//import Card from "../components/Card";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <StyledView className="flex-1 items-center justify-center bg-white pb-4">
      <Image source={require('../assets/logo.svg')} />
      <Link href="/login" className="m-4">
        <StyledText className="">Loading . . .</StyledText>
      </Link>
    </StyledView>
  );
}
