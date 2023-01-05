import { ThemeProvider } from "styled-components/native";
import { StatusBar, SafeAreaView, Text } from "react-native";
import { useFonts, Exo_400Regular, Exo_500Medium, Exo_600SemiBold } from '@expo-google-fonts/exo';

import Login from "./src/Screens/Login";
import SignIn from "./src/Screens/SignIn";
import SignUp from "./src/Screens/SignUp";

import Home from "./src/Screens/Home";

import Grade from "./src/Screens/SignUp/Grade";
import Province from "./src/Screens/SignUp/Province";

import StyledGuide from './src/Themes/themes';


export default function App() {

  const [isFontLoad] = useFonts({
    'exo_400': Exo_400Regular,
    'exo_500': Exo_500Medium,
    'exo_600': Exo_600SemiBold
  })

  if (!isFontLoad) {
    return null;
  }

  return (
    <ThemeProvider theme={StyledGuide}>
      <SafeAreaView>
        <StatusBar />
        <SignUp />
      </SafeAreaView>
    </ThemeProvider>
  );
}
