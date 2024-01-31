import 'react-native-gesture-handler';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        barStyle={Platform.OS == 'ios' ? 'default' : 'dark-content'}
        backgroundColor={'white'}
      />
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
