import * as Animatable from "react-native-animatable";
import { View, Text, StatusBar } from "react-native";

import SongCarousel from "@/components/SongCarousel";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

interface OnboardingViewProps {
  routeTo?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  footerDescription?: string;
  buttonText: string;
  navigation: any;
  style: any;
  t: (key: string) => string;
  isAndroid?: boolean;
  isLastAction?: boolean;
  completeOnboarding?: () => void;
  onButtonPress?: () => void;
  isLoading?: boolean;
}

export default function WelcomeOnboardingItem({
  routeTo,
  title,
  subTitle,
  description,
  footerDescription,
  buttonText,
  navigation,
  style,
  t,
  isAndroid,
  onButtonPress,
  isLoading,
}: OnboardingViewProps) {
  return (
    <Animatable.View
      animation="fadeIn"
      delay={200}
      duration={isAndroid ? 500 : 3000}
      style={style.pageContainer}
    >
      <StatusBar hidden />

      {title && <Text style={style.entryTitle}>{t(title)}</Text>}

      {subTitle && <Text style={style.subTitle}>{t(subTitle)}</Text>}

      {description && (
        <Text style={style.entryDescription}>
          {t(description)}
          <Text style={style.promptText}>
            A jazz tune about the fleeting beauty of a summer romance
          </Text>
        </Text>
      )}

      <View style={style.songCarouselWrapper}>
        <SongCarousel />
      </View>
      <Animatable.View
        animation="fadeIn"
        duration={1500}
        delay={2000}
        style={style.buttonWrapper}
      >
        <PrimaryButton
          buttonText={t(buttonText)}
          onPress={() => {
            routeTo && navigation.navigate(routeTo);
            console.log("onButtonPress", onButtonPress);
            onButtonPress && onButtonPress();
          }}
          isLoading={isLoading}
        />
        <Text style={style.buttonFooter}>{t(footerDescription || "")}</Text>
      </Animatable.View>
    </Animatable.View>
  );
}
