import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { type Href, Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import STORAGE_KEYS from "@/constants/StorageKeys";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function MainScreen() {
  const [isInitialized, setIsInitialized] = useState(false);

  const readStorage = async () => {
    try {
      const initKey = await AsyncStorage.getItem(STORAGE_KEYS.ONBOARDING);
      console.log("initKey", initKey);
      const _initKey = initKey ? JSON.parse(initKey) : false;
      console.log("_initKey", _initKey);
      setIsInitialized(_initKey);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    readStorage();
  }, []);

  console.log("isInitialized", isInitialized);

  const href = (isInitialized ? "(tabs)" : "/onboarding") as Href;

  console.log("href", href);

  return <Redirect href={isInitialized ? "/(tabs)" : "/onboarding"} />;
}
