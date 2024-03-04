import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import MarketScreen from '../screens/marketTab';
import AllCategoryScreen from '../screens/views/allCategoryScreen';
import CategoryScreen from '../screens/views/categoryScreen';
import BottomTabNavigation from './bottomTabNavigation';
import MarketDetailScreen from '../screens/views/marketDetailScreen';
import SearchScreen from '../screens/views/searchScreen';
import AuthorScreen from '../screens/views/authorScreen';
import PostDetailScreen from '../screens/views/postDetailScreen';
import AppHeader from '../components/AppHeader';
import AppSvg from '../components/AppSvg';
import { AppIcons } from '../constants/AppIcons';
import useAppNavigation from './RootStackParamList';
import Test from '../../Test';

const Stack = createNativeStackNavigator();

const MainNavigation: React.FC = () => {
  // const insets = useSafeAreaInsets();
  const navigation=useAppNavigation()
  return (
    <View
      style={{
        flex: 1,
        width:"100%",
      }}>
        {/* <SafeAreaProvider> */}
                  {/* <AppHeader title="Market">
            <><TouchableOpacity onPress={()=>navigation.goBack()}><AppSvg SvgSrc={AppIcons.arrow_left} size={24} /></TouchableOpacity></>
            <></>
          </AppHeader> */}
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
        {/* </SafeAreaProvider> */}
    </View>
  );
};
export default MainNavigation;
