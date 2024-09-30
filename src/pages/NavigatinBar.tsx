import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from './Discover';
import Create from './Create';
import Library from './Library';
import Onboarding from './onboarding';
import Song from './song';
import Onboarding1 from './onboarding1';

function NavigatinBar() {
  const Tab = createBottomTabNavigator();

  const TabIcon = (source, isActive) => {
    return (
      <Image
        source={source}
        style={{
          width: 24,
          height: 24,
          tintColor: isActive ? '#FFF' : '#B0C4DE',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 12,
          },

          headerStyle: {
            backgroundColor: '#071e4a',
            shadowColor: 0,
          },
          headerTitleStyle: {
            fontSize: 25, // Başlık yazı boyutu
            fontWeight: 'bold', // Başlık yazı kalınlığı
          },
          headerTintColor: '#FFF',
          headerTitleAlign: 'left',
          tabBarStyle: {
            position: 'absolute',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(48, 86, 151, 0.8)',
            height: 75,
            paddingBottom: 17,
            borderTopWidth: 0,
            elevation: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: '#B0C4DE',
        }}>
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarIcon: ({color}) =>
              TabIcon(require('../images/discovery.png'), color === '#FFF'),
          }}
        />
        <Tab.Screen
          name="Create"
          component={Create}
          options={{
            tabBarIcon: ({color}) =>
              TabIcon(require('../images/music.png'), color === '#FFF'),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarIcon: ({color}) =>
              TabIcon(require('../images/musicLibrary.png'), color === '#FFF'),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default NavigatinBar;
