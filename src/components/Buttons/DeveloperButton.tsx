import { Octicons as Icon } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useStyles } from './ButtonStyles';

import { navigationRef } from '@/pages/Application';

interface DeveloperButtonProps {
  navigate: (...args: Parameters<typeof navigationRef.navigate>) => void;
}

export const DeveloperButton: React.FC<DeveloperButtonProps> = ({ navigate }) => {
  const styles = useStyles();
  if (!__DEV__) return null;

  return (
    <TouchableOpacity
      style={styles.developerButton}
      onPress={() => {
        navigate({
          name: 'DeveloperScreen',
          params: undefined,
        });
      }}>
      <Icon name="gear" size={23} color="#fff" />
    </TouchableOpacity>
  );
};

export default DeveloperButton;
