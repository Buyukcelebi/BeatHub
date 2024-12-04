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
      backgroundColor: '#071e4a',
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
      backgroundColor: '#071e4a',
    },
    title: {
      color: 'white',
      fontSize: 23,
      fontWeight: 'bold',
      paddingLeft: 20,
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
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
    descriptionText: {
      color: 'lightgray',
      fontSize: 14,
      marginTop: 5,
    },
    repeatText: {
      color: 'lightgray',
      fontSize: 14,
    },
    textContainer: {
      marginLeft: 15,
      flex: 1,
    },
    timeContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      backgroundColor: 'rgba(46, 71, 59, 0.5)',
    },
    time: {
      color: '#FFF',
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
