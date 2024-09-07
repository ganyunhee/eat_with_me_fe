import React from 'react'
import { View, Text } from "react-native"
import { Image } from "expo-image";
import { Button } from "./Button";

export default function Card() {

  const cardName = 'This is the card name!';
  const address = 'This is the address!';
  const rating = '4.3'
  const date = "2024/09/10";
  const members = "2/3"

  return (
    <View className={styles.card}>
      <Image className={styles.image} source={require('../assets/restaurant.png')} style={{width: 100, height: 100}} />
      <View className={styles.cardTopLine}>
        <Text className={styles.address}>{address}</Text>
        <Text className={styles.rating} >{rating}</Text>
      </View>
      <Text className={styles.date}>{date}</Text>
      <Text className={styles.members}>{members}</Text>
      <Button className={styles.joinButton} title="Join Event"></Button>
    </View>
  )
}

const styles = {
  card: "w-[31%] p-2 flex flex-col gap-1 justify-middle align-center m-auto",
  cardTopLine: "flex flex-row justify-between",
  image: "rounded-lg object-contain w-10",
  address: "",
  rating: "",
  date: "",
  members: "",
  joinButton: "",
}
