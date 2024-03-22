/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const DebugTag = () => {
  if (!__DEV__) {
    return null; // Render nothing in production mode
  }

  return (
    <View style={styles.debugContainer}>
    <View style={styles.debugTag}>
      <Text style={styles.debugText}>DEBUG Mode</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  debugContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight || 0,
    right: 0,
    zIndex: 9999,
  },
  debugTag: {
    backgroundColor: 'red',
    padding: 1,
    transform: [{ rotate: '45deg' }],
  },
  debugText: {
    color: 'white',
    fontSize: 12,
    paddingHorizontal: 62,
  },
});

export default DebugTag;

