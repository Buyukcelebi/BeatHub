import Slider from '@react-native-community/slider';
import { Octicons as Icon } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import { useStyles } from './SongMiniPlayerStyles';
import BackButton from '@/components/Buttons/BackButton';
import SongButton from '@/components/Buttons/SongButton';

function SongMiniPlayer({ backButtonPress, song }) {
  const styles = useStyles();

  const [shufflePressed, setShufflePressed] = useState(true);
  const [currentTime, setCurrentTime] = useState(90);

  const handleShufflePress = () => {
    setShufflePressed(!shufflePressed);
  };

  // song.time'ın geçerli olup olmadığını kontrol et
  const parsedTime = isNaN(song.time) ? 0 : Number(song.time); // Eğer NaN ise, 0 kullan

  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.backButton}>
          <TouchableOpacity style={styles.settingsWrapper} onPress={backButtonPress}>
            <Icon name="chevron-down" size={50} style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.albumContainer}>
          <View style={styles.songBox}>
            <Image source={{ uri: song.imageUrl }} style={styles.imageSong} />
          </View>
        </View>
        <View style={styles.buttonBox}>
          <View style={styles.buttonContainer}>
            <View style={styles.songTitle}>
              <View style={styles.textContainer}>
                {/* Şarkı ismi */}
                <Text style={styles.title}>{song.songName}</Text>
                {/* Sanatçı ismi */}
                <Text style={styles.description}>{song.songArtist}</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Image
                  source={require('@/assets/images/plus_border.png')}
                  style={[styles.plusImage, { tintColor: '#FFF' }]}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.sliderContainer}>
              <Slider
                minimumValue={0}
                maximumValue={parsedTime} // geçerli bir time değeri
                value={currentTime}
                onValueChange={(value) => setCurrentTime(value)}
                minimumTrackTintColor="#FFF"
                maximumTrackTintColor="#ffffff66"
                thumbTintColor="#FFF"
              />
              <View style={styles.timeContainer}>
                {/* Geçerli zaman */}
                <Text style={styles.timeText}>
                  {Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)}
                </Text>
                {/* Şarkı uzunluğu */}
                <Text style={styles.timeText}>
                  {Math.floor(parsedTime / 60)}:{('0' + Math.floor(parsedTime % 60)).slice(-2)}
                </Text>
              </View>
            </View>

            <View style={styles.songContainer}>
              <TouchableOpacity onPress={handleShufflePress}>
                <Image
                  source={require('@/assets/images/shuffle.png')}
                  style={[styles.shuffleImage, { tintColor: shufflePressed ? 'white' : 'green' }]}
                />
              </TouchableOpacity>
              <View style={styles.songButton}>
                <SongButton onPressPause={() => {}} onPressNext={() => {}} onPressBack={() => {}} />
              </View>

              <TouchableOpacity>
                <Image
                  source={require('@/assets/images/repeat.png')}
                  style={[styles.shuffleImage, { tintColor: '#FFF' }]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottom}>
          <View style={styles.lyricsBox}>
            <View style={styles.lyricsContainer}>
              <Text style={styles.lyricsTitle}>Lyrics</Text>
              <ScrollView style={styles.lyricsDescription}>
                {/* Şarkı açıklaması veya şarkı sözleri */}
                <Text style={styles.lyricsTitle}>{song.description}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SongMiniPlayer;
