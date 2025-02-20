import { StyleSheet } from 'react-native';

const createButtonStyles = (theme) => {
  const { colors } = theme;

  return StyleSheet.create({
    buttonWrapper: {
      width: '100%',
      height: 60,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
      flexDirection: 'row',
    },
    iconWrapper: {
      marginRight: 7,
      marginTop: -2,
    },
    main: {
      borderRadius: 15,
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      padding: 4,
    },
    secondary: {
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 16,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
    },
    loading: {
      backgroundColor: 'transparent',
      width: '100%',
    },
    textMain: {
      color: '#fff',
      fontWeight: 'bold',
    },
    textSecondary: {
      color: '#000',
      fontWeight: 'bold',
    },
    disabled: {
      backgroundColor: colors.notch,
    },
    gradientBackground: {
      backgroundColor: colors.purple,
      borderRadius: 50,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 55,
    },
    subscriptionButton: {
      maxWidth: theme.windowWidth - 40,
      width: '100%',
      backgroundColor: colors.screenBackground,
      borderWidth: 1,
      borderColor: colors.iconDark,
      borderRadius: 20,
      marginHorizontal: 20,
      paddingRight: 20,
      height: 60,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    subsButtonWrapper: {
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
    },
    subscriptionButtonText: {
      marginLeft: 10,
      color: colors.white,
      textAlign: 'left',
    },
    subscriptionButtonSubText: {
      fontSize: 14,
      fontWeight: 'normal',
      color: colors.white,
      width: 180,
      marginTop: -20,
    },
    priceText: {
      color: colors.white,
      fontSize: 14,
      marginTop: 5,
      width: 110,
    },
    discountItem: {
      backgroundColor: colors.purple,
      height: 25,
      width: 90,
      position: 'absolute',
      right: 0,
      top: -12,
      borderRadius: 13,
      justifyContent: 'center',
    },
    discountText: {
      color: colors.white,
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    iconDot: {
      marginLeft: 10,
      backgroundColor: colors.white,
      width: 15,
      height: 15,
      borderRadius: 10,
      marginRight: 10,
    },
    iconDotWrapper: {
      borderWidth: 2,
      borderColor: colors.white,
      borderRadius: 20,
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginLeft: 20,
    },
    selectedWrapper: {
      borderColor: colors.white,
      borderWidth: 3,
      backgroundColor: colors.ctaWrapper,
    },
    rightIconWrapper: {
      marginLeft: 15,
    },
    priceWrapper: {
      flex: 1,
      alignItems: 'flex-end',
      flexDirection: 'column',
    },
    priceDesc: {
      fontSize: 14,
      color: colors.white,
    },
    subsTextWrapper: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      marginLeft: -8,
    },
  });
};

export default createButtonStyles;
