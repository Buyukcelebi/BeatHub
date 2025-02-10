import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { useMusicPlayer } from '../../contexts/MusicPlayerContext';
import MiniMusicPlayer from '../Players/MiniPlayer';

import TwoButtonSwitch from '@/components/TwoButtonSwitch/TwoButtonSwitch';

function Create() {
  const handleClosePlayer = (song: any) => {
    setIsPlayerVisible(false);
    setCurrentSong(null);
  };
  const { currentSong, setCurrentSong, isPlayerVisible, setIsPlayerVisible } = useMusicPlayer();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={styles.container}>
      <TwoButtonSwitch />

      {currentSong && (
        <MiniMusicPlayer
          song={currentSong}
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying(!isPlaying)}
          isVisible={isPlayerVisible}
          setIsVisible={setIsPlayerVisible} // MiniPlayer'a görünürlük kontrolünü gönderiyoruz
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
  },
  bottom: {
    flex: 1.5,
    padding: 10,
  },
});

export default Create;
