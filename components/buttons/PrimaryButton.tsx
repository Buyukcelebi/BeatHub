import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import useThemedStyles from "@/theme/useThemedStyles";
import { Theme } from "@/theme/theme";

type PrimaryButtonProps = {
  buttonText: string;
  onPress: () => void;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
};
const PrimaryButton = ({
  buttonText,
  onPress,
  rightIcon,
  isLoading,
}: PrimaryButtonProps): React.JSX.Element => {
  const _styles = useThemedStyles(styles);
  return (
    <View style={_styles.buttonContainer}>
      <TouchableOpacity style={_styles.button} onPress={onPress}>
        <Text style={_styles.buttonText}>{buttonText}</Text>
        {rightIcon && !isLoading && (
          <View style={_styles.rightIconWrapper}>{rightIcon}</View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    buttonContainer: {
      alignItems: "center",
    },
    button: {
      paddingVertical: 13,
      borderRadius: 15,
      alignItems: "center",
      backgroundColor: theme.colors.primary,
      width: "100%",
      marginBottom: 10,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
    },
    rightIconWrapper: {
      marginLeft: 15,
    },
  });

export default PrimaryButton;
