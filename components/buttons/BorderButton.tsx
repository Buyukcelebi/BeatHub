import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

type BorderButtonProps = {
  buttonText: string;
  onPress: () => void;
};

const BorderButton = ({
  buttonText,
  onPress,
}: BorderButtonProps): React.JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    borderColor: '#153b7d',
    alignItems: 'center',
    backgroundColor: '#06013c',
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
  },
});

export default BorderButton;
