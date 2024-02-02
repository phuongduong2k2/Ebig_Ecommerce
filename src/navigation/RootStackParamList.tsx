import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type TopicScreenParams = {name: string; pictureId: string; id: string};

export type RootStackParamList = {
  MarketBottomTab: {};
  MarketTab: {};
  SearchMarketScreen: {};
  MarketDetailScreen: {} | undefined;
  ExpertProfileScreen: {} | undefined;
  SearchingMarketScreen: {} | undefined;
  AllCategoryScreen: {} | undefined;
  CategoryScreen: {} | undefined;
  SearchScreen: {} | undefined;
  AuthorScreen: {} | undefined;
  PostDetailScreen: {title: string; image: any};
};

const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};

export default useAppNavigation;
