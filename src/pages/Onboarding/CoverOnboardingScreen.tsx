import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StatusBar, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { useStyles } from './OnboardingStyles';

import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { useInitialization } from '@/hooks/useInitialization';

export default function CoverOnboardingScreen() {
  const { setIsInitialized, isInitialized } = useInitialization();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const styles = useStyles();
  const isAndroid = Platform.OS === 'android';

  const onButtonPress = () => {
    setIsInitialized(null);
  };

  useEffect(() => {
    console.log('isInitialized', isInitialized);
    if (isInitialized) {
      navigation.navigate('HomeScreen');
    }
  }, [isInitialized]);

  return (
    <Animatable.View duration={isAndroid ? 500 : 3000} style={styles.pageContainer}>
      <StatusBar hidden />

      <View style={styles.lottieWrapper}>
        <View style={styles.lottieBackground} />
        <LottieView source={require('./mic_animation.json')} style={styles.lottie} autoPlay loop />
      </View>

      <Text style={styles.entryTitle}>{t('AI Cover Art')}</Text>
      <Text style={styles.subTitle}>
        {t('Upload your voice and let our AI sing a song for you')}
      </Text>

      <Animatable.View duration={isAndroid ? 500 : 3000} style={styles.buttonWrapper}>
        <PrimaryButton buttonText={t('UPLOAD VOICE')} onPress={onButtonPress} />
      </Animatable.View>
    </Animatable.View>
  );
}
