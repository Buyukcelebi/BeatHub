import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
    },
    proButton: {
      backgroundColor: theme.colors.success,
      borderRadius: theme.borderRadius.xl,
      width: 65,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    proButtonWrapper: {
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing.sm,
    },
    proText: {
      color: theme.colors.white,
      fontSize: theme.typography.caption.fontSize,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    proIcon: {
      marginRight: theme.spacing.xs,
    },
    top: {
      flex: 1.2,
      backgroundColor: theme.colors.surface,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: theme.spacing.xl * 3,
    },
    bottom: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
    },
    settingsWrapper: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.borderRadius.lg,
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    settingsIcon: {
      ...theme.typography.title,
      color: theme.colors.white,
    },
    topImage: {
      height: 140,
      width: 140,
      marginBottom: theme.spacing.sm,
    },
    topContainer: {
      alignItems: 'center',
    },
    bottomContainer: {
      marginTop: theme.spacing.lg,
      paddingHorizontal: theme.spacing.md,
    },
    discretion: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.body.fontSize,
      lineHeight: theme.typography.body.lineHeight,
      fontFamily: theme.typography.body.fontFamily,
    },
    title: {
      color: theme.colors.primary,
      fontSize: theme.typography.h1.fontSize,
      fontWeight: theme.typography.h1.fontWeight,
      fontFamily: theme.typography.h1.fontFamily,
      width: 200,
      textAlign: 'center',
      paddingBottom: theme.spacing.sm,
    },
  });
};
type LibraryStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as LibraryStyles;
};
