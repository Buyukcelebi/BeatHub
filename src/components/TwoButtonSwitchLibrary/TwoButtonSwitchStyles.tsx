import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      marginTop: theme.spacing.md,
      alignItems: 'center',
    },
    top: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    switchContainer: {
      marginBottom: theme.spacing.md,
      width: theme.window.width * 0.65,
      marginTop: theme.spacing.md,
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: theme.borderRadius.lg,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    switchBackground: {
      position: 'absolute',
      width: '50%',
      height: '100%',
      backgroundColor: theme.colors.primary,
      borderRadius: theme.borderRadius.lg,
    },
    switchButton: {
      flex: 1,
      justifyContent: 'center',
      paddingVertical: theme.spacing.xs,
      alignItems: 'center',
    },
    activeText: {
      color: theme.colors.surface,
      ...theme.typography.button,
      fontWeight: 'bold',
    },
    inactiveText: {
      color: theme.colors.text,
      ...theme.typography.button,
    },
  });
};

type TwoButtonSwitchStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as TwoButtonSwitchStyles;
};
