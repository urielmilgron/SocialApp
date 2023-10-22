import { useFonts } from "expo-font";
import MainNavigator from './src/navigation/MainNavigator'
import fonts from "./src/global/fonts"
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App(){
  const [globalFonts] = useFonts(fonts)

  if(!globalFonts){
    return null
  }

  return(
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </Provider>
  )
}