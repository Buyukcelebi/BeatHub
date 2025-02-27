import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    backButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 40,
      borderRadius: 50,
      marginLeft: 20,
      backgroundColor: theme.colors.primary,
    },
    arrowIcon: {
      tintColor: theme.colors.background,
      width: 20,
      height: 20,
    },
    borderButton: {
      borderRadius: 20,
      borderColor: '#153b7d',
      alignItems: 'center',
      backgroundColor: '#06013c',
    },
    borderButtonText: {
      color: 'white',
      fontSize: 19,
    },
    developerButton: {
      position: 'absolute',
      backgroundColor: 'green',
      zIndex: 21100,
      bottom: 90,
      height: 30,
      width: 30,
      borderTopEndRadius: 10,
      borderBottomEndRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    primaryButton: {
      paddingVertical: 13,
      borderRadius: 15,
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      width: '100%',
      marginBottom: 10,
    },
    primaryButtonText: {
      color: 'white',
      fontSize: 16,
    },
    rightIconWrapper: {
      marginLeft: 15,
    },
    songButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    songButtonPause: {
      paddingVertical: '6.5%',
      borderRadius: 90,
      borderColor: '#000000',
      alignItems: 'center',

      backgroundColor: '#ffffff',
      width: '23%',
      marginHorizontal: 7,
    },
    songButtonBack: {
      paddingVertical: '10%',
      borderRadius: 80,
      alignItems: 'center',
      backgroundColor: theme.colors.divider,
      width: '20%',
      marginHorizontal: 7,
    },
    songButtonNext: {
      paddingVertical: '10%',
      borderRadius: 60,
      alignItems: 'center',
      backgroundColor: theme.colors.divider,
      width: '20%',
      marginHorizontal: 7,
    },
    songButtonText: {
      color: 'black',
      fontSize: 19,
    },
    songButtonImage: {
      width: 25,
      height: 25,
    },
    buttonGroupContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    navButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.borderRadius.lg,
      marginRight: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      paddingHorizontal: theme.spacing.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    navButtonSelected: {
      backgroundColor: theme.colors.surface,
    },
    navButtonText: {
      color: theme.colors.surface,
      ...theme.typography.caption,
      fontWeight: 'bold',
    },
    selectedText: {
      color: theme.colors.primary,
    },
  });
};

type HomeStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as HomeStyles;
};
