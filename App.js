import { ThemeProvider } from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";
import Login from "./src/Screens/Login";
import SignIn from "./src/Screens/SignIn";
import SignUp from "./src/Screens/SignUp";

import Home from "./src/Screens/Home";

import Grade from "./src/Screens/SignUp/Grade";
import Province from "./src/Screens/SignUp/Province";

import StyledGuide from './src/Themes/themes';


export default function App() {
  return (
    <ThemeProvider theme={StyledGuide}>
      <SafeAreaView>
        <StatusBar />
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}
