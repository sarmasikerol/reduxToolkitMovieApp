import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Router from './src/navigation/Router';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Router />
    </SafeAreaView>
  );
}
