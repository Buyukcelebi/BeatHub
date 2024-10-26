import { router } from "expo-router";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import Prompt from "./Prompt";
import Lyrics from "./Lyrics";

const { width } = Dimensions.get("window");

const TwoButtonSwitch = () => {
  const [isLeftButtonActive, setIsLeftButtonActive] = useState(true);
  const buttonTranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(buttonTranslateX, {
      toValue: isLeftButtonActive ? 0 : (width * 0.65) / 2,
      useNativeDriver: false,
    }).start();
  }, [isLeftButtonActive]);

  const switchHandler = (isLeft) => {
    if (isLeft !== isLeftButtonActive) {
      setIsLeftButtonActive(isLeft);
    }
  };

  return (
    <ScrollView style={styles.top}>
      <View style={styles.container}>
        <View style={styles.switchContainer}>
          <Animated.View
            style={[
              styles.switchBackground,
              { transform: [{ translateX: buttonTranslateX }] },
            ]}
          />

          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => switchHandler(true)}
          >
            <Text
              style={
                isLeftButtonActive ? styles.activeText : styles.inactiveText
              }
            >
              Lyrics
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => switchHandler(false)}
          >
            <Text
              style={
                !isLeftButtonActive ? styles.activeText : styles.inactiveText
              }
            >
              Prompt
            </Text>
          </TouchableOpacity>
        </View>
        {isLeftButtonActive ? <Lyrics /> : <Prompt />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: "#071e4a",
  },
  switchContainer: {
    marginBottom: 15,
    width: width * 0.65,
    height: 45,
    backgroundColor: "#1f287d",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  switchBackground: {
    position: "absolute",
    width: "50%",
    height: "100%",
    backgroundColor: "#2cbece",
    borderRadius: 20,
  },
  switchButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  inactiveText: {
    color: "#FFF",
  },
});

export default TwoButtonSwitch;
