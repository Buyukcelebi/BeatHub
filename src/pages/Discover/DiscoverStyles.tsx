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
      backgroundColor: theme.colors.surface,
      paddingVertical: 10,
      paddingBottom: 20,
    },
    bottom: {
      backgroundColor: theme.colors.background,
      padding: 10,
    },
    boxContainer: {
      flexDirection: 'row',
    },
    title: {
      color: theme.colors.primary,
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
    },
    timeContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      color: theme.colors.info,
      backgroundColor: theme.colors.overlay,
    },
    time: {
      color: theme.colors.text,
    },
    box: {
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxText: {
      color: theme.colors.white,
      ...theme.typography.h4,
    },
    scroll: {
      paddingBottom: 60,
      marginRight: 20,
      marginLeft: 20,
    },
    flatListTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 15,
      paddingTop: 8,
      alignItems: 'center',
    },
    catagoriesBox: {
      paddingBottom: 20,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: 20,
      marginHorizontal: 20,
      marginBottom: 20,
      marginTop: 10,
      overflow: 'hidden',
    },
    buttonImage: {
      width: 45,
      height: 45,
      marginBottom: 10,
      backgroundColor: theme.colors.primary,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 10,
    },
    categoriesImage: {
      width: 100,
      height: 100,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    listItemImage: {
      width: 55,
      height: 55,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
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
      marginLeft: 10,
      flex: 1,
    },
    countTextContainer: {
      marginLeft: 10,
      alignItems: 'center',
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
    headerBackground: {
      backgroundColor: theme.colors.surfaceVariant,
    },
    plusIcon: {
      color: theme.colors.surface,
    },
  });
};

type DiscoverStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as DiscoverStyles;
};
