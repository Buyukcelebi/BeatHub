import { Feather as Icon } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  createNavigationContainerRef,
  StaticParamList,
  NavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from './ApplicationStyles';
import CreateScreen from './Create/CreateScreen';
import DiscoverScreen from './Discover/DiscoverScreen';
import LibraryScreen from './Library/LibraryScreen';
import WelcomeOnboardingScreen from './Onboarding/WelcomeOnboardingScreen';
import { MusicPlayerProvider } from '../contexts/MusicPlayerContext';

import DeveloperButton from '@/components/Buttons/DeveloperButton';
import { useInitialization } from '@/hooks/useInitialization';
import CategoriesScreen from '@/pages/Categories/CategoriesScreen';
import DeveloperScreen from '@/pages/Developer/DeveloperScreen';
import CoverOnboardingScreen from '@/pages/Onboarding/CoverOnboardingScreen';
import Providers from '@/pages/Providers';
import SongScreenMiniPlayer from '@/pages/Song/SongScreenMiniPlayer';
import SongScreen from '@/pages/Song1/SongScreen';
import TopCraftScreen from '@/pages/TopCraft/TopCraftScreen';
import useTheme from '@/theme/useTheme';
import SettingsScreen from './Settings/SettingsScreen';
import * as Animatable from 'react-native-animatable';

import SubscriptionScreen from './Subscription/SubscriptionScreen';
import CoverScreen from './Cover/CoverScreen';
import PickMusicModal from './PickMusic/PickMusicModal';
import SubscriptionButton from '@/components/Buttons/SubscriptionButton';
export const navigationRef = createNavigationContainerRef();

const useIsInitialized = () => {
  const { isInitialized } = useInitialization();
  return isInitialized;
};

const useIsUnInitialized = () => {
  const { isInitialized } = useInitialization();
  return !isInitialized;
};

type RootStackParamList = StaticParamList<typeof RootStack>;
type TabParamList = StaticParamList<typeof HomeTabs>;

function TabNavigator() {
  return createBottomTabNavigator({
    screenOptions: ({ route }) => {
      const theme = useTheme();
      const styles = useStyles();
      const navigation = useNavigation();
      return {
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
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
            case 'Cover':
              iconName = 'mic';
              break;
          }

          const iconColor = focused ? theme.colors.primary : color;
          return <Icon name={iconName} size={iconSize} color={iconColor} />;
        },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontSize: theme.typography.h3.fontSize,
          fontFamily: theme.typography.h3.fontFamily,
          fontWeight: theme.typography.h1.fontWeight,
          color: theme.colors.primary,
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
          elevation: 0,
          shadowOpacity: 0,
        },

        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Animatable.View
              animation="pulse"
              iterationCount="infinite"
              style={styles.proButtonWrapper}>
              <TouchableOpacity
                style={styles.proButton}
                onPress={() => navigation?.navigate('SubscriptionScreen')}>
                <Text style={styles.proText}>
                  <Icon name="star" size={15} style={styles.proIcon} /> {'PRO'}
                </Text>
              </TouchableOpacity>
            </Animatable.View>

            <TouchableOpacity
              style={styles.settingsWrapper}
              onPress={() => navigation?.navigate('SettingsScreen')}>
              <Icon name="settings" size={18} style={styles.settingsIcon} />
            </TouchableOpacity>
          </View>
        ),
      };
    },
    screens: {
      Discover: {
        screen: DiscoverScreen,
        options: {
          headerShown: true,
        },
      },
      Create: {
        screen: CreateScreen,
        options: {
          headerShown: true,
        },
      },
      Cover: {
        screen: CoverScreen,
        options: {
          headerShown: true,
        },
      },
      Library: {
        screen: LibraryScreen,
        options: {
          headerShown: true,
        },
      },
    },
  });
}

const HomeTabs = TabNavigator();

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
        SettingsScreen,
        SongScreen,
        SongScreenMiniPlayer,
        CategoriesScreen,
        TopCraftScreen,
        SubscriptionScreen,
      },
    },
    Modal: {
      if: useIsInitialized,
      screenOptions: {
        presentation: 'modal',
      },
      screens: {
        PickMusicModal,

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
