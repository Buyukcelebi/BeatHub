import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Slider from "@react-native-community/slider";
import SongButton from "@/components/buttons/SongButton";
import BackButton from "@/components/buttons/BackButton";
import { router, useLocalSearchParams, useRouter } from "expo-router";

const { height, width } = Dimensions.get("window");

const songs = [
  {
    id: "1",
    imageUrl: require("@/assets/images/Jazz.png"),
    lyrics:
      "I heard that you're settled down\nThat you found a girl and you're married now\nI heard that your dreams came true\nGuess she gave you things, I didn't give to you\nOld friend, why are you so shy?\nAin't like you to hold back or hide from the light\nI hate to turn up out of the blue, uninvited\nBut I couldn't stay away, I couldn't fight it\nI had hoped you'd see my face\nAnd that you'd be reminded that for me, it isn't over\nNever mind, I'll find someone like you\nI wish nothing but the best for you, too\nDon't forget me, I beg\nI remember you said\nSometimes it lasts in love, but sometimes it hurts instead\nSometimes it lasts in love, but sometimes it hurts instead",
  },
];

function Song() {
  const [shufflePressed, setShufflePressed] = useState(true);
  const [currentTime, setCurrentTime] = useState(90);

  const router = useRouter();
  const { title, description, imageUrl, time } = useLocalSearchParams();
  const handleShufflePress = () => {
    setShufflePressed(!shufflePressed);
  };

  useEffect(() => {
    console.log("gelenler:", title, description, time, imageUrl);
  }, [title, description, time, imageUrl]);

  const parsedTime = Number(time);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.backButton}>
          <BackButton
            onPress={() => {
              router.push("/(tabs)/Discover");
            }}
          ></BackButton>
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
                  source={require("@/assets/images/plus_border.png")}
                  style={[styles.plusImage, { tintColor: "#FFF" }]}
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
                  {Math.floor(currentTime / 60)}:
                  {("0" + Math.floor(currentTime % 60)).slice(-2)}
                </Text>
                <Text style={styles.timeText}>
                  {Math.floor(parsedTime / 60)}:
                  {("0" + Math.floor(parsedTime % 60)).slice(-2)}
                </Text>
              </View>
            </View>

            <View style={styles.songContainer}>
              <TouchableOpacity onPress={handleShufflePress}>
                <Image
                  source={require("@/assets/images/shuffle.png")}
                  style={[
                    styles.shuffleImage,
                    { tintColor: shufflePressed ? "white" : "green" },
                  ]}
                />
              </TouchableOpacity>

              <View style={styles.songButton}>
                <SongButton />
              </View>

              <TouchableOpacity>
                <Image
                  source={require("@/assets/images/repeat.png")}
                  style={[styles.shuffleImage, { tintColor: "#FFF" }]}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#071e4a",
  },
  scrollContent: {},
  top: {
    flex: 1,
    paddingTop: 90,
    backgroundColor: "#071e4a",
    justifyContent: "center",
    marginHorizontal: 20,
    height: height * 0.9,
  },
  backButton: {
    marginBottom: 10,
  },
  bottom: {
    backgroundColor: "#071e4a",
    marginTop: 20,
    paddingHorizontal: 35,
  },
  buttonBox: {
    alignItems: "center",
  },
  buttonContainer: {
    width: width * 0.85,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    height: 420,
  },
  lyricsBox: {
    alignItems: "center",
  },
  lyricsContainer: {
    width: width * 0.85,
    height: 350,
    resizeMode: "contain",
    borderRadius: 20,
    backgroundColor: "#1f287d",
  },
  lyricsTitle: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
    margin: 10,
    marginLeft: 15,
  },
  lyricsDescription: {
    marginBottom: 20,
  },
  songTitle: {
    alignItems: "center",
    flexDirection: "row",
    height: height * 0.1,
  },
  songContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    height: height * 0.1,
  },
  songButton: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "lightgray",
    fontSize: 14,
    marginTop: 5,
  },
  albumContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  songBox: {
    borderRadius: 20,
    height: height * 0.43,
    width: width * 0.85,
    resizeMode: "contain",
  },
  imageSong: {
    borderRadius: 20,
    marginBottom: 20,
    height: "100%",
    width: "100%",
  },
  shuffleImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  button: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  plusImage: {
    width: 30,
    height: 30,
  },
  sliderContainer: {
    marginTop: 10,
    width: width * 0.85,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    color: "white",
    fontSize: 14,
  },
});

export default Song;
