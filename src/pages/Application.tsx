import { Octicons as Icon } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  createNavigationContainerRef,
  StaticParamList,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CreateScreen from './Create/CreateScreen';
import LibraryScreen from './Library/LibraryScreen';
import DiscoverScreen from './Discover/DiscoverScreen';
import WelcomeOnboardingScreen from './Onboarding/WelcomeOnboardingScreen';

import DeveloperButton from '@/components/Buttons/DeveloperButton';
import { useInitialization } from '@/hooks/useInitialization';
import CategoriesScreen from '@/pages/Categories/CategoriesScreen';
import DeveloperScreen from '@/pages/Developer/DeveloperScreen';
import CoverOnboardingScreen from '@/pages/Onboarding/CoverOnboardingScreen';
import Providers from '@/pages/Providers';
import SongScreen from '@/pages/Song/SongScreen';
import TopCraftScreen from '@/pages/TopCraft/TopCraftScreen';
import useTheme from '@/theme/useTheme';
import { MusicPlayerProvider } from '../contexts/MusicPlayerContext';
export const navigationRef = createNavigationContainerRef();

const useIsInitialized = () => {
  const { isInitialized } = useInitialization();
  return isInitialized;
};

const useIsUnInitialized = () => {
  const { isInitialized } = useInitialization();
  return !isInitialized;
};

const HomeIcon = ({ color }: { color: string }) => <Icon name="home" size={24} color={color} />;
const HomeIcon1 = ({ color }: { color: string }) => <Icon name="home" size={24} color={color} />;

type RootStackParamList = StaticParamList<typeof RootStack>;
type TabParamList = StaticParamList<typeof HomeTabs>;

const HomeTabs = createBottomTabNavigator({
  screenOptions: ({ route }) => ({
    headerShown: true,
    headerTitleAlign: 'left',

    tabBarActiveTintColor: '#2cbece',
    headerStyle: {
      backgroundColor: '#071e4a',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },
    tabBarIcon: ({ color, focused }) => {
      let iconName = '';
      const iconSize = 24;

      switch (route.name) {
        case 'Discover':
          iconName = 'search';
          break;
        case 'Library':
          iconName = 'book';
          break;
        case 'Create':
          iconName = 'plus-circle';
          break;
      }

      const iconColor = focused ? '#FFD700' : color;
      const size = iconSize;

      return <Icon name={iconName} size={size} color={iconColor} />;
    },

    tabBarStyle: {
      backgroundColor: 'rgba(31, 40, 125, 0.8)',
      borderTopWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
      position: 'absolute',
      borderRadius: 20,
      paddingTop: 10,
    },
  }),

  screens: {
    Discover: DiscoverScreen,
    Create: CreateScreen,
    Library: LibraryScreen,
  },
});

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  groups: {
    Onboarding: {
      if: useIsUnInitialized,
      screens: {
        Onboarding1: WelcomeOnboardingScreen,
        Onboarding2: CoverOnboardingScreen,
      },
    },
    Home: {
      if: useIsInitialized,
      screens: {
        HomeScreen: HomeTabs as typeof HomeTabs,
        CategoriesScreen,
        SongScreen,
        TopCraftScreen,
      },
    },
    Modal: {
      if: useIsInitialized,
      screenOptions: {
        presentation: 'modal',
      },
      screens: {
        DeveloperScreen,
      },
    },
  },
});

const SafeAreaView = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: theme.colors.background,
      }}>
      {children}
    </View>
  );
};

export default function Application() {
  const Navigation = createStaticNavigation(RootStack);

  const navigate = (...args: Parameters<typeof navigationRef.navigate>) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(...args);
    }
  };

  return (
    <Providers>
      <StatusBar style="auto" />
      <SafeAreaView>
        <MusicPlayerProvider>
          <Navigation
            ref={navigationRef as React.Ref<NavigationContainerRef<RootStackParamList>>}
          />
          <DeveloperButton navigate={navigate} />
        </MusicPlayerProvider>
      </SafeAreaView>
    </Providers>
  );
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, TabParamList {}
  }
}
