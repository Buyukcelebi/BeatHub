import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { View, Text, Pressable, Image, Modal, StyleSheet, Platform } from 'react-native';

import Song from '../Song/SongScreenMiniPlayer';
import SongMiniPlayer from '../Song/SongScreenMiniPlayer';
import { useStyles } from './MiniPlayerStyle';

export default function MiniPlayer({ song, isPlaying, onPlayPause }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const styles = useStyles();
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

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
          <Pressable onPress={onPlayPause} style={styles.controlButton}>
            <Ionicons name={isPlaying ? 'pause' : 'play'} size={24} color="white" />
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
