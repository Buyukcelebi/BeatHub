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
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <LinearGradient
        colors={
          !disabled
            ? backgroundColor || ['#FEB47B', '#86A8E7', '#91EAE4', '#00E676']
            : ['#171717', '#171717']
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 2 }}
        style={[
          variant === 'primary' ? style.main : style.secondary,
          disabled && style.disabled,
          style.buttonWrapper,
          shadowColor && { shadowColor },
        ]}>
        {icon && <View style={style.iconWrapper}>{icon}</View>}
        {!isLoading && (
          <Text
            style={[
              variant === 'primary' ? style.textMain : style.textSecondary,
              style.text,
              fontSize && { fontSize },
              fontWeight && { fontWeight },
            ]}>
            {t(text)}
          </Text>
        )}
        {isLoading && <ActivityIndicator style={style.loading} />}
        {rightIcon && !isLoading && <View style={style.rightIconWrapper}>{rightIcon}</View>}
      </LinearGradient>
    </TouchableOpacity>
  );
}
