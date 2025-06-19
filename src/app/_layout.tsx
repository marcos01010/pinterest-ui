import { Slot } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import * as SplashScreen from "expo-splash-screen"

import { 
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold    
} from "@expo-google-fonts/roboto"

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold 
    })

    if(fontsLoaded){
       SplashScreen.preventAutoHideAsync()
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>            
           {fontsLoaded && <Slot />}
        </GestureHandlerRootView>
    )
}