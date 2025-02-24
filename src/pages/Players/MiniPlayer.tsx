import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { View, Text, Pressable, Image, Modal } from 'react-native';
import { useStyles } from './MiniPlayerStyle'; // Stil dosyanızın yolunu kontrol edin
import { useMusicPlayer } from '../../contexts/MusicPlayerContext'; // Context dosyasının yolunu kontrol edin
import SongMiniPlayer from '../Song/SongScreenMiniPlayer'; // Tam ekran bileşen yolunu kontrol edin

export default function MiniPlayer({ song, isVisible, setIsVisible }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const styles = useStyles();
  const { isPlaying, togglePlayPause, closePlayer } = useMusicPlayer();

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const closeMiniPlayer = () => {
    closePlayer(); // Şarkıyı durdur ve temizle
    setIsVisible(false); // Mini player'ı kapat
  };

  if (!isVisible) return null;

  return (
    <>
      <Pressable onPress={toggleFullScreen} style={[styles.container]}>
        <BlurView intensity={80} style={styles.miniPlayer}>
          <Image source={{ uri: song.imageUrl }} style={styles.artwork} />
          <View style={styles.details}>
            <Text style={styles.songTitle} numberOfLines={1}>
              {song.songName}
            </Text>
            <Text style={styles.artistName} numberOfLines={1}>
              {song.songArtist}
            </Text>
          </View>
          <Pressable onPress={togglePlayPause} style={styles.controlButton}>
            <Ionicons name={isPlaying ? 'pause' : 'play'} size={24} color="white" />
          </Pressable>
          <Pressable onPress={closeMiniPlayer}>
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
          <SongMiniPlayer backButtonPress={toggleFullScreen} song={song} />
        </Modal>
      )}
    </>
  );
}
