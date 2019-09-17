import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import BookFinderScreen from './src/screens/BookFinderScreen';

export default App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <BookFinderScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});