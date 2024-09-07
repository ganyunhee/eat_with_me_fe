import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Card from '../components/Card';

// grab dummy data from dummyData.json
import dummy_data from '../dummyData.json';

const Home = () => {
  return (
    <ScrollView>
      <View className={styles.container}>
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
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = {
  container: 'p-[20px] flex flex-column',
  library: 'flex flex-row flex-wrap gap-4',
};
