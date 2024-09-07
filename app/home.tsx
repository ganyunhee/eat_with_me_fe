import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from "../components/Card"

// grab dummy data from dummyData.json
import dummy_data from "../dummyData.json"

const Home = () => {
  return (
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
            )
          })}
        </View>
    </View>
  )
}

export default Home

const styles = {
  container: "p-2 flex flex-column",
  library: 'flex flex-row flex-wrap gap-4'
}
