import { useContext } from 'react';

import { InitializationContext } from '@/contexts/InitializationContext';

export function useInitialization() {
  const context = useContext(InitializationContext);
  if (context === undefined) {
    throw new Error('useInitialization must be used within an InitializationProvider');
  }
  return context;
}
