import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
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
      marginBottom: 70,
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
      marginTop: theme.spacing.md,
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
    inputNamePrompt: {
      paddingTop: theme.spacing.md,
      paddingHorizontal: theme.spacing.md,
      color: theme.colors.text,
      ...theme.typography.body,
      height: 80,
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
      color: theme.colors.background,
    },
    modalText: {
      fontSize: 16,
      textAlign: 'center',
      color: theme.colors.text,
      marginBottom: 10,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: theme.colors.primary,
      padding: 20,
      borderRadius: 20,
      alignItems: 'center',
      width: '80%',
      borderWidth: 1,
      borderColor: theme.colors.background,
    },
    modalIconContainer: {
      marginBottom: 15,
    },
    goToLibraryButton: {
      backgroundColor: theme.colors.gray,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 16,
      marginTop: 15,
    },
    goToLibraryText: {
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    fixedButtonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      zIndex: 1000,
    },
  });
};

type PromptStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as PromptStyles;
};
