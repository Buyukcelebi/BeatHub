import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

type RootStackParamList = {
  ProcessScreen: undefined;
  UploadScreen: undefined;
  PromptScreen: undefined;
  DetailsScreen: undefined;
  HomeScreen: undefined;
  MyLibraryScreen: undefined;
  SubscriptionScreen: undefined;
  SettingsScreen: undefined;
  OnboardingScreen: undefined;
};

const SCREEN_BUTTONS = [
  { title: 'Process Screen', route: 'ProcessScreen' },
  { title: 'Upload Screen', route: 'UploadScreen' },
  { title: 'Prompt Screen', route: 'PromptScreen' },
  { title: 'Details Screen', route: 'DetailsScreen' },
  { title: 'My Library Screen', route: 'MyLibraryScreen' },
  { title: 'Subscription Screen', route: 'SubscriptionScreen' },
  { title: 'Settings Screen', route: 'SettingsScreen' },
  { title: 'Onboarding Screen', route: 'OnboardingScreen' },
];

const DeveloperScreen = ({
  setIsInitialized,
}: {
  setIsInitialized: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleReset = async () => {
    try {
      await AsyncStorage.clear();
      setIsInitialized(false);
      navigation.navigate('OnboardingScreen');
    } catch (error) {
      console.error('Reset failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      {SCREEN_BUTTONS.map(({ title, route }) => (
        <Button
          key={route}
          title={title}
          onPress={() => navigation.navigate(route as keyof RootStackParamList)}
        />
      ))}

      <Button title="Reset" onPress={handleReset} />
      <Button title="Close" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default DeveloperScreen;
