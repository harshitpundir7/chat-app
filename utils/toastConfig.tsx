import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BaseToastProps } from "react-native-toast-message";

interface CustomToastProps extends BaseToastProps {
  text1?: string;
  text2?: string;
}

const toastConfig = {
  error: ({ text1, text2 }: CustomToastProps) => (
    <View style={[styles.container, styles.errorContainer]}>
      <View style={styles.iconContainer}>
        <View style={[styles.icon, styles.errorIcon]}>
          <Text style={styles.iconText}>✕</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        {text1 && <Text style={[styles.title, styles.errorTitle]}>{text1}</Text>}
        {text2 && <Text style={[styles.subtitle, styles.errorSubtitle]}>{text2}</Text>}
      </View>
    </View>
  ),
  success: ({ text1, text2 }: CustomToastProps) => (
    <View style={[styles.container, styles.successContainer]}>
      <View style={styles.iconContainer}>
        <View style={[styles.icon, styles.successIcon]}>
          <Text style={styles.iconText}>✓</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        {text1 && <Text style={[styles.title, styles.successTitle]}>{text1}</Text>}
        {text2 && <Text style={[styles.subtitle, styles.successSubtitle]}>{text2}</Text>}
      </View>
    </View>
  ),
  delete: ({ text1, text2 }: CustomToastProps) => (
    <View style={[styles.container, styles.deleteContainer]}>
      <View style={styles.iconContainer}>
        <View style={[styles.icon, styles.deleteIcon]}>
          <Text style={styles.iconText}>🗑</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        {text1 && <Text style={[styles.title, styles.deleteTitle]}>{text1}</Text>}
        {text2 && <Text style={[styles.subtitle, styles.deleteSubtitle]}>{text2}</Text>}
      </View>
    </View>
  ),
  loading: ({ text1, text2 }: CustomToastProps) => (
    <View style={[styles.container, styles.loadingContainer]}>
      <View style={styles.iconContainer}>
        <View style={[styles.icon, styles.loadingIcon]}>
          <View style={styles.spinner}>
            <View style={[styles.spinnerDot, styles.spinnerDot1]} />
            <View style={[styles.spinnerDot, styles.spinnerDot2]} />
            <View style={[styles.spinnerDot, styles.spinnerDot3]} />
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        {text1 && <Text style={[styles.title, styles.loadingTitle]}>{text1}</Text>}
        {text2 && <Text style={[styles.subtitle, styles.loadingSubtitle]}>{text2}</Text>}
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "92%",
    minHeight: 64,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  
  // Success Toast (Green theme)
  successContainer: {
    backgroundColor: "#6aa84d",
    borderLeftWidth: 4,
    borderLeftColor: "#5a9142",
  },
  
  // Error Toast (Red with black accent)
  errorContainer: {
    backgroundColor: "#DC2626",
    borderLeftWidth: 4,
    borderLeftColor: "#B91C1C",
  },
  
  // Delete Toast (Dark theme)
  deleteContainer: {
    backgroundColor: "#1F1F1F",
    borderLeftWidth: 4,
    borderLeftColor: "#6aa84d",
  },
  
  // Loading Toast (Dark with green accent)
  loadingContainer: {
    backgroundColor: "#2A2A2A",
    borderLeftWidth: 4,
    borderLeftColor: "#6aa84d",
  },
  
  iconContainer: {
    marginRight: 12,
  },
  
  icon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  
  successIcon: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  
  errorIcon: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  
  deleteIcon: {
    backgroundColor: "rgba(106, 168, 77, 0.2)",
  },
  
  loadingIcon: {
    backgroundColor: "rgba(106, 168, 77, 0.2)",
  },
  
  iconText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  
  title: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 20,
    marginBottom: 2,
  },
  
  subtitle: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
    opacity: 0.9,
  },
  
  // Success Text Colors
  successTitle: {
    color: "#FFFFFF",
  },
  
  successSubtitle: {
    color: "#FFFFFF",
  },
  
  // Error Text Colors
  errorTitle: {
    color: "#FFFFFF",
  },
  
  errorSubtitle: {
    color: "#FFFFFF",
  },
  
  // Delete Text Colors
  deleteTitle: {
    color: "#FFFFFF",
  },
  
  deleteSubtitle: {
    color: "#E5E5E5",
  },
  
  // Loading Text Colors
  loadingTitle: {
    color: "#FFFFFF",
  },
  
  loadingSubtitle: {
    color: "#E5E5E5",
  },
  
  // Loading Spinner Styles
  spinner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  
  spinnerDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#6aa84d",
    marginHorizontal: 1,
  },
  
  spinnerDot1: {
    animationDelay: "0s",
  },
  
  spinnerDot2: {
    animationDelay: "0.1s",
  },
  
  spinnerDot3: {
    animationDelay: "0.2s",
  },
});

export default toastConfig;