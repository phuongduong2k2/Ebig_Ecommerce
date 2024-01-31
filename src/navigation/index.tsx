import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MarketScreen from '../screens/market';

const Stack = createNativeStackNavigator();

const MainNavigation: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName={'MarketScreen'}
          screenOptions={{headerShown: false, orientation: 'portrait'}}>
          <Stack.Screen name="MarketScreen" component={MarketScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default MainNavigation;
