import useTheme from './useTheme';

const useThemedStyles = (styles: (theme: any) => object, includeTheme?: boolean) => {
  const theme = useTheme();
  if (includeTheme) {
    return { ...styles(theme), ...theme };
  } else {
    return styles(theme);
  }
};

export default useThemedStyles;
