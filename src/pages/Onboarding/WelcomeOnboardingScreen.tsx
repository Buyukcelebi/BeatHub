import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { View, Text, StatusBar, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { useStyles } from './OnboardingStyles';

import PrimaryButton from '@/components/Buttons/PrimaryButton';
import SongCarousel from '@/components/SongCarousel';

export default function WelcomeOnboardingScreen() {
  const isAndroid = Platform.OS === 'android';
  const navigation = useNavigation();
  const { t } = useTranslation();
  const styles = useStyles();

  const onButtonPress = () => {
    navigation.navigate('Onboarding2');
  };

  return (
    <Animatable.View delay={200} duration={isAndroid ? 500 : 3000} style={styles.pageContainer}>
      <StatusBar hidden />
      <View style={{ flex: 1, position: 'relative' }}>
        <Text style={styles.entryTitle}>{t('Welcome to AI Song')}</Text>
        <Text style={styles.subTitle}>
          {t('Just write a few words and we will create a song for you')}
        </Text>
        <Text style={styles.entryDescription}>
          {t('Prompt : ')}
          <Text style={styles.promptText}>
            {t('A jazz tune about the fleeting beauty of a summer romance')}
          </Text>
        </Text>

        <View style={styles.songCarouselWrapper}>
          <SongCarousel />
        </View>
      </View>
      <Animatable.View animation="fadeIn" duration={1500} delay={2000} style={styles.buttonWrapper}>
        <PrimaryButton buttonText={t('GET STARTED')} onPress={onButtonPress} />
        <Text style={styles.buttonFooter}>
          {t('By continuing, you accept our Terms of Service and our Privacy Policy.')}
        </Text>
      </Animatable.View>
    </Animatable.View>
  );
}
