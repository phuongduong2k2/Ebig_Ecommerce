import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MarketScreen from '../screens/marketTab';
import AllCategoryScreen from '../screens/views/allCategoryScreen';
import CategoryScreen from '../screens/views/categoryScreen';
import BottomTabNavigation from './bottomTabNavigation';
import MarketDetailScreen from '../screens/views/marketDetailScreen';
import SearchScreen from '../screens/views/searchScreen';
import AuthorScreen from '../screens/views/authorScreen';
import PostDetailScreen from '../screens/views/postDetailScreen';

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
          <Stack.Screen
            name="MarketDetailScreen"
            component={MarketDetailScreen}
          />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen
            name="PostDetailTabScreen"
            component={PostDetailScreen}
          />
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
          <Stack.Screen name="AuthorScreen" component={AuthorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default MainNavigation;
