import { StyleSheet } from 'react-native';

export default (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: theme.window.hasNotch ? 55 : 20,
      padding: theme.spacing.md,
    },
    title: {
      ...theme.typography.h1,
      color: theme.colors.text,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    contentWrapper: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.md,
      paddingHorizontal: theme.spacing.md,
      flexDirection: 'column',
      ...theme.shadows.medium,
    },
    settingsTitle: {
      ...theme.typography.h2,
      color: theme.colors.text,
    },
    settingsItem: {
      height: 50,
      marginVertical: theme.spacing.xs,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    settingsGroupTitle: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      marginLeft: theme.spacing.md,
      marginBottom: theme.spacing.xs,
    },
    settingsItemWrapper: {
      flexDirection: 'row',
    },
    settingsIcon: {
      color: theme.colors.black,
      marginRight: theme.spacing.md,
      alignSelf: 'center',
    },
    iconWrapper: {
      height: 30,
      width: 30,
      borderRadius: theme.borderRadius.sm,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.gray,
    },
    settingsRightIcon: {
      color: theme.colors.textTertiary,
      fontSize: 20,
    },
    titleIcon: {
      color: theme.colors.textTertiary,
      marginRight: theme.spacing.md,
      marginLeft: theme.spacing.md,
    },
    hrWrapper: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      width: '100%',
      position: 'relative',
    },
    hr: {
      borderBottomColor: theme.colors.divider,
      borderBottomWidth: 0.3,
      opacity: 0.2,
      width: '95%',
      position: 'absolute',
      right: -theme.spacing.md,
      marginTop: -3,
    },
    settingsGroupContainer: {
      marginBottom: theme.spacing.lg,
    },
    backButton: {
      paddingHorizontal: theme.spacing.sm,
    },
  });
