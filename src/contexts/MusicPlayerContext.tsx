import { Audio } from 'expo-av';
import React, { createContext, useContext, useState, useEffect } from 'react';

const MusicPlayerContext = createContext();

export function MusicPlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [sound, setSound] = useState(null);

  // playMusic fonksiyonu
  const playMusic = async (song) => {
    try {
      console.log('Playing music:', song);
      const songUri =
        song?.uri ||
        `https://storage.googleapis.com/img-bucket-cdn/music-ai/outputs/music/${song.id}.mp3`;
      console.log('Song URI:', songUri);
      if (!songUri) {
        console.error('Error: Song URI is missing or invalid', song);

        return;
      }

      if (sound) {
        await sound.unloadAsync();
      }
      console.log('Loading music:', sound);

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: songUri },
        { shouldPlay: true }
      );
      console.log('New sound:', newSound);

      setSound(newSound);
      setCurrentSong({ ...song, uri: songUri });
      setIsPlaying(true);
      setIsPlayerVisible(true);
    } catch (error) {
      console.error('Error playing music:', error);
    }
  };

  const togglePlayPause = async () => {
    if (isPlaying && sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const closePlayer = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }
    setIsPlaying(false);
    setIsPlayerVisible(false);
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        isPlayerVisible,
        setIsPlayerVisible,
        playMusic,
        togglePlayPause, // Toggle play/pause fonksiyonu
        closePlayer,
      }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}
