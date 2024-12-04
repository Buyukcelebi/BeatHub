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
import WelcomeOnboardingScreen from './Onboarding/WelcomeOnboardingScreen';

import DeveloperButton from '@/components/Buttons/DeveloperButton';
import { useInitialization } from '@/hooks/useInitialization';
import CategoriesScreen from '@/pages/Categories/CategoriesScreen';
import DeveloperScreen from '@/pages/Developer/DeveloperScreen';
import DiscoverScreen from '@/pages/Discover/DiscoverScreen';
import CoverOnboardingScreen from '@/pages/Onboarding/CoverOnboardingScreen';
import Providers from '@/pages/Providers';
import SongScreen from '@/pages/Song/SongScreen';
import TopCraftScreen from '@/pages/TopCraft/TopCraftScreen';
import useTheme from '@/theme/useTheme';
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

type RootStackParamList = StaticParamList<typeof RootStack>;
type TabParamList = StaticParamList<typeof HomeTabs>;

const HomeTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarIcon: HomeIcon,
    tabBarStyle: { position: 'absolute' },
  },
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
        <Navigation ref={navigationRef as React.Ref<NavigationContainerRef<RootStackParamList>>} />
        <DeveloperButton navigate={navigate} />
      </SafeAreaView>
    </Providers>
  );
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, TabParamList {}
  }
}
