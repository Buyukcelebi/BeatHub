import React, { useState } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./ButtonStyles";
import useThemedStyles from "../../theme/useThemedStyles";
import { useTranslation } from "react-i18next";

export default function SubscriptionButton({
  text,
  onPress,
  shadowColor,
  subText,
  isLoading,
  fontSize,
  disabled,
  width,
  height,
  color,
  discountText,
  opacity,
  discountColor,
  isSelected,
  price,
  priceDesc,
}) {
  const style = useThemedStyles(styles);
  const { t, i18n } = useTranslation();

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        onPress && onPress();
      }}
    >
      <View
        style={[
          disabled && style.disabled,
          style.subscriptionButton,
          isSelected && style.selectedWrapper,
          shadowColor && { shadowColor },
          width && { width },
          height && { height },
          color && { backgroundColor: color },
          { opacity: opacity && opacity },
        ]}
      >
        <View style={style.subsButtonWrapper}>
          <View
            style={[
              style.iconDotWrapper,
              !isSelected && { borderColor: "#44505f" },
            ]}
          >
            {isSelected && <View style={style.iconDot} />}
          </View>
          <View style={style.subsTextWrapper}>
            <Text
              style={[
                style.text,
                style.subscriptionButtonText,
                fontSize && { fontSize },
              ]}
            >
              {isLoading ? <ActivityIndicator /> : t(text)}
            </Text>

            {subText && (
              <Text
                style={[
                  style.text,
                  style.subscriptionButtonText,
                  style.subscriptionButtonSubText,
                  fontSize && { fontSize },
                ]}
              >
                {isLoading ? <ActivityIndicator /> : t(subText)}
              </Text>
            )}
          </View>

          {price && (
            <View style={style.priceWrapper}>
              <Text
                style={[
                  style.text,
                  style.priceText,
                  style.subscriptionButtonText,
                  fontSize && { fontSize },
                ]}
              >
                {isLoading ? <ActivityIndicator /> : t(price)}/week
              </Text>
            </View>
          )}

          {discountText && (
            <View
              style={[
                style.discountItem,
                discountColor && { backgroundColor: discountColor },
              ]}
            >
              <Text style={style.discountText}>{discountText}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
