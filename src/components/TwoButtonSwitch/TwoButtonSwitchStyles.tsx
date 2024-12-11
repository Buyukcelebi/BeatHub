import { StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

const { width } = Dimensions.get('window');

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      marginTop: 15,
      alignItems: 'center',
      flex: 1,
    },
    top: {
      flex: 1,
      backgroundColor: '#071e4a',
    },
    switchContainer: {
      marginBottom: 15,
      width: width * 0.65,
      height: 45,
      backgroundColor: '#1f287d',
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    switchBackground: {
      position: 'absolute',
      width: '50%',
      height: '100%',
      backgroundColor: '#2cbece',
      borderRadius: 20,
    },
    switchButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeText: {
      color: '#FFF',
      fontWeight: 'bold',
    },
    inactiveText: {
      color: '#FFF',
    },
  });
};

type TwoButtonSwitchStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as TwoButtonSwitchStyles;
};
