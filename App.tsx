import 'react-native-gesture-handler';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation';
import ShareModal from './src/components/ShareModal/ShareModal';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer independent={true}>
      <StatusBar
        barStyle={Platform.OS == 'ios' ? 'default' : 'dark-content'}
        backgroundColor={'white'}
      />
      <SafeAreaProvider>
        <MainNavigation />
        <ShareModal />
      </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
