import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import get from 'lodash/get';
import Purchases from 'react-native-purchases';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants/StorageKeys';

const InAppPurchaseContainer = ({ children, setIsProUser }) => {
  const [offers, setOffers] = useState();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const isIOS = Platform.OS === 'ios';
  const navigation = useNavigation();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setIsProUser(isSubscribed);
  }, [isSubscribed, setIsProUser]);

  const init = useCallback(async () => {
    try {
      Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
      await Purchases.configure({
        apiKey: isIOS ? 'appl_WVORpqrcAteJdICeXadGSydlyKr' : 'appl_WVORpqrcAteJdICeXadGSydlyKr',
      });
      const offerings = await Purchases.getOfferings();
      console.log('revenut cat', offerings);
      if (offerings.current !== null) {
        setOffers(offerings);
      }
    } catch (e) {
      console.log('ERROR PRODUCT');
      console.log(e);
    }
  }, [isIOS]);

  const restore = async () => {
    setIsProcessing(true);

    try {
      const restore = await Purchases.restorePurchases();

      console.log('restore', restore.activeSubscriptions.length > 0);

      if (restore.activeSubscriptions.length > 0) {
        setIsSubscribed(true);
      }

      Alert.alert('Successful');
    } catch (err) {
      console.warn(err);
      // Alert.alert('Ups! Something went wrong.');
    }

    setIsProcessing(false);
  };

  const requestSubscription = async (item) => {
    setIsProcessing(true);
    try {
      const purchaseMade = await Purchases.purchasePackage(item);
      const appUserID = await Purchases.getAppUserID();
      const userId = await AsyncStorage.getItem(STORAGE_KEYS.USER_ID);

      setIsProcessing(false);
      if (
        typeof purchaseMade.purchaserInfo.entitlements.active.my_entitlement_identifier !==
        'undefined'
      ) {
        setIsSubscribed(true);
      }
    } catch (e) {
      console.log('request subs', e);
      setIsProcessing(false);
      if (!e.userCancelled) {
        // Alert.alert('Something went wrong!');
      }
    }
  };

  if (Purchases) {
    Purchases.addCustomerInfoUpdateListener((info) => {
      if (get(info, 'activeSubscriptions', []).length > 0) {
        setIsSubscribed(true);
        setIsProcessing(false);
        !isSubscribed && navigation.navigate('HomeScreen');
      }
    });
  }

  return (
    children &&
    children({
      requestSubscription,
      isLoading: false,
      isProcessing,
      restore,
      currentOffer: get(offers, 'current'),
      products: get(offers, 'current.availablePackages', []),
    })
  );
};

export { InAppPurchaseContainer };
