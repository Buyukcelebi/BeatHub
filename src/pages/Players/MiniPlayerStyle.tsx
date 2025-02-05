import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: theme.colors.primary,
      bottom: 0,
    },
    miniPlayer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
    },
    artwork: {
      width: 40,
      height: 40,
      borderRadius: theme.borderRadius.sm,
    },
    details: {
      flex: 1,
      marginLeft: theme.spacing.sm,
    },
    songTitle: {
      color: theme.colors.white,
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      fontFamily: theme.typography.h4.fontFamily,
    },
    artistName: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.body.fontSize,
      fontFamily: theme.typography.body.fontFamily,
    },
    controlButton: {
      padding: theme.spacing.sm,
    },
  });
};

type MiniPlayerStyle = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as MiniPlayerStyle;
};
