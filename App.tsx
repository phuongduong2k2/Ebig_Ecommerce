import 'react-native-gesture-handler';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation';
import ShareModal from './src/components/ShareModal/ShareModal';
import {Provider} from 'react-redux';
import store from './src/redux';

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar
          barStyle={Platform.OS == 'ios' ? 'default' : 'dark-content'}
          backgroundColor={'white'}
        />
        <SafeAreaProvider>
          <MainNavigation />
          <ShareModal />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
