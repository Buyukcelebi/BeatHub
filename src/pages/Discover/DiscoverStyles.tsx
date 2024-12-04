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
    },
    bottom: {
      backgroundColor: '#071e4a',
      padding: 10,
    },
    boxContainer: {
      flexDirection: 'row',
    },
    timeContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      color: '#0022e0',
      backgroundColor: 'rgba(46, 71, 59, 0.5)',
    },
    time: {
      color: '#FFF',
    },
    box: {
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },

    scroll: {
      paddingBottom: 80,
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
      backgroundColor: '#5e2e9c5f',
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
      backgroundColor: '#1c0c0c96',
      borderRadius: 30,
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 15,
    },
    categoriesImage: {
      width: 150,
      height: 150,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    listItemImage: {
      width: 90,
      height: 90,
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
      justifyContent: 'flex-end',
    },
    textContainer: {
      marginLeft: 15,
      flex: 1,
    },
    countTextContainer: {
      marginLeft: 15,
      alignItems: 'center',
    },

    tabTitle: {
      color: 'white',
      fontSize: 30,
      fontWeight: '700',
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
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
