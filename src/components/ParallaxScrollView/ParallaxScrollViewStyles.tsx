import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

const HEADER_HEIGHT = 350;

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    header: {
      height: HEADER_HEIGHT,
      overflow: 'hidden',
    },
    content: {
      backgroundColor: theme.colors.background,
      borderTopLeftRadius: theme.borderRadius.xl,
      borderTopRightRadius: theme.borderRadius.xl,
      marginTop: -theme.spacing.lg,
    },
    headerBackground: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.colors.primary,
    },
  });
};

type ParallaxScrollViewStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as ParallaxScrollViewStyles;
};
