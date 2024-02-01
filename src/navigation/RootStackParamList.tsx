import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type TopicScreenParams = {name: string; pictureId: string; id: string};

export type RootStackParamList = {
  MarketBottomTab: {};
  MarketScreen: {};
  SearchMarketScreen: {};
  MarketDetailScreen: {} | undefined;
  ExpertProfileScreen: {} | undefined;
  SearchingMarketScreen: {} | undefined;
  AllCategoryScreen: {} | undefined;
  CategoryScreen: {} | undefined;
};

const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};

export default useAppNavigation;
