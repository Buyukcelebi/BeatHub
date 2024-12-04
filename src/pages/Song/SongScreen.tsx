import Slider from '@react-native-community/slider';
import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, ImageSourcePropType } from 'react-native';

import { useStyles } from './SongStyles';

import BackButton from '@/components/Buttons/BackButton';
import SongButton from '@/components/Buttons/SongButton';

type Props = StaticScreenProps<{
  title: string;
  description: string;
  time: string;
  imageUrl: ImageSourcePropType;
}>;

const songs = [
  {
    id: '1',
    imageUrl: require('@/assets/images/Jazz.png'),
    lyrics:
      "I heard that you're settled down\nThat you found a girl and you're married now\nI heard that your dreams came true\nGuess she gave you things, I didn't give to you\nOld friend, why are you so shy?\nAin't like you to hold back or hide from the light\nI hate to turn up out of the blue, uninvited\nBut I couldn't stay away, I couldn't fight it\nI had hoped you'd see my face\nAnd that you'd be reminded that for me, it isn't over\nNever mind, I'll find someone like you\nI wish nothing but the best for you, too\nDon't forget me, I beg\nI remember you said\nSometimes it lasts in love, but sometimes it hurts instead\nSometimes it lasts in love, but sometimes it hurts instead",
  },
];

function Song({ route }: Props) {
  const styles = useStyles();
  const [shufflePressed, setShufflePressed] = useState(true);
  const [currentTime, setCurrentTime] = useState(90);

  const navigation = useNavigation();
  const { title, description, imageUrl, time } = route.params;

  const handleShufflePress = () => {
    setShufflePressed(!shufflePressed);
  };

  const parsedTime = Number(time);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.backButton}>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.albumContainer}>
          <View style={styles.songBox}>
            <Image source={songs[0].imageUrl} style={styles.imageSong} />
          </View>
        </View>
        <View style={styles.buttonBox}>
          <View style={styles.buttonContainer}>
            <View style={styles.songTitle}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
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
                value={currentTime}
                onValueChange={(value) => setCurrentTime(value)}
                minimumTrackTintColor="#FFF"
                maximumTrackTintColor="#ffffff66"
                thumbTintColor="#FFF"
              />
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>
                  {Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)}
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
                <Text style={styles.lyricsTitle}>{songs[0].lyrics}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Song;
