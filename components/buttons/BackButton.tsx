import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

type BackButtonProps = {
  onPress: () => void;
};

const BackButton = ({ onPress }: BackButtonProps): React.JSX.Element => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Image
        source={require("@/assets/images/arrow.png")}
        style={styles.arrowIcon}
      ></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },

  backButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 5,
    marginLeft: 20,
    backgroundColor: "#1f287d",
  },
  arrowIcon: {
    tintColor: "#FFF",
    width: 20,
    height: 20,
  },
});

export default BackButton;
