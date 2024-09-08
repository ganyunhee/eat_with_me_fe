import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledText, StyledView } from "./StyledComponents"

interface DummyHistoryTypes {
  date: string;
  eventName: string;
  foodType: string;
  attendees: number | string;
  maxMembers: number | string;
  location: string;
  chatLink: string;
  status: string;
}

const HistoryRow = ({ date, eventName, foodType, attendees, maxMembers, location, chatLink, status }: DummyHistoryTypes) => {
  return (
    <StyledView className="p-2 grid grid-cols-7 items-center text-center">
      <Text className="text-center px-4">{date}</Text>
      <Text className="text-center px-4">{eventName}</Text>
      <Text className="text-center px-4">{foodType}</Text>
      <Text className="text-center px-4">{attendees}/{maxMembers}</Text>
      <Text className="text-center px-4">{location}</Text>
      <Text className="text-center px-4">{chatLink}</Text>
      <Text className="text-center px-4">{status}</Text>
    </StyledView>
  )
}

export default HistoryRow

const styles = StyleSheet.create({})