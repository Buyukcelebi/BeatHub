import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.md,
    },

    top: {
      flex: 1.2,
      backgroundColor: theme.colors.background,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: theme.spacing.xl * 3,
    },
    bottom: {
      flex: 1,
      backgroundColor: theme.colors.background,
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
    musicItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
      paddingBottom: 15,
      borderRadius: 20,
      paddingRight: 20,
    },
    listItemImage: {
      width: 100,
      height: 100,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    musicTitle: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
    timeContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      backgroundColor: theme.colors.overlay,
    },
    time: {
      color: theme.colors.white,
      fontSize: theme.typography.caption.fontSize,
    },
    playIcon: {
      width: 10,
      height: 10,
      marginRight: 5,
    },
    playCountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    listItemText: {
      color: theme.colors.text,
      ...theme.typography.body,
    },
    descriptionText: {
      color: theme.colors.textSecondary,
      ...theme.typography.caption,
    },
    repeatText: {
      color: theme.colors.textSecondary,
      ...theme.typography.caption,
      justifyContent: 'flex-end',
    },
    textContainer: {
      marginLeft: theme.spacing.sm,
      flex: 1,
    },
    icon: {
      width: 20,
      height: 20,
    },
  });
};
type LibraryStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as LibraryStyles;
};
