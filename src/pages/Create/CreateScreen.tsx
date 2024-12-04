import React from 'react';
import { StyleSheet, View } from 'react-native';

import TwoButtonSwitch from '@/components/TwoButtonSwitch/TwoButtonSwitch';

function Create() {
  return (
    <View style={styles.container}>
      <TwoButtonSwitch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    flex: 1,
    backgroundColor: '#071e4a',
  },
  bottom: {
    flex: 1.5,
    backgroundColor: '#071e4a',
    padding: 10,
  },
});

export default Create;
