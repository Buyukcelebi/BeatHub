type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'ultralight'
  | 'thin'
  | 'light'
  | 'medium'
  | 'semibold'
  | 'heavy'
  | 'black';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  surfaceVariant: string;
  card: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  border: string;
  divider: string;
  disabled: string;
  overlay: string;
  highlight: string;
  accentPrimary: string;
  accentSecondary: string;
  white: string;
  black: string;
  gray: string;
}

export interface ThemeTypography {
  h1: {
    fontSize: number;
    lineHeight: number;
    fontFamily: string;
    fontWeight: FontWeight;
  };
  h2: {
    fontSize: number;
    lineHeight: number;
    fontFamily: string;
    fontWeight: FontWeight;
  };
  h3: {
    fontSize: number;
    lineHeight: number;
    fontFamily: string;
    fontWeight: FontWeight;
  };
  h4: {
    fontSize: number;
    lineHeight: number;
    fontFamily: string;
    fontWeight: FontWeight;
  };
  body: {
    fontSize: number;
    lineHeight: number;
    fontFamily: string;
  };
  button: {
    fontSize: number;
    lineHeight: number;
    fontFamily: string;
    fontWeight: FontWeight;
  };
}

export interface ThemeShadows {
  small: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  medium: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  large: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  shadows: ThemeShadows;
  spacing: ThemeSpacing;
  borderRadius: ThemeSpacing;
  window: {
    width: number;
    height: number;
    hasNotch: boolean;
  };
}
