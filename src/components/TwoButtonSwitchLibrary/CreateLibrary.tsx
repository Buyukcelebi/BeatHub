import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useStyles } from './LibraryStyles';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { useMusicPlayer } from '../../contexts/MusicPlayerContext';
import MiniMusicPlayer from '../../pages/Players/MiniPlayer';
import STORAGE_KEYS from '../../constants/StorageKeys';

function CreateLibrary() {
  const styles = useStyles();
  const navigation = useNavigation();
  const { currentSong, isPlayerVisible, setIsPlayerVisible, setCurrentSong, playMusic } =
    useMusicPlayer();

  const [isPlaying, setIsPlaying] = useState(false);
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useFocusEffect(
    React.useCallback(() => {
      loadMusic();
    }, [])
  );

  const loadMusic = async () => {
    try {
      setLoading(true); // Start loading
      const existingData = await AsyncStorage.getItem(STORAGE_KEYS.MUSICS);
      if (existingData) {
        const musicIds = JSON.parse(existingData);
        if (musicIds.length > 0) {
          setMusicList(musicIds);
        }
      }
    } catch (error) {
      console.error('Error loading music:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text> // Show loading text while data is being fetched
      ) : musicList.length === 0 ? (
        <View style={styles.top}>
          <View style={styles.topContainer}>
            <Image source={require('@/assets/images/musictable.png')} style={styles.topImage} />
            <Text style={styles.title}>There's nothing here yet</Text>
            <Text style={styles.discretion}>Create your first song</Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.bottomContainer}>
              <PrimaryButton
                buttonText="Create New Song"
                onPress={() => navigation.navigate('Create')}
              />
            </View>
          </View>
        </View>
      ) : (
        <FlatList
          data={musicList}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.musicItem}
              onPress={() => {
                setCurrentSong(item);
                setIsPlayerVisible(true);
                playMusic(item);
                setIsPlaying(true);
              }}>
              <ImageBackground
                source={{ uri: item.imageUrl }}
                style={[styles.listItemImage, { overflow: 'hidden' }]}>
                <Image source={require('@/assets/images/songPlay.png')} style={styles.icon} />
              </ImageBackground>
              <View style={styles.textContainer}>
                <Text style={styles.listItemText}>{item.songName}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Mini Player */}
      {currentSong && (
        <MiniMusicPlayer
          song={currentSong}
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying(!isPlaying)}
          isVisible={isPlayerVisible}
          setIsVisible={setIsPlayerVisible}
        />
      )}
    </View>
  );
}

export default CreateLibrary;
