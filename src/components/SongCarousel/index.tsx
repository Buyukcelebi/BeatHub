import * as React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

import { SlideItem } from './SlideItem';
import { parallaxLayout } from './parallax';

import useTheme from '@/theme/useTheme';

const cover0 = {
  image: require('@/assets/images/song-cover-1.png'),
  color: 'rgba(114, 36, 11, 0.5)',
  prompt: 'Write a song about a "lonely night"',
};
const cover1 = {
  image: require('@/assets/images/song-cover-2.png'),
  color: 'rgba(19, 56, 54, 0.5)',
  prompt: 'A jazz tune about the fleeting beauty of a summer romance',
};
const cover2 = {
  image: require('@/assets/images/song-cover-3.png'),
  color: 'rgba(18, 25, 49, 0.5)',
  prompt: 'A pop anthem about chasing dreams and overcoming obstacles',
};
const cover3 = {
  image: require('@/assets/images/song-cover-4.png'),
  color: 'rgba(97, 42, 10, 0.5)',
  prompt: 'A blues song about the struggles of working a dead-end job',
};
const cover4 = {
  image: require('@/assets/images/song-cover-5.png'),
  color: 'rgba(54, 80, 91, 0.5)',
  prompt: 'A rock ballad about the pain of losing a loved one',
};
const cover5 = {
  image: require('@/assets/images/song-cover-6.png'),
  color: '#rgba(42, 21, 21, 0.5)',
  prompt: 'A country song about the simple pleasures of life',
};

export const coverItems = [cover0, cover1, cover2, cover3, cover4, cover5];

function Index() {
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);
  const theme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        autoPlay={isAutoPlay}
        style={{
          width: theme.window.width,
          height: theme.window.width / 1.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        width={theme.window.width / 1.5}
        data={[...coverItems]}
        renderItem={({ item, index, animationValue }) => {
          return (
            <CustomItem key={index} index={index} item={item} animationValue={animationValue} />
          );
        }}
        customAnimation={parallaxLayout(
          {
            size: theme.window.width,
            vertical: false,
          },
          {
            parallaxScrollingScale: 1,
            parallaxAdjacentItemScale: 0.8,
            parallaxScrollingOffset: 20,
          }
        )}
        scrollAnimationDuration={1200}
      />
    </View>
  );
}

interface ItemProps {
  index: number;
  animationValue: Animated.SharedValue<number>;
  item: any;
}
const CustomItem: React.FC<ItemProps> = ({ index, animationValue, item }) => {
  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
      }}>
      <View style={{ flex: 1, width: '100%' }}>
        <SlideItem item={item} />
      </View>
    </View>
  );
};

export default Index;
