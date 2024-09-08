import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Card from '../components/Card';
import ToggleSwitch from '~/components/ToggleSwitch';
import KakaoMap from '~/components/KakaoMap';

// grab dummy data from dummyData.json
import dummy_data from '../dummyData.json';

const Home = () => {
  const [activeView, setActiveView] = useState('List View');

  const handleToggle = (view) => {
    setActiveView(view);
  };

  return (
    <View style={styles.container}>
      <ToggleSwitch activeView={activeView} onToggle={handleToggle} />
      {activeView === 'List View' ? (
        <ScrollView>
          <View style={styles.library}>
            {dummy_data.map((data) => (
              <Card
                key={data.id}
                name={data.name}
                address={data.address}
                rating={data.rating}
                date={data.date}
                attendees={data.attendees}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <KakaoMap />
      )}
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

export default Home;