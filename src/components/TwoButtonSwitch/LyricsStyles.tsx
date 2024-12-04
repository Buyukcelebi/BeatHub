import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#071e4a',
    },
    top: {
      backgroundColor: '#071e4a',
      paddingBottom: 20,
      flex: 1,
    },
    bottom: {
      backgroundColor: '#071e4a',
      marginLeft: 20,
      marginRight: 20,
      flex: 1,
      marginBottom: 50,
    },
    musicInput: {
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 20,
      backgroundColor: '#1f287d',
      color: 'white',
      fontSize: 16,
      paddingTop: 10,
      height: 70,
      marginTop: 20,
      marginBottom: 10,
    },
    borderButtons: {
      backgroundColor: '#1f287d',
      marginTop: 20,
      marginBottom: 10,
      marginRight: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    genre: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      marginTop: 15,
      marginHorizontal: 20,
      backgroundColor: '#1f287d',
      borderColor: '#2cbece',
      borderWidth: 1,
      borderRadius: 20,
      paddingBottom: 20,
    },
    imageGenre: {
      height: 80,
      width: 80,
      borderRadius: 10,
      marginTop: 20,
      marginRight: 15,
    },
    genreText: {
      marginTop: 10,
      marginBottom: 20,
      fontSize: 17,
      marginRight: 15,
      color: '#FFF',
    },
    title: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold',
      paddingTop: 10,
    },
    description: {
      marginVertical: 7,
      marginHorizontal: 10,
      color: '#FFF',
      fontSize: 17,
    },
    inputWrapper: {
      position: 'relative',
      backgroundColor: '#1f287d',
      borderRadius: 20,
    },
    customPlaceholder: {
      position: 'absolute',
      top: 20,
      left: 20,
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold',
    },
    inputLyric: {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      color: 'white',
      fontSize: 16,
      height: 200,
    },
  });
};

type LyricsStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as LyricsStyles;
};
