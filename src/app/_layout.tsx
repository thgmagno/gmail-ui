import '@/styles/global.css'

import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import {
  useFonts,
  Roboto_400Regular as RobotoRegular,
  Roboto_500Medium as RobotoMedium,
  Roboto_700Bold as RobotoBold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@/components/loading'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    RobotoRegular,
    RobotoMedium,
    RobotoBold,
  })

  if (!fontsLoaded) return <Loading />

  return (
    <GestureHandlerRootView>
      <StatusBar style="light" />
      <Slot />
    </GestureHandlerRootView>
  )
}
