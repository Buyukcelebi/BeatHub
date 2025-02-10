import { StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

const { height, width } = Dimensions.get('window');

export const createStyles = (theme: Theme, insets: any) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.divider,
      flex: 1,
    },
    top: {
      flex: 1,
      paddingTop: theme.spacing.sm,
      backgroundColor: theme.colors.divider,
      justifyContent: 'center',
      marginHorizontal: theme.spacing.md,
      height: height * 0.9,
    },
    backButton: {
      marginBottom: theme.spacing.sm,
    },
    bottom: {
      backgroundColor: theme.colors.divider,
      marginTop: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
    },
    buttonBox: {
      alignItems: 'center',
    },
    buttonContainer: {
      width: width * 0.85,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.divider,
    },
    bottomContainer: {
      height: 420,
    },
    lyricsBox: {
      alignItems: 'center',
    },
    lyricsContainer: {
      width: width * 0.85,
      height: 350,
      borderRadius: theme.borderRadius.lg,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
    },
    lyricsTitle: {
      color: theme.colors.text,
      fontSize: theme.typography.h3.fontSize,
      fontWeight: theme.typography.h3.fontWeight,
      margin: theme.spacing.sm,
      marginLeft: theme.spacing.sm,
    },
    lyricsDescription: {
      marginBottom: theme.spacing.lg,
    },
    songTitle: {
      alignItems: 'center',
      flexDirection: 'row',
      height: height * 0.1,
    },
    songContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
      height: height * 0.1,
    },
    songButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      color: theme.colors.text,
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.h2.fontWeight,
    },
    description: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.body.fontSize,
      marginTop: theme.spacing.xs,
    },
    albumContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    songBox: {
      borderRadius: theme.borderRadius.xl,
      height: height * 0.43,
      width: width * 0.85,
    },
    imageSong: {
      borderRadius: theme.borderRadius.xl,
      marginBottom: theme.spacing.md,
      height: '100%',
      width: '100%',
    },
    shuffleImage: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    button: {
      borderRadius: theme.borderRadius.sm,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.divider,
      padding: theme.spacing.md,
    },
    plusImage: {
      width: 30,
      height: 30,
    },
    sliderContainer: {
      marginTop: theme.spacing.md,
      width: width * 0.85,
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    timeText: {
      color: theme.colors.text,
      fontSize: theme.typography.caption.fontSize,
    },
    settingsWrapper: {
      marginLeft: theme.spacing.md,
    },
    settingsIcon: {
      color: theme.colors.text,
    },
  });
};

type SongStyles = ReturnType<typeof createStyles>;

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  return useThemedStyles((theme) => createStyles(theme, insets)) as SongStyles;
};
