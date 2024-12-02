import React, { useMemo } from "react";
import {
  type StyleProp,
  type ViewProps,
  type ImageStyle,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import type { AnimatedProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { BlurView } from "expo-blur";
import useThemedStyles from "@/theme/useThemedStyles";
import styles from "./SlideItemStyles";
import Octicons from "@expo/vector-icons/Octicons";

interface Props extends AnimatedProps<ViewProps> {
  style?: StyleProp<ImageStyle>;
  index?: number;
  rounded?: boolean;
  source?: ImageSourcePropType;
  item?: any;
}

export const SlideItem: React.FC<Props> = (props) => {
  const {
    style,
    index = 0,
    rounded = false,
    testID,
    item,
    ...animatedViewProps
  } = props;

  const _styles = useThemedStyles(styles);

  return (
    <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
      <Animated.Image
        style={[style, _styles.container]}
        source={item.image}
        resizeMode="cover"
      />
      <BlurView
        intensity={10}
        pointerEvents="none"
        style={[_styles.contentContainer, { backgroundColor: item.color }]}
      >
        <View>
          <Text style={_styles.title}>Echoes of Midnight</Text>
          <Text style={_styles.subTitle}>
            <Octicons name="person" size={11} color="#D8D8D6" /> John Hickman
          </Text>
        </View>
        <Octicons name="play" size={24} color="#D8D8D6" />
      </BlurView>
    </Animated.View>
  );
};
