import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { useStyles } from './ButtonStyles';

type PrimaryButtonProps = {
  buttonText: string;
  onPress: () => void;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
};
const PrimaryButton = ({
  buttonText,
  onPress,
  rightIcon,
  isLoading,
}: PrimaryButtonProps): React.JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
        <Text style={styles.primaryButtonText}>{buttonText}</Text>
        {rightIcon && !isLoading && <View style={styles.rightIconWrapper}>{rightIcon}</View>}
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
