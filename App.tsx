import { config } from "./config/gluestack-ui.config"
import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed"
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from "@components/Loading";

import { SignIn } from "@screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <SignIn /> : <Loading />}
    </GluestackUIProvider>
  )
}