import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingVertical: theme.spacing.md,
    },
    entryTitle: {
      ...theme.typography.h1,
      color: theme.colors.text,
      textAlign: 'center',
      marginTop: 70,
    },
    subTitle: {
      ...theme.typography.body,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginVertical: theme.spacing.md,
      marginHorizontal: theme.spacing.md,
    },
    entryDescription: {
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginTop: theme.spacing.xs,
      marginHorizontal: theme.spacing.md,
    },
    promptText: {
      fontSize: 13,
      color: theme.colors.primary,
      fontWeight: '500',
    },
    songCarouselWrapper: {
      marginVertical: theme.spacing.sm,
      flex: 1,
      marginTop: theme.spacing.xl,
    },
    buttonFooter: {
      fontSize: 11,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginHorizontal: theme.spacing.md,
    },
    buttonWrapper: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      marginHorizontal: theme.spacing.md,
      paddingBottom: theme.spacing.md,
      zIndex: 1,
    },
    lottie: {
      width: theme.window.width,
      height: theme.window.width,
    },
    lottieWrapper: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    },
    lottieBackground: {
      width: theme.window.width / 1.7,
      height: theme.window.width / 1.7,
      backgroundColor: '#fff',
      position: 'absolute',
      borderRadius: 250,
    },
  });
};

type OnboardingStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as OnboardingStyles;
};
