import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { useStyles } from './ButtonStyles';

type BorderButtonProps = {
  buttonText: string;
  onPress: () => void;
};

const BorderButton = ({ buttonText, onPress }: BorderButtonProps): React.JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.borderButton} onPress={onPress}>
        <Text style={styles.borderButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BorderButton;
