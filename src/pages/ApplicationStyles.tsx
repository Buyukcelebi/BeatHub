import { StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  const screenWidth = Dimensions.get('window').width;
  return StyleSheet.create({
    settingsWrapper: {
      backgroundColor: theme.colors.primary,
      borderRadius: 20,
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,
      marginBottom: 3,
    },
    settingsIcon: {
      ...{ ...theme.title },
      color: theme.colors.white,
      fontWeight: '900',
      fontSize: 18,
    },
    proButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 20,
      width: 65,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },

    proButtonWrapper: {
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      marginBottom: 3,
    },
    proText: {
      color: theme.colors.white,
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    proIcon: {
      marginRight: 5,
    },
  });
};

type ApplicationStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as ApplicationStyles;
};
