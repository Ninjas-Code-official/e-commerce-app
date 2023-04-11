import React, { useState, useEffect } from "react";
import AppContainer from "./src/utils/routes";
import * as Font from "expo-font";
import {
  View,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Platform,
  LogBox,
} from "react-native";
import { colors } from "./src/utils/colors";

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs();
export default function App() {
  const [fontLoaded, fontLoadedSetter] = useState(false);

  useEffect(() => {
    loadApp();
  });

  async function loadApp() {
    await Font.loadAsync({
      "Poppins-Regular": require("./src/assets/font/Poppins/Poppins-Regular.ttf"),
      "Poppins-Bold": require("./src/assets/font/Poppins/Poppins-Bold.ttf"),
    });
    fontLoadedSetter(true);
  }

  if (fontLoaded) {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  } else
    return (
      <View style={styles.spinnerContainer}>
        {fontLoaded}
        <ActivityIndicator size="large" color={colors.greenColor} />
      </View>
    );
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -StatusBar.currentHeight,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
