import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

type SongButtonProps = {
  onPressPause: () => void;
  onPressNext: () => void;
  onPressBack: () => void;
};

const SongButton = ({
  onPressPause,
  onPressBack,
  onPressNext,
}: SongButtonProps): React.JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonBack} onPress={onPressBack}>
        <Image
          source={require("../../assets/images/back.png")}
          style={[styles.image, { tintColor: "white" }]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonPause} onPress={onPressPause}>
        <Image
          source={require("../../assets/images/pause.png")}
          style={[styles.image, { tintColor: "#071e4a" }]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNext} onPress={onPressNext}>
        <Image
          source={require("../../assets/images/next.png")}
          style={[styles.image, { tintColor: "white" }]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPause: {
    paddingVertical: "6.5%",
    borderRadius: 90,
    borderColor: "#000000",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "23%",
    marginHorizontal: 7,
  },
  buttonBack: {
    paddingVertical: "10%",
    borderRadius: 80,
    alignItems: "center",
    backgroundColor: "#071e4a",
    width: "20%",
    marginHorizontal: 7,
  },
  buttonNext: {
    paddingVertical: "10%",
    borderRadius: 60,
    alignItems: "center",
    backgroundColor: "#071e4a",
    width: "20%",
    marginHorizontal: 7,
  },
  buttonText: {
    color: "black",
    fontSize: 19,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default SongButton;
