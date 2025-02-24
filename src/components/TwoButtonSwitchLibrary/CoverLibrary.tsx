import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useStyles } from './LibraryStyles';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { useMusicPlayer } from '../../contexts/MusicPlayerContext';
import MiniMusicPlayer from '../../pages/Players/MiniPlayer';
import STORAGE_KEYS from '../../constants/StorageKeys';

function CoverLibrary() {
  const styles = useStyles();
  const navigation = useNavigation();
  const { currentSong, isPlayerVisible, setIsPlayerVisible, setCurrentSong, playMusic } =
    useMusicPlayer();

  const [isPlaying, setIsPlaying] = useState(false);
  const [coverList, setCoverList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useFocusEffect(
    React.useCallback(() => {
      loadCover();
    }, [])
  );

  const loadCover = async () => {
    try {
      setLoading(true); // Start loading
      const existingData = await AsyncStorage.getItem(STORAGE_KEYS.COVERS);
      if (existingData) {
        const coverIds = JSON.parse(existingData);
        if (coverIds.length > 0) {
          setCoverList(
            coverIds.map((item) => {
              let songName = item.youtubeTitle;
              console.log('songName', item);
              // Sanatçı ismini çıkarmak için '-' veya '|' sonrası kısmı al
              if (songName.includes('-')) {
                songName = songName.split('-').slice(1).join('-').trim();
              } else if (songName.includes('|')) {
                songName = songName.split('|').slice(1).join('|').trim();
              } else if (songName.includes('x')) {
                songName = songName.split('x').slice(1).join('x').trim();
              }
              return {
                id: item.id,
                songArtist: item.model.name,
                songName: songName,
                imageUrl: item.model.avatar,
                status: item.status,
              };
            })
          );
        }
      }
    } catch (error) {
      console.error('Error loading covers:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text> // Show loading text while data is being fetched
      ) : coverList.length === 0 ? (
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
                onPress={() => navigation.navigate('Cover')}
              />
            </View>
          </View>
        </View>
      ) : (
        <FlatList
          data={coverList}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.musicItem}
              onPress={() => {
                console.log('Seçilen Şarkı:', item);
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
                <Text style={styles.listItemText}>
                  {item.songArtist} - {item.songName}
                </Text>
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

export default CoverLibrary;
