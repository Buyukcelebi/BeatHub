import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useStyles } from './LibraryStyles';
import { Octicons as Icon } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { useMusicPlayer } from '../../contexts/MusicPlayerContext';
import MiniMusicPlayer from '../Players/MiniPlayer';

function Library() {
  const styles = useStyles();
  const navigation = useNavigation();

  const { currentSong, isPlayerVisible, setIsPlayerVisible, setCurrentSong } = useMusicPlayer();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topContainer}>
          <Image source={require('@/assets/images/musictable.png')} style={styles.topImage} />
          <Text style={styles.title}>There's nothing here yet</Text>
          <Text style={styles.discretion}>Create your first song</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomContainer}>
          <PrimaryButton
            buttonText="Create New Song"
            onPress={() => {
              navigation.navigate('Create');
            }}
          />
        </View>
      </View>
      {currentSong && (
        <MiniMusicPlayer
          song={currentSong}
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying(!isPlaying)}
        />
      )}
    </View>
  );
}

export default Library;
