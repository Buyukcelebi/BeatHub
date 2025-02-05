import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    top: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: 30,
    },
    topBox: {
      marginTop: 20,
      marginBottom: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    scroll: {
      marginLeft: 10,
      borderRadius: 20,
      marginRight: 20,
    },
    bottom: {
      flex: 6,
      backgroundColor: theme.colors.background,
    },
    title: {
      color: theme.colors.primary,
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.h2.fontWeight,
      paddingLeft: theme.spacing.md,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    listItem: {
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
    icon: {
      width: 20,
      height: 20,
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
  });
};

type DiscoverStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as DiscoverStyles;
};
