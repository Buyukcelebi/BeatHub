import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useStyles } from './LibraryStyles';
import { Octicons as Icon } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { useMusicPlayer } from '../../contexts/MusicPlayerContext';
import MiniMusicPlayer from '../Players/MiniPlayer';
import STORAGE_KEYS from '../../constants/StorageKeys';
import { checkMusicStatus } from '@/providers/internalApi';

function Library({ texta }) {
  const styles = useStyles();
  const navigation = useNavigation();

  const { currentSong, isPlayerVisible, setIsPlayerVisible, setCurrentSong, playMusic } =
    useMusicPlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicList, setMusicList] = useState([]);
  const [coverList, setCoverList] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      loadCover();
    }, [])
  );

  const loadMusic = async () => {
    try {
      const existingData = await AsyncStorage.getItem(STORAGE_KEYS.MUSICS);
      if (existingData) {
        const musicIds = JSON.parse(existingData);
        if (musicIds.length > 0) {
          setMusicList(musicIds);

          const musicPromises = musicIds.map((id) => checkMusicStatus(id));
          Promise.all(musicPromises).then((musicStatuses) => {
            console.log('Music statuses:', musicStatuses);
          });
        }
        setMusicList(JSON.parse(existingData));
      }
    } catch (error) {
      console.error('Error loading music:', error);
    }
  };

  const loadCover = async () => {
    try {
      const existingData = await AsyncStorage.getItem(STORAGE_KEYS.COVERS);
      if (existingData) {
        const musicIds = JSON.parse(existingData);
        if (musicIds.length > 0) {
          setCoverList(musicIds);

          const musicPromises = musicIds.map((id) => checkMusicStatus(id));
          Promise.all(musicPromises).then((musicStatuses) => {
            console.log('Music statuses:', musicStatuses);
          });
        }
        setCoverList(JSON.parse(existingData));
      }
    } catch (error) {
      console.error('Error loading music:', error);
    }
  };

  return (
    <View style={styles.container}>
      {coverList.length === 0 ? (
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
                onPress={() => {
                  navigation.navigate('Create');
                }}
              />
            </View>
          </View>
        </View>
      ) : (
        <FlatList
          data={coverList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.musicItem}
              onPress={() => {
                setCurrentSong(item);
                setIsPlayerVisible(true);
                playMusic(item); // Şarkıyı çal
                setIsPlaying(true);
              }}>
              <ImageBackground
                source={item.imageUrl}
                style={[styles.listItemImage, { overflow: 'hidden' }]}>
                <Image source={require('@/assets/images/songPlay.png')} style={styles.icon} />
                {item.time && (
                  <View style={styles.timeContainer}>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                )}
              </ImageBackground>
              <View style={styles.textContainer}>
                <Text style={styles.listItemText}>{item.songName}</Text>
                <Text style={styles.descriptionText}>
                  {item.songName ? `${item.songName} sec` : 'Unknown'}
                </Text>
              </View>
              <View style={styles.playCountContainer}>
                <Image source={require('@/assets/images/songPlay.png')} style={styles.playIcon} />
                <Text style={styles.repeatText}>{item.count}</Text>
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

export default Library;
