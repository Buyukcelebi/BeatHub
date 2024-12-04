import { createContext, useContext } from 'react';

import { useRevenueCat } from '@/hooks/useRevenueCat';

const SubscriptionContext = createContext<ReturnType<typeof useRevenueCat>>(
  {} as ReturnType<typeof useRevenueCat>
);

export const SubscriptionProvider = ({ children }: { children: React.ReactNode }) => {
  const revenueCat = useRevenueCat();

  return <SubscriptionContext.Provider value={revenueCat}>{children}</SubscriptionContext.Provider>;
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within SubscriptionProvider');
  }
  return context;
};
