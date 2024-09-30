import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

type PrimaryButtonProps = {
  buttonText: string;
  onPress: () => void;
};

const PrimaryButton = ({
  buttonText,
  onPress,
}: PrimaryButtonProps): React.JSX.Element => {
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
    paddingVertical: 13,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#153b7d',
    alignItems: 'center',
    backgroundColor: '#06013c',

    width: '95%',
    marginLeft: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
  },
});

export default PrimaryButton;
