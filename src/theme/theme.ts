import { Dimensions } from 'react-native';
import { hasNotch } from 'react-native-device-info';

import { Theme } from './types';

const { width, height } = Dimensions.get('window');

const fonts = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
};

// Base Theme
const baseTheme = {
  typography: {
    h1: {
      fontSize: 32,
      lineHeight: 40,
      fontFamily: fonts.bold,
      fontWeight: '700' as const,
    },
    h2: {
      fontSize: 24,
      lineHeight: 32,
      fontFamily: fonts.bold,
      fontWeight: '600' as const,
    },
    h3: {
      fontSize: 20,
      lineHeight: 28,
      fontFamily: fonts.bold,
      fontWeight: '600' as const,
    },
    h4: {
      fontSize: 18,
      lineHeight: 24,
      fontFamily: fonts.regular,
      fontWeight: '500' as const,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fonts.regular,
      fontWeight: '400' as const,
    },
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fonts.medium,
      fontWeight: '500' as const,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  window: {
    width,
    height,
    hasNotch: hasNotch(),
  },
};

// Light Theme
export const lightTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: '#2B7CFF',
    secondary: '#34C759',
    background: '#F5F6FA',
    surface: '#FFFFFF',
    surfaceVariant: '#F1F5F9',
    card: '#FFFFFF',
    text: '#000000',
    textSecondary: '#8E8E93',
    textTertiary: '#C5C6C7',
    error: '#FF3B30',
    success: '#34C759',
    warning: '#FFCC00',
    info: '#2B7CFF',
    border: '#E5E5EA',
    divider: '#E5E5EA',
    disabled: '#C7C7CC',
    overlay: 'rgba(0, 0, 0, 0.3)',
    highlight: '#2B7CFF',
    accentPrimary: '#2B7CFF',
    accentSecondary: '#34C759',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#8E8E93',
  },
  shadows: {
    small: {
      shadowColor: 'rgba(0, 0, 0, 0.08)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: 'rgba(0, 0, 0, 0.08)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: 'rgba(0, 0, 0, 0.08)',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 1,
      shadowRadius: 16,
      elevation: 8,
    },
  },
};

// Dark Theme
export const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: '#2B7CFF',
    secondary: '#30D158',
    background: '#000000',
    surface: '#1C1C1E',
    surfaceVariant: '#2C2C2E',
    card: '#1C1C1E',
    text: '#FFFFFF',
    textSecondary: '#8E8E93',
    textTertiary: '#48484A',
    error: '#FF453A',
    success: '#30D158',
    warning: '#FFD60A',
    info: '#0A84FF',
    border: '#38383A',
    divider: '#38383A',
    disabled: '#48484A',
    overlay: 'rgba(0, 0, 0, 0.5)',
    highlight: '#0A84FF',
    accentPrimary: '#0A84FF',
    accentSecondary: '#30D158',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#8E8E93',
  },
  shadows: {
    small: {
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 1,
      shadowRadius: 16,
      elevation: 8,
    },
  },
};

// Helper functions
export const createStyles = (theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    ...theme.shadows.medium,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...theme.typography.button,
    color: theme.colors.background,
  },
});
