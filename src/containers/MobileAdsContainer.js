import React, {useEffect, useState} from 'react';
import mobileAds, {
  MaxAdContentRating,
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  RewardedAdEventType,
} from 'react-native-google-mobile-ads';
import {Platform} from 'react-native';
const IS_IOS = Platform.OS === 'ios';

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : IS_IOS
  ? 'ca-app-pub-6892073554958359/5884414351'
  : 'ca-app-pub-6892073554958359/1676254185';

const rewarded = RewardedAd.createForAdRequest(adUnitId);

const MobileAdsContainer = ({children, isProUser}) => {
  const [isReady, setIsReady] = useState(false);
  const [isRewardEarned, setIsRewardEarned] = useState(false);

  useEffect(() => {
    mobileAds()
      .setRequestConfiguration({
        maxAdContentRating: MaxAdContentRating.PG,
        tagForChildDirectedTreatment: true,
        tagForUnderAgeOfConsent: true,
        testDeviceIdentifiers: ['EMULATOR'],
      })
      .then(() => {
        // Request config successfully set!
      });

    AppOpenAd.createForAdRequest(TestIds.APP_OPEN);

    requestAd();
  }, []);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setIsReady(true);
      },
    );
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        setIsRewardEarned(true);
        console.log('User earned reward of ', reward);
      },
    );

    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  const showAd = () => {
    if (isReady) {
      try {
        rewarded.show();
      } catch (error) {}
    }
  };

  const requestAd = () => {
    rewarded.load();
  };

  return (
    children &&
    children({
      showAd,
      requestAd,
      isRewardEarned,
      isReady,
    })
  );
};

export {MobileAdsContainer};
