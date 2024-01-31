import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type TopicScreenParams = {name: string; pictureId: string; id: string};

export type RootStackParamList = {
  HomeScreen: {};
  IntroScreen: {};
  BottomTabNavigation: {};
  MainNavigation: {};
  DrawerNavigation: {};
  UserProfileScreen: {};
  CustomizeTopicScreen: {};

  // Login
  LoginScreen: {isLogin?: boolean};
  RegisterScreen: {} | undefined;
  ForgotPasswordScreen: {} | undefined;
  VerifyScreen: {} | undefined;
  ResetPasswordScreen: {} | undefined;

  // Drawer
  DiscoveryScreen: {};

  // Market
  MarketBottomTab: {};
  MarketScreen: {};
  SearchMarketScreen: {};
  MarketDetailScreen: {} | undefined;
  ExpertProfileScreen: {} | undefined;
  SearchingMarketScreen: {} | undefined;
  AllCategoryScreen: {} | undefined;
  CategoryScreen: {} | undefined;

  // History
  DetailHistoryScreen: {} | undefined;

  // WishList
  WishListScreen: {};
  SavedScreen: {};
  ChangePasswordScreen: {};
  SettingsScreen: {};

  // Course:
  CourseBottomTab: {};
  CourseScreen: {};
  MyLearningScreen: {};
  SearchCourseScreen: {};

  // Social
  SocialBottomTab: {} | undefined;
  SocialScreen: {} | undefined;
  SearchSocialScreen: {} | undefined;
  SavedSocialScreen: {} | undefined;
  TestScreen: {} | undefined;
  TopicChildScreen: {data: TopicScreenParams};
  TopicScreen: {data: TopicScreenParams};
  PostDetailTabScreen: {title: string; image: any};
  PostDetailScreen: {title: string; image: any};
  TopExpertScreen: {} | undefined;
  PersonalRecommendTabScreen: {} | undefined;

  Start: {} | undefined;
  Fields: {} | undefined;
  TopicFollow: {} | undefined;
  AuthorsPersonalPage: {} | undefined;
  HomeNavigation: {} | undefined;
  FollowerAuthorPage: {} | undefined;
  SavedArticleDetails: {} | undefined;

  FollowUser: {} | undefined;
  CommentScreen: {} | undefined;

  //search
  Search: {title?: string; type?: number} | undefined;
  SearchResult: {title?: string; value?: string} | undefined;

  // courses
  CourseByTypeList: {data?: any} | undefined;
};

const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};

export default useAppNavigation;
