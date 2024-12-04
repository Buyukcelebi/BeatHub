import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      position: 'absolute',
      bottom: theme.spacing.sm,
      width: '90%',
      padding: theme.spacing.md,
      overflow: 'hidden',
      borderRadius: theme.borderRadius.md,
      alignSelf: 'center',
      backgroundColor: theme.colors.surface,
      flexDirection: 'row',
      justifyContent: 'space-between',
      ...theme.shadows.medium,
    },
    title: {
      fontSize: 15,
      color: theme.colors.white,
      fontWeight: '300',
    },
    subTitle: {
      fontSize: 11,
      color: theme.colors.textSecondary,
      fontWeight: '300',
    },
  });
};

type ParallaxScrollViewStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as ParallaxScrollViewStyles;
};
