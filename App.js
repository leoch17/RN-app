import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return(
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;