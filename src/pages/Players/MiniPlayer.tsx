import React, { useState } from 'react';
import { View, Text, Pressable, Image, Modal, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Song from '../Song/SongScreen';

export default function MiniPlayer({ song, isPlaying, onPlayPause }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const insets = useSafeAreaInsets();
  const bottomPosition = Platform.OS === 'ios' ? insets.bottom + 50 : 60;

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <Pressable onPress={toggleFullScreen} style={[styles.container, { bottom: bottomPosition }]}>
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
          <Song song={song} backButtonPress={toggleFullScreen} />
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 60,
    zIndex: 1000,
    backgroundColor: '#071e4a',
  },
  miniPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,

    borderTopWidth: 1,
    borderColor: '#071e4a',
  },
  artwork: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  songTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistName: {
    color: 'gray',
    fontSize: 14,
  },
  controlButton: {
    padding: 10,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullArtwork: {
    width: 300,
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
  fullSongTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fullArtistName: {
    color: 'gray',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  fullControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 40,
  },
  closeFullScreenButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
});
