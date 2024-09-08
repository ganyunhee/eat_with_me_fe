// grab dummy history data
import history_data from "../dummyHistoryData.json";

import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HistoryRow from "~/components/HistoryRow";
import { StyledText, StyledView } from "~/components/StyledComponents";

const History = () => {

  return (
    <View style={styles.container}>
      <StyledView style={styles.library}>
      <StyledView className="p-2 flex flex-row gap-2">  
      </StyledView>
    </StyledView>
      <HistoryRow 
        date="Date"
        eventName="Event Name"
        foodType="Food Type"
        attendees="Attendees"
        maxMembers="(Max)"
        location="Location"
        chatLink="Chat Link"
        status="Status"
      />
      {history_data.map((data) => (
        <HistoryRow
          key={data.date}
          date={data.date}
          eventName={data.event_name}
          foodType={data.food_type}
          attendees={data.attendees}
          maxMembers={data.max_members}
          location={data.location}
          chatLink={data.chat_link}
          status={data.status}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  library: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
});

export default History;