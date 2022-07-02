import { NativeBaseProvider } from "native-base";
import OnboardingScreen from "./app/screens/onboarding/OnboardingScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <OnboardingScreen />
    </NativeBaseProvider>
  );
}
