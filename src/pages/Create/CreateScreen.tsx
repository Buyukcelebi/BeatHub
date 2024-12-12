import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useMusicPlayer } from '../../contexts/MusicPlayerContext';
import MiniMusicPlayer from '../Players/MiniPlayer';

import TwoButtonSwitch from '@/components/TwoButtonSwitch/TwoButtonSwitch';

function Create() {
  const { currentSong, isPlayerVisible, setIsPlayerVisible, setCurrentSong } = useMusicPlayer();

  const handleClosePlayer = (song: any) => {
    setIsPlayerVisible(false);
    setCurrentSong(null);
  };

  return (
    <View style={styles.container}>
      <TwoButtonSwitch />

      {currentSong && (
        <MiniMusicPlayer
          isVisible={isPlayerVisible}
          onClose={handleClosePlayer}
          song={currentSong}
        />
      )}
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
