import React from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./ButtonStyles";
import useThemedStyles from "../../theme/useThemedStyles";
import { useTranslation } from "react-i18next";

const Button = ({
  text,
  variant = "primary",
  icon,
  onPress,
  shadowColor,
  isLoading,
  fontSize,
  disabled,
  width,
  height,
  color,
  textStyle,
  opacity,
  style: customStyle,
}) => {
  const style = useThemedStyles(styles);
  const { t } = useTranslation();

  const buttonStyles = [
    variant === "primary" ? style.main : style.secondary,
    disabled && style.disabled,
    style.buttonWrapper,
    shadowColor && { shadowColor },
    width && { width },
    height && { height },
    color && { backgroundColor: color },
    { opacity: opacity ?? 1 },
    customStyle,
  ];

  const textStyles = [
    variant === "primary" ? style.textMain : style.textSecondary,
    style.text,
    fontSize && { fontSize },
    textStyle,
  ];

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={buttonStyles}>
        {icon && <View style={style.iconWrapper}>{icon}</View>}
        <Text style={textStyles}>
          {isLoading ? <ActivityIndicator /> : t(text)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
