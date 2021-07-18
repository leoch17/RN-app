import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import AppNavigator from './navigation/AppNavigator';


const App = () => {
  
  let [fontsLoaded] = useFonts({
    'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return(
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    );
  }
};

export default App;