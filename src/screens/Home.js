import React from 'react'

import { StyleSheet, View, Text, Button } from 'react-native'
const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.push("ReviewDetails")
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="go to Review" onPress={pressHandler} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24
  }
})
export default Home