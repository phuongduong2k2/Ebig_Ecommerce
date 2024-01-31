import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MarketScreen from '../screens/market';
import AllCategoryScreen from '../screens/market/views/allCategoryScreen';
import CategoryScreen from '../screens/market/views/categoryScreen';
import BottomTabNavigation from './bottomTabNavigation';

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
          initialRouteName={'BottomTabs'}
          screenOptions={{headerShown: false, orientation: 'portrait'}}>
          <Stack.Screen name="BottomTabs" component={BottomTabNavigation} />
          <Stack.Screen
            name="AllCategoryScreen"
            component={AllCategoryScreen}
          />
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default MainNavigation;
