import React from 'react';
import 'react-native-gesture-handler';
//redux
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
//Navigator
import Stack from './src/navigator/Stack';



//1) Set up redux


export default function App() {
  return (
    <Provider store={ store }>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

