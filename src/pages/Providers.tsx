import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { InitializationProvider } from '@/contexts/InitializationContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { SubscriptionProvider } from '@/contexts/SubscriptionContext';
import i18n from '@/lang';
import ThemeProvider from '@/theme/ThemeProvider';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <InitializationProvider>
      <LanguageProvider>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider>{children}</ThemeProvider>
        </I18nextProvider>
      </LanguageProvider>
    </InitializationProvider>
  );
}
