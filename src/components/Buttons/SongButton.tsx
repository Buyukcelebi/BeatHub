import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

import { useStyles } from './ButtonStyles';

type SongButtonProps = {
  onPressPause: () => void;
  onPressNext: () => void;
  onPressBack: () => void;
};

const SongButton = ({
  onPressPause,
  onPressBack,
  onPressNext,
}: SongButtonProps): React.JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.songButtonBack} onPress={onPressBack}>
        <Image
          source={require('../../assets/images/back.png')}
          style={[styles.songButtonImage, { tintColor: 'white' }]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.songButtonPause} onPress={onPressPause}>
        <Image
          source={require('../../assets/images/pause.png')}
          style={[styles.songButtonImage, { tintColor: '#071e4a' }]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.songButtonNext} onPress={onPressNext}>
        <Image
          source={require('../../assets/images/next.png')}
          style={[styles.songButtonImage, { tintColor: 'white' }]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SongButton;
