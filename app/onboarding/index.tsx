import { useRouter, useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";

import useThemedStyles from "@/theme/useThemedStyles";
import WelcomeOnboardingItem from "./WelcomeOnboardingItem";
import CoverOnboardingItem from "./CoverOnboardingItem";

import styles from "./OnboardingStyles";

const Stack = createNativeStackNavigator();

const onboardingPages = [
  {
    title: "Welcome to AI Song",
    subTitle: "Just write a few words and we will create a song for you",
    description: "Prompt: ",
    footerDescription:
      "By continuing, you accept our Terms of Service and our Privacy Policy.",
    buttonText: "GET STARTED",
    routeTo: "Onboarding2",
    screenName: "Onboarding1",
    isMultiVideo: true,
    isVideo: true,
    onButtonPress: () => {},
    component: WelcomeOnboardingItem,
  },
  {
    title: "AI Cover Art",
    subTitle: "Upload your voice and let our AI sing a song for you",
    description: "",
    footerDescription: "",
    buttonText: "UPLOAD VOICE",
    routeTo: "Onboarding3",
    screenName: "Onboarding2",
    isMultiVideo: false,
    isVideo: false,
    onButtonPress: () => {},
    component: CoverOnboardingItem,
  },
];

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
  component: React.ComponentType<any>;
}

const OnboardingView: React.FC<OnboardingViewProps> = ({
  component: Component,
  ...props
}) => {
  return <Component {...props} />;
};

export default function OnboardingLayout() {
  const router = useRouter();
  const navigation = useNavigation();
  const style = useThemedStyles(styles);
  const { t, i18n } = useTranslation();

  const handleComplete = async () => {
    try {
      await AsyncStorage.setItem("hasSeenOnboarding", "true");
      router.push("/(tabs)");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack.Navigator initialRouteName="Onboarding">
      {onboardingPages.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.screenName}
          options={{ headerShown: false }}
        >
          {() => (
            <OnboardingView
              routeTo={item.routeTo}
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
              buttonText={item.buttonText}
              footerDescription={item.footerDescription}
              navigation={navigation}
              style={style}
              // completeOnboarding={completeOnboarding}
              onButtonPress={item.onButtonPress}
              t={t}
              component={item.component}
              // isAndroid={isAndroid}
              // isLoading={isLoading}
            />
          )}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
}
