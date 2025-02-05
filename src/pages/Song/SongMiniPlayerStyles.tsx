import { StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

const { height, width } = Dimensions.get('window');

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#071e4a',
    },
    top: {
      flex: 1,
      paddingTop: 90,
      backgroundColor: '#071e4a',
      justifyContent: 'center',
      marginHorizontal: 20,
      height: height * 0.9,
    },
    backButton: {
      marginBottom: 10,
    },
    bottom: {
      backgroundColor: '#071e4a',
      marginTop: 20,
      paddingHorizontal: 35,
    },
    buttonBox: {
      alignItems: 'center',
    },
    buttonContainer: {
      width: width * 0.85,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomContainer: {
      height: 420,
    },
    lyricsBox: {
      alignItems: 'center',
    },
    lyricsContainer: {
      width: width * 0.85,
      height: 350,
      resizeMode: 'contain',
      borderRadius: 20,
      backgroundColor: '#1f287d',
    },
    lyricsTitle: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold',
      margin: 10,
      marginLeft: 15,
    },
    lyricsDescription: {
      marginBottom: 20,
    },
    songTitle: {
      alignItems: 'center',
      flexDirection: 'row',
      height: height * 0.1,
    },
    songContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      height: height * 0.1,
    },
    songButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    description: {
      color: 'lightgray',
      fontSize: 14,
      marginTop: 5,
    },
    albumContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    songBox: {
      borderRadius: 20,
      height: height * 0.43,
      width: width * 0.85,
      resizeMode: 'contain',
    },
    imageSong: {
      borderRadius: 20,
      marginBottom: 20,
      height: '100%',
      width: '100%',
    },
    shuffleImage: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    button: {
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    plusImage: {
      width: 30,
      height: 30,
    },
    sliderContainer: {
      marginTop: 10,
      width: width * 0.85,
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    timeText: {
      color: 'white',
      fontSize: 14,
    },
  });
};

type SongStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as SongStyles;
};
