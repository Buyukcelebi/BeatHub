import Slider from '@react-native-community/slider';
import { StaticScreenProps, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, ImageSourcePropType } from 'react-native';
import { Octicons as Icon } from '@expo/vector-icons';
import { useStyles } from './SongStyles';

import BackButton from '@/components/Buttons/BackButton';
import SongButton from '@/components/Buttons/SongButton';

function SongScreen({ backButtonPress }) {
  const styles = useStyles();

  const route = useRoute();
  const { song } = route.params;
  const navigation = useNavigation();

  const [shufflePressed, setShufflePressed] = useState(true);
  const [currentTime, setCurrentTime] = useState(90);

  const handleShufflePress = () => {
    setShufflePressed(!shufflePressed);
  };

  const parsedTime = Number(song.time);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.backButton}>
          <TouchableOpacity style={styles.settingsWrapper} onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={50} style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.albumContainer}>
          <View style={styles.songBox}>
            <Image source={song.imageUrl} style={styles.imageSong} />
          </View>
        </View>
        <View style={styles.buttonBox}>
          <View style={styles.buttonContainer}>
            <View style={styles.songTitle}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.description}>{song.description}</Text>
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
                maximumValue={parsedTime}
                value={song.time}
                onValueChange={(value) => setCurrentTime(value)}
                minimumTrackTintColor="#FFF"
                maximumTrackTintColor="#ffffff66"
                thumbTintColor="#FFF"
              />
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>
                  {Math.floor(song.time / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)}
                </Text>
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
                <Text style={styles.lyricsTitle}>{song.description}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SongScreen;
