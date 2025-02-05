import { StyleSheet } from 'react-native';

export default (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.screenBackground,
      paddingTop: theme.hasNotch ? 55 : 20,
      padding: 20,
    },
    title: {
      ...{ ...theme.title },
      fontSize: 28,
      color: theme.colors.title,
      fontWeight: 'bold',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    contentWrapper: {
      backgroundColor: theme.colors.settingsItemBG,
      borderRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'column',
    },
    settingsTitle: {
      ...{ ...theme.title },
      fontWeight: '600',
      color: theme.colors.title,
      fontFamily: theme.font3,
    },
    settingsItem: {
      height: 50,
      marginVertical: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    settingsGroupTitle: {
      color: theme.colors.notch,
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 20,
      marginBottom: 6,
    },
    settingsItemWrapper: {
      flexDirection: 'row',
    },
    settingsIcon: {
      color: theme.colors.white,
      marginRight: 20,
    },
    iconWrapper: {
      height: 30,
      width: 30,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8f8e94',
    },
    settingsRightIcon: {
      color: theme.colors.iconDark,
      fontSize: 20,
    },
    titleIcon: {
      color: theme.colors.iconDark,
    },
    hrWrapper: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      width: '100%',
      position: 'relative',
    },
    hr: {
      borderBottomColor: theme.colors.notch,
      borderBottomWidth: 0.3,
      opacity: 0.2,
      width: '95%',
      position: 'absolute',
      right: -20,
      marginTop: -3,
    },
    settingsGroupContainer: {
      marginBottom: 20,
    },
    backButton: {
      paddingHorizontal: 10,
    },
  });
