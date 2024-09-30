import useTheme from './useTheme';

const useThemedStyles = (styles, includeTheme) => {
  const theme = useTheme();
  if (includeTheme) {
    return {...styles(theme), ...theme};
  } else {
    return styles(theme);
  }
};

export default useThemedStyles;
