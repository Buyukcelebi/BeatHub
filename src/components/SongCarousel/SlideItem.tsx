import Octicons from '@expo/vector-icons/Octicons';
import { BlurView } from 'expo-blur';
import React from 'react';
import {
  type StyleProp,
  type ViewProps,
  type ImageStyle,
  View,
  Text,
  ImageSourcePropType,
} from 'react-native';
import type { AnimatedProps } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

import { useStyles } from './SlideItemStyles';

interface Props extends AnimatedProps<ViewProps> {
  style?: StyleProp<ImageStyle>;
  index?: number;
  rounded?: boolean;
  source?: ImageSourcePropType;
  item?: any;
}

export const SlideItem: React.FC<Props> = (props) => {
  const { style, index = 0, rounded = false, testID, item, ...animatedViewProps } = props;

  const styles = useStyles();

  return (
    <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
      <Animated.Image style={[style, styles.container]} source={item.image} resizeMode="cover" />
      <BlurView
        intensity={10}
        pointerEvents="none"
        style={[styles.contentContainer, { backgroundColor: item.color }]}>
        <View>
          <Text style={styles.title}>Echoes of Midnight</Text>
          <Text style={styles.subTitle}>
            <Octicons name="person" size={11} color="#D8D8D6" /> John Hickman
          </Text>
        </View>
        <Octicons name="play" size={24} color="#D8D8D6" />
      </BlurView>
    </Animated.View>
  );
};
