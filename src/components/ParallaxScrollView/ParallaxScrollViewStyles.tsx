import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#071e4a',
      flex: 1,
    },
    header: {
      height: 350,
      overflow: 'hidden',
    },
    content: {
      backgroundColor: '#071e4a',
    },
  });
};

type ParallaxScrollViewStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as ParallaxScrollViewStyles;
};
