import React from 'react'
import { View, Text } from "react-native"
import { Image } from "react-native";

export default function Card() {

  const cardName = 'This is the card name!';
  const address = 'This is the address!';
  const date = "2024/09/10";
  const members = "2/3"

  return (
    <View className={styles.card}>
      <Image className={styles.image} source={require('assets/restaurant.png')} />
      <Text>{address}</Text>
      <Text>{date}</Text>
      <Text>{members}</Text>
    </View>
  )
}

const styles = {
  card: 'h-[200px]',
  image: 'h-[84px] w-[84px]'

}