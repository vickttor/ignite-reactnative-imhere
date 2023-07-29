import { StatusBar } from "react-native";
import { HomeScreen } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="default"
        backgroundColor="transparent"
        translucent
        showHideTransition={"fade"}
        animated
      />
      <HomeScreen/>
    </>
  )
}