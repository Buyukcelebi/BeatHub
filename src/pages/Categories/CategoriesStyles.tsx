import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
    },
    top: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: insets.top,
    },
    topBox: {
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.sm,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    scroll: {
      marginLeft: theme.spacing.sm,
      marginRight: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
    },
    bottom: {
      flex: 6,
      backgroundColor: theme.colors.background,
    },
    backButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 40,
      borderRadius: theme.borderRadius.sm,
      marginLeft: theme.spacing.md,
      backgroundColor: theme.colors.primary,
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
      paddingLeft: theme.spacing.md,
      paddingBottom: theme.spacing.sm,
      borderRadius: theme.borderRadius.md,
      paddingRight: theme.spacing.md,
      backgroundColor: theme.colors.background,
    },
    listItemImage: {
      width: 100,
      height: 100,
      borderRadius: theme.borderRadius.md,
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
    arrowIcon: {
      tintColor: theme.colors.text,
      width: 20,
      height: 20,
    },
    playIcon: {
      width: 10,
      height: 10,
      marginRight: theme.spacing.xs,
    },
    playCountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};

type CategoriesStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as CategoriesStyles;
};
