import { useEffect, useState } from 'react';
import Purchases, { PurchasesPackage } from 'react-native-purchases';

import { SubscriptionStatus } from '@/types/subscription';

export const useRevenueCat = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<PurchasesPackage[]>([]);
  const [currentSubscription, setCurrentSubscription] = useState<SubscriptionStatus>({
    isActive: false,
    expirationDate: null,
    productId: null,
  });

  useEffect(() => {
    initializePurchases();
  }, []);

  const initializePurchases = async () => {
    try {
      // await Purchases.configure({ apiKey: 'YOUR_REVENUECAT_API_KEY' });
      // await loadProducts();
      // await checkSubscriptionStatus();
    } catch (error) {
      console.error('RevenueCat initialization error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadProducts = async () => {
    try {
      const offerings = await Purchases.getOfferings();
      if (offerings.current) {
        setProducts(offerings.current.availablePackages);
      }
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const checkSubscriptionStatus = async () => {
    try {
      const customerInfo = await Purchases.getCustomerInfo();
      const hasActiveSubscription = customerInfo.entitlements.active['premium'];

      setCurrentSubscription({
        isActive: !!hasActiveSubscription,
        expirationDate: hasActiveSubscription?.expirationDate,
        productId: hasActiveSubscription?.productIdentifier,
      });
    } catch (error) {
      console.error('Error checking subscription:', error);
    }
  };

  const purchasePackage = async (packageToPurchase: PurchasesPackage) => {
    try {
      const { customerInfo } = await Purchases.purchasePackage(packageToPurchase);
      await checkSubscriptionStatus();
      return customerInfo;
    } catch (error) {
      console.error('Purchase error:', error);
      throw error;
    }
  };

  const restorePurchases = async () => {
    try {
      const customerInfo = await Purchases.restorePurchases();
      await checkSubscriptionStatus();
      return customerInfo;
    } catch (error) {
      console.error('Restore error:', error);
      throw error;
    }
  };

  return {
    isLoading,
    products,
    currentSubscription,
    isProUser: currentSubscription.isActive,
    purchasePackage,
    restorePurchases,
  };
};
