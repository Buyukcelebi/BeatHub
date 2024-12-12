import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    top: {
      backgroundColor: theme.colors.background,
      paddingBottom: theme.spacing.md,
      flex: 1,
    },
    switchContainer: {
      marginTop: theme.spacing.xl,
    },
    bottom: {
      backgroundColor: theme.colors.background,
      marginHorizontal: theme.spacing.md,
      flex: 1,
      marginBottom: theme.spacing.xl,
    },
    borderButtons: {
      backgroundColor: theme.colors.surfaceVariant,
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.sm,
      marginRight: theme.spacing.sm,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.borderRadius.lg,
    },
    activeButton: {
      backgroundColor: theme.colors.primary,
    },
    genre: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      marginTop: theme.spacing.sm,
      marginHorizontal: theme.spacing.md,
      backgroundColor: theme.colors.surfaceVariant,
      borderColor: theme.colors.primary,
      borderWidth: 1,
      borderRadius: theme.borderRadius.lg,
      paddingBottom: theme.spacing.md,
    },
    imageGenre: {
      height: 80,
      width: 80,
      borderRadius: theme.borderRadius.md,
      marginTop: theme.spacing.md,
      marginRight: theme.spacing.md,
    },
    genreText: {
      marginTop: theme.spacing.sm,
      marginBottom: theme.spacing.md,
      ...theme.typography.body,
      marginRight: theme.spacing.md,
      color: theme.colors.text,
    },
    title: {
      color: theme.colors.text,
      ...theme.typography.subtitle,
      paddingTop: theme.spacing.sm,
    },
    description: {
      marginVertical: theme.spacing.xs,
      marginHorizontal: theme.spacing.xl,
      color: theme.colors.text,
      ...theme.typography.body,
    },
    inputWrapper: {
      position: 'relative',
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: theme.borderRadius.lg,
    },
    customPlaceholder: {
      position: 'absolute',
      top: theme.spacing.md,
      left: theme.spacing.md,
      color: theme.colors.text,
      ...theme.typography.subtitle,
    },
    inputPrompt: {
      paddingTop: theme.spacing.md,
      paddingHorizontal: theme.spacing.md,
      color: theme.colors.text,
      ...theme.typography.body,
      height: 150,
    },
  });
};

type PromptStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as PromptStyles;
};
