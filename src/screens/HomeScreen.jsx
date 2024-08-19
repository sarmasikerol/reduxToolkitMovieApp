import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return(
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold text-blue-600 mb-2">Başlık</Text>
      <Text className="text-lg text-gray-700">
        Alt başlık veya açıklama buraya gelir.
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
