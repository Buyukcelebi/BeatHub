import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { View, Text, Pressable, Image, Modal } from 'react-native'; // Slider'ı import ettik

import SongMiniPlayer from '../Song/SongScreenMiniPlayer';
import { useStyles } from './MiniPlayerStyle';
import { useMusicPlayer } from '../../contexts/MusicPlayerContext';
import Slider from '@react-native-community/slider';

export default function MiniPlayer({ song, isVisible, setIsVisible }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const styles = useStyles();

  // Global music player state
  const { isPlaying, setIsPlaying } = useMusicPlayer();

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const closeMiniPlayer = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <Pressable onPress={toggleFullScreen} style={[styles.container]}>
        <BlurView intensity={80} style={styles.miniPlayer}>
          <Image source={song.imageUrl} style={styles.artwork} />
          <View style={styles.details}>
            <Text style={styles.songTitle} numberOfLines={1}>
              {song.title}
            </Text>
            <Text style={styles.artistName} numberOfLines={1}>
              {song.description}
            </Text>
          </View>
          <Pressable onPress={() => setIsPlaying(!isPlaying)} style={styles.controlButton}>
            <Ionicons name={isPlaying ? 'pause' : 'play'} size={24} color="white" />
          </Pressable>
          <Pressable onPress={closeMiniPlayer} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="white" />
          </Pressable>
        </BlurView>
      </Pressable>

      {isFullScreen && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={isFullScreen}
          onRequestClose={toggleFullScreen}>
          <SongMiniPlayer song={song} backButtonPress={toggleFullScreen} />
        </Modal>
      )}
    </>
  );
}
