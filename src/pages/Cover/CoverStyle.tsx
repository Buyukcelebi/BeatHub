import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    container: {
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginTop: 10,
      marginHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 10,
    },
    scrollContainer: {
      flex: 1,
    },
    content: {
      padding: 20,
      paddingTop: 0,
    },
    voiceListContainer: {
      marginTop: 20,
    },
    voiceListContent: {
      paddingBottom: 80,
    },
    voiceRow: {
      justifyContent: 'space-between',
    },
    voiceItem: {
      width: '31%',
      marginBottom: 15,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderColor: theme.colors.background,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: theme.colors.background,
    },
    searchIcon: {
      marginLeft: 10,
    },
    input: {
      flex: 1,
      padding: 10,
      fontSize: 16,
      color: theme.colors.text,
      textAlignVertical: 'top',
    },
    pasteButton: {
      padding: 10,
    },
    voiceCategories: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10,
      gap: 10,
    },
    categoryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    categoryButtonSelected: {
      backgroundColor: theme.colors.primary,
    },
    categoryText: {
      color: theme.colors.text,
      fontSize: 14,
      fontWeight: '500',
    },
    categoryTextSelected: {
      color: theme.colors.text,
    },
    categoryIcon: {
      marginRight: 6,
    },
    imageContainer: {
      position: 'relative',
      aspectRatio: 1,
      borderRadius: 15,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: 'transparent',
    },
    selectedVoiceContainer: {
      borderRadius: 15,
      borderColor: theme.colors.primary,
      borderWidth: 3,
    },

    voiceImage: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      backgroundColor: theme.colors.primary,
    },
    gradient: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '50%',
      justifyContent: 'flex-end',
    },
    voiceName: {
      color: theme.colors.white,
      fontSize: 12,
      fontWeight: '500',
      paddingLeft: 10,
      paddingBottom: 10,
    },
    songSection: {
      paddingHorizontal: 20,
      marginTop: 20,
      marginBottom: 10,
    },
    fixedButtonContainer: {
      position: 'absolute',
      bottom: 10,
      left: 20,
      right: 20,
      zIndex: 1000,
    },

    modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
      color: theme.colors.white,
    },
    saveButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
    },
    saveButtonText: {
      fontWeight: 'bold',
    },
    modalText: {
      fontSize: 16,
      textAlign: 'center',
      color: theme.colors.white,
      marginBottom: 10,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: theme.colors.secondary,
      padding: 20,
      borderRadius: 20,
      alignItems: 'center',
      width: '80%',
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    modalIconContainer: {
      marginBottom: 15,
    },
    goToLibraryButton: {
      backgroundColor: theme.colors.green,
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
  });
};

type CoverStyle = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as CoverStyle;
};
