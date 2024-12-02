import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Application from "@/pages/Application";

export default function App() {
  return (
    <SafeAreaProvider>
      <Application />
    </SafeAreaProvider>
  );
}
