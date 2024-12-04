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
      flex: 1.2,
      backgroundColor: '#071e4a',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    bottom: {
      flex: 1,
      backgroundColor: '#071e4a',
      padding: 10,
    },
    topImage: {
      height: 140,
      width: 140,
      marginBottom: 20,
    },
    topContainer: {
      alignItems: 'center',
    },
    bottomContainer: {
      marginTop: 40,
      paddingLeft: 20,
      paddingRight: 20,
    },
    discretion: {
      color: 'white',
      fontSize: 16,
    },
    title: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      width: 200,
      textAlign: 'center',
      paddingBottom: 10,
    },
  });
};

type LibraryStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as LibraryStyles;
};
