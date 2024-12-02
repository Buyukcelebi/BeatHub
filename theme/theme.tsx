// theme/theme.ts
import { Dimensions } from "react-native";
import { hasNotch } from "react-native-device-info";
import { Theme } from "./types";

// Constants
const { width, height } = Dimensions.get("window");

const fonts = {
  regular: "System",
  medium: "System",
  bold: "System",
};

// Base Theme
const baseTheme = {
  typography: {
    h1: {
      fontSize: 32,
      lineHeight: 40,
      fontFamily: fonts.bold,
      fontWeight: "700" as const,
    },
    h2: {
      fontSize: 24,
      lineHeight: 32,
      fontFamily: fonts.bold,
      fontWeight: "600" as const,
    },
    h3: {
      fontSize: 20,
      lineHeight: 28,
      fontFamily: fonts.bold,
      fontWeight: "600" as const,
    },
    h4: {
      fontSize: 18,
      lineHeight: 24,
      fontFamily: fonts.regular,
      fontWeight: "500" as const,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fonts.regular,
      fontWeight: "400" as const,
    },
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fonts.medium,
      fontWeight: "500" as const,
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
    primary: "#5A31F4",
    secondary: "#FF6D73",
    background: "#F6F7FB",
    surface: "#FFFFFF",
    surfaceVariant: "#F0F0F3",
    card: "#FFFFFF",
    text: "#2C2E3A",
    textSecondary: "#6C6F80",
    textTertiary: "#A0A3B1",
    border: "#E0E2EA",
    divider: "#E0E2EA",
    error: "#E63946",
    success: "#2EC4B6",
    warning: "#FFB703",
    info: "#497EBE",
    disabled: "#BEC2CC",
    overlay: "rgba(0, 0, 0, 0.5)",
    highlight: "#FFE66D",
    accentPrimary: "#C4A2FB",
    accentSecondary: "#FF6D73",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#808080",
  },
  shadows: {
    small: {
      shadowColor: "rgba(0, 0, 0, 0.08)",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: "rgba(0, 0, 0, 0.08)",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: "rgba(0, 0, 0, 0.08)",
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
    primary: "#A890FE",
    secondary: "#FF6D73",
    background: "#1A1A2E",
    surface: "#252941",
    surfaceVariant: "#2C2F3A",
    card: "#252941",
    text: "#F5F7FA",
    textSecondary: "#BEC2CC",
    textTertiary: "#8A8D99",
    border: "#353A50",
    divider: "#353A50",
    error: "#FF6B6B",
    success: "#34D399",
    warning: "#F59E0B",
    info: "#60A5FA",
    disabled: "#6C6F80",
    overlay: "rgba(255, 255, 255, 0.5)",
    highlight: "#FDE68A",
    accentPrimary: "#C4A2FB",
    accentSecondary: "#FF6D73",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#808080",
  },
  shadows: {
    small: {
      shadowColor: "rgba(0, 0, 0, 0.3)",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: "rgba(0, 0, 0, 0.3)",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: "rgba(0, 0, 0, 0.3)",
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
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...theme.typography.button,
    color: theme.colors.background,
  },
});
