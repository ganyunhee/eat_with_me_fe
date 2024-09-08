import React from 'react'
import { View, Text } from "react-native"
import { Image } from "expo-image";
import { Button } from "./Button";

type DummyDataTypes = {
  name: string,
  address: string,
  rating: number,
  date: string,
  attendees: number,
}

export default function Card({ name, address, rating, date, attendees }: DummyDataTypes) {

  return (
    <View className={styles.card}>
      <Image className={styles.image} source={require('assets/restaurant.png')} style={{ width: 300, height: 300, borderRadius: 14 }} />
      <View className={styles.cardTopLine}>
        <Text className={styles.name}>{name}</Text>
        <Text className={styles.address}>{address}</Text>
        <Text className={styles.rating}> Rating: {rating} </Text>
      </View>
      <Text className={styles.date}>Date: {date}</Text>
      <Text className={styles.members}>Attendees: {attendees}</Text>
      <Button className={styles.joinButton} title="Join Event"></Button>
    </View>
  )
}

const styles = {
  card: "p-2 flex flex-col gap-1 text-center justify-middle align-center m-auto max-w-[315px]",
  cardTopLine: "flex flex-row flex-wrap justify-between",
  image: "rounded-lg object-contain",
  name: "text-ellipsis text-2xl font-bold mb-1",
  address: "text-ellipsis font-semibold mb-1",
  rating: "bg-accent-light font-medium text-white",
  date: "text-gray-500",
  members: "mb-2",
  joinButton: "rounded-md h-10 p-1",
}
