import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Button1Styles';
import useThemedStyles from '../../theme/useThemedStyles';

export default function Button({
  text,
  variant = 'primary',
  icon,
  onPress,
  shadowColor,
  isLoading,
  fontSize,
  disabled,
  width,
  height,
  rightIcon,
  backgroundColor,
  fontWeight,
}) {
  const style = useThemedStyles(styles);
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={style.main} onPress={onPress}>
      {icon && <View style={style.iconWrapper}>{icon}</View>}
      {!isLoading && <Text style={style.text}>{t(text)}</Text>}
      {isLoading && <ActivityIndicator style={style.loading} />}
      {rightIcon && !isLoading && <View style={style.rightIconWrapper}>{rightIcon}</View>}
    </TouchableOpacity>
  );
}
