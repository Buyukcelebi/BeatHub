import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, ScrollView } from 'react-native';

import Lyrics from './Lyrics';
import Prompt from './Prompt';
import { useStyles } from './TwoButtonSwitchStyles';

import useTheme from '@/theme/useTheme';

const TwoButtonSwitch = () => {
  const styles = useStyles();
  const theme = useTheme();
  const { width } = theme.window;
  const [isLeftButtonActive, setIsLeftButtonActive] = useState(true);
  const buttonTranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(buttonTranslateX, {
      toValue: isLeftButtonActive ? 0 : (width * 0.65) / 2,
      useNativeDriver: false,
    }).start();
  }, [isLeftButtonActive]);

  const switchHandler = (isLeft: boolean) => {
    if (isLeft !== isLeftButtonActive) {
      setIsLeftButtonActive(isLeft);
    }
  };

  return (
    <ScrollView style={styles.top}>
      <View style={styles.container}>
        <View style={styles.switchContainer}>
          <Animated.View
            style={[styles.switchBackground, { transform: [{ translateX: buttonTranslateX }] }]}
          />

          <TouchableOpacity style={styles.switchButton} onPress={() => switchHandler(true)}>
            <Text style={isLeftButtonActive ? styles.activeText : styles.inactiveText}>Lyrics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.switchButton} onPress={() => switchHandler(false)}>
            <Text style={!isLeftButtonActive ? styles.activeText : styles.inactiveText}>
              Prompt
            </Text>
          </TouchableOpacity>
        </View>
        {isLeftButtonActive ? <Lyrics /> : <Prompt />}
      </View>
    </ScrollView>
  );
};

export default TwoButtonSwitch;
