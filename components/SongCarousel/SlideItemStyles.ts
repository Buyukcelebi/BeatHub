import { StyleSheet } from "react-native";
import { Theme } from "@/theme/theme";
import { t } from "i18next";

const createButtonStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      position: "absolute",
      bottom: theme.spacing.sm,
      width: "90%",
      padding: theme.spacing.md,
      overflow: "hidden",
      borderRadius: theme.borderRadius.md,
      alignSelf: "center",
      backgroundColor: theme.colors.surface,
      flexDirection: "row",
      justifyContent: "space-between",
      ...theme.shadows.medium,
    },
    title: {
      fontSize: 15,
      color: theme.colors.white,
      fontWeight: "300",
    },
    subTitle: {
      fontSize: 11,
      color: theme.colors.textSecondary,
      fontWeight: "300",
    },
  });

export default createButtonStyles;
