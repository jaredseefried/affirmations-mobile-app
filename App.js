import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainCarousel from './src/components/MainCarousel';
import Home from './src/screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <MainCarousel />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
