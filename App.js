import { ThemeProvider } from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";
import Login from "./src/Screens/Login";
import SignIn from "./src/Screens/SignIn";

import StyledGuide from './src/Themes/themes';


export default function App() {
  return (
    <ThemeProvider theme={StyledGuide}>
      <SafeAreaView>
        <StatusBar />
        <SignIn />
      </SafeAreaView>
    </ThemeProvider>
  );
}
