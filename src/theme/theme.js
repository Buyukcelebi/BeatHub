import {Dimensions} from 'react-native';
import {hasNotch} from 'react-native-device-info';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = {
  windowWidth,
  windowHeight,
  hasNotch: hasNotch(),
};
console.log('windowWidth', windowHeight);
// LuckiestGuy-Regular
const theme = {
  font1: 'MochiyPopOne-Regular',
  font2: 'LuckiestGuy-Regular',
  font3: 'McLaren-Regular',
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 8,
  },
  darkShadow: {
    shadowColor: '#0a0a0a',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 3,

    elevation: 8,
  },
  blueShadow: {
    shadowColor: '#0037CF',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 12,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'MochiyPopOne-Regular',
    fontSize: 18,
    color: '#0a0a0a',
  },
  subTitle: {
    fontFamily: 'McLaren-Regular',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0a0a0a',
  },
  softBlueShadow: {
    shadowColor: '#0037CF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 12,
  },
};
// #903180
// #fddf5b
export const light = {
  colors: {
    background: '#62CDFF',
    yellow: '#fddf5b',
    primaryButton: '#1b1b1b',
    wpGreen: '#00E676',
    screenBackground: '#0a0a0a',
    whiteScreenBackground: '#fff',
    screenBackgroundSecondary: '#1b1b1b',
    cardBackground: '#fff',
    inputBackground: '#e8e8e8',
    notch: '#c2c8cc',
    secondaryButton: '#fff',
    orange: '#f55d39',
    red: '#f50d3d',
    black: '#0a0a0a',
    iconDark: '#444444',
    purple: '#4a4bff',
    green: '#00E676',
    gray: '#fdfdfd',
    blue: '#62CDFF',
    border: '#e8e8e8',
    placeholder: '#a9a9a9',
    placeholderInput: '#a9a9a9',
    borderBottomInput: '#e8e8e8',
    textButton: '#0a0a0a',
    title: '#fff',
    titleSecondary: '#000',
    white: '#fff',
    tabPassive: '#ecf1ff',
    tabBarBadgeColor: '#f55d39',
    tabBarBG: '#fff',
    activeTabIcon: '#62CDFF',
    passiveTabIcon: '#b2b2b2',
    imageBackground: '#ecf1ff',
    cardItemTitle: '#000',
    locationColor: '#62CDFF',
    cardShadow: '#e8e8e8',
    blueShadowColor: '#0037CF',
    blueShadowColorWhite: '#0037CF',
    emojiBackground: '#ecf1ff',
    passiveTabBarButton: '#d9dce5',
    inputCardBG: '#d9dce5',
    categoryCardBG: '#131c2b',
    avatarBG: '#e8e8e8',
    blackWhite: '#0a0a0a',
    whiteBlack: '#fff',
    exploreButton: '#f9ab95',
  },
  softShadow: {
    shadowColor: '#a9a9a9',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 8,
  },
  ...window,
  ...theme,
};

export const dark = {
  colors: {
    background: '#62CDFF',
    primaryButton: '#00E676',
    screenBackground: '#fdfdfd',
    whiteScreenBackground: '#fff',
    screenBackgroundSecondary: '#ffff',
    cardBackground: '#fff',
    inputBackground: '#e8e8e8',
    notch: '#c2c8cc',
    secondaryButton: '#fff',
    orange: '#f55d39',
    red: '#f50d3d',
    black: '#0a0a0a',
    iconDark: '#444444',
    purple: '#4a4bff',
    green: '#12F95E',
    gray: '#fdfdfd',
    yellow: '#fddf5b',
    blue: '#62CDFF',
    border: '#e8e8e8',
    placeholder: '#a9a9a9',
    placeholderInput: '#a9a9a9',
    borderBottomInput: '#e8e8e8',
    textButton: '#0a0a0a',
    title: '#0a0a0a',
    titleSecondary: '#000',
    white: '#fff',
    tabPassive: '#ecf1ff',
    tabBarBadgeColor: '#f55d39',
    tabBarBG: '#fff',
    activeTabIcon: '#62CDFF',
    passiveTabIcon: '#b2b2b2',
    imageBackground: '#ecf1ff',
    cardItemTitle: '#000',
    locationColor: '#62CDFF',
    cardShadow: '#e8e8e8',
    blueShadowColor: '#0037CF',
    blueShadowColorWhite: '#0037CF',
    emojiBackground: '#ecf1ff',
    passiveTabBarButton: '#d9dce5',
    inputCardBG: '#d9dce5',
    categoryCardBG: '#131c2b',
    avatarBG: '#e8e8e8',
    blackWhite: '#0a0a0a',
    whiteBlack: '#fff',
    exploreButton: '#f9ab95',
  },
  softShadow: {
    shadowColor: '#a9a9a9',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 8,
  },
  ...window,
  ...theme,
  // colors: {
  //   background: '#62CDFF',
  //   primaryButton: '#a9a9a9',
  //   screenBackground: '#010813',
  //   whiteScreenBackground: '#010813',
  //   screenBackgroundSecondary: '#243346',
  //   cardBackground: '#131c2b',
  //   inputBackground: '#131c2b',
  //   notch: '#44505f',
  //   secondaryButton: '#ecf1ff',
  //   textButton: '#a9a9a9',
  //   orange: '#f9ab95',
  //   red: '#f50d3d',
  //   black: '#0a0a0a',
  //   blue: '#62CDFF',
  //   purple: '#5e12f9',
  //   green: '#12F95E',
  //   gray: '#fdfdfd',
  //   border: '#e8e8e8',
  //   placeholder: '#131c2b',
  //   placeholderInput: '#ecf1ff',
  //   borderBottomInput: '#243346',
  //   title: '#fff',
  //   titleSecondary: '#fff',
  //   white: '#fff',
  //   tabBarBadgeColor: '#12F95E',
  //   tabBarBG: '#131c2b',
  //   activeTabIcon: '#84e9ff',
  //   passiveTabIcon: '#d0eeec',
  //   imageBackground: '#44505f',
  //   cardItemTitle: '#fff',
  //   locationColor: '#84e9ff',
  //   cardShadow: '#010813',
  //   iconDark: '#fff',
  //   inputCardBG: '#131c2b',
  //   categoryCardBG: '#131c2b',
  //   blueShadowColor: '#010813',
  //   blueShadowColorWhite: '#fff',
  //   emojiBackground: '#84e9ff',
  //   passiveTabBarButton: '#84e9ff',
  //   avatarBG: '#84e9ff',
  //   blackWhite: '#fff',
  //   whiteBlack: '#010813',
  //   exploreButton: '#62CDFF',
  // },
  // softShadow: {
  //   shadowColor: '#a9a9a9',
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 6,

  //   elevation: 8,
  // },
  // ...window,
  // ...theme,
};
//#f88c21

// background: #010813

// button blue: #1770e3

// cardBG: #131c2b

// icon Blue: #84e9ff

// dark green: #d0eeec

// orange: #f9ab95

// green: #73cfc6

// gray: #bdc5ca

// #956659

// #98595d
