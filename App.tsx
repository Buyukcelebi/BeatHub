import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './src/pages/onboarding';
import Onboarding1 from './src/pages/onboarding1';
import Song from './src/pages/song';
import SliderEntry from './src/pages/Discover';
import Wallet from './src/pages/NavigatinBar';
import NavigatinBar from './src/pages/NavigatinBar';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NavigatinBar"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="NavigatinBar" component={NavigatinBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
