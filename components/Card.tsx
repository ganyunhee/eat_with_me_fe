import React from 'react'
import { View, Text } from "react-native"
import { Image } from "expo-image";
import { StyledButton } from '../components/StyledComponents';

type DummyDataTypes = {
  name: string,
  restaurant_name: string,
  address: string,
  rating: number,
  date: string,
  attendees: number,
  image: string,
  category: string
}

export default function Card({ name, address, rating, date, attendees, image, category, restaurant_name }: DummyDataTypes) {
  const imageSource = typeof image === 'string' ? { uri: image } : image;

  return (
    <View className={styles.card}>
      <Image className={styles.image} source={imageSource} style={{ minWidth: 50, minHeight: 50, width: 300, height: 300, borderRadius: 14 }} />
      <View className={styles.cardTopLine}>
        <Text className={styles.name}>{name}</Text>
        <Text className={styles.address}>{address}</Text>
        <Text className={styles.rating}> Rating: {rating} </Text>
      </View>
      <Text className={styles.date}>Date: {date}</Text>
      <Text className={styles.members}>Attendees: {attendees}</Text>
      <StyledButton>Join Event</StyledButton>
    </View>
  )
}

const styles = {
  card: "p-2 flex flex-col gap-1 text-center justify-middle align-center m-auto max-w-[315px]",
  cardTopLine: "flex flex-row flex-wrap justify-between",
  image: "rounded-lg object-contain",
  name: "text-ellipsis text-2xl font-bold my-2 ml-1",
  address: "text-ellipsis font-semibold mb-1 ml-1",
  rating: "bg-accent-light font-medium text-white ml-1",
  date: "text-gray-500 ml-1",
  members: "mb-2 ml-1"
}
