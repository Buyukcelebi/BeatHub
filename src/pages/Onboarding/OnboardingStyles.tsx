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
      marginTop: theme.spacing.xl,
      marginBottom: theme.spacing.md,
    },
    entryTitle: {
      ...theme.typography.h1,
      color: theme.colors.text,
      textAlign: 'center',
      marginTop: theme.spacing.sm,
    },
    subTitle: {
      ...theme.typography.body,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginVertical: theme.spacing.xs,
      marginHorizontal: theme.spacing.md,
    },
    entryDescription: {
      ...theme.typography.body,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginTop: theme.spacing.md,
      marginHorizontal: theme.spacing.md,
    },
    promptText: {
      ...theme.typography.body,
      color: theme.colors.primary,
      fontWeight: '500',
    },
    songCarouselWrapper: {
      marginVertical: theme.spacing.sm,
      flex: 1,
    },
    buttonFooter: {
      ...theme.typography.body,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginHorizontal: theme.spacing.md,
    },
    buttonWrapper: {
      flex: 1,
      marginHorizontal: theme.spacing.md,
      justifyContent: 'flex-end',
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
