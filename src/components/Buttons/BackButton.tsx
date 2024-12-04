import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { useStyles } from './ButtonStyles';

type BackButtonProps = {
  onPress: () => void;
};

const BackButton = ({ onPress }: BackButtonProps): React.JSX.Element => {
  const styles = useStyles();
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Image source={require('@/assets/images/arrow.png')} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

export default BackButton;
