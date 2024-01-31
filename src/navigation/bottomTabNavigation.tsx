import {View, Text, ImageSourcePropType, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenNames from '../constants/ScreenNames';
import MarketScreen from '../screens/market';
import {AppIcons} from '../constants/AppIcons';
import AppImages from '../constants/AppImages';
import {AppColors} from '../constants/AppColors';
import AppSvg from '../components/AppSvg';
import AppTextStyles from '../constants/AppTextStyles';
import SearchScreen from '../screens/search';
import ProfileScreen from '../screens/profile';

const Tab = createBottomTabNavigator();

type Props = {};

interface Icon {
  active: React.ComponentType<any>;
  inactive: React.ComponentType<any>;
}

interface ScreenDataItem {
  title: string;
  name: string;
  component: React.FC;
  icon: Icon;
  images?: ImageSourcePropType;
}

const screenSocialData: ScreenDataItem[] = [
  {
    title: 'Market',
    name: 'MarketScreen',
    component: MarketScreen,
    icon: {
      active: AppIcons.icon_shop_active,
      inactive: AppIcons.icon_shop,
    },
  },
  {
    title: 'Tìm kiếm',
    name: 'SearchScreen',
    component: SearchScreen,
    icon: {
      active: AppIcons.icon_search_active,
      inactive: AppIcons.icon_search,
    },
  },
  {
    title: 'Hồ sơ',
    name: 'ProfileScreen',
    component: ProfileScreen,
    icon: {
      active: AppIcons.icon_user_profile,
      inactive: AppIcons.icon_user_profile,
    },
    images: AppImages.avatar,
  },
];

const BottomTabNavigation = (props: Props) => {
  return (
    <Tab.Navigator initialRouteName={'MarketScreen'}>
      {screenSocialData.map(({name, title, component, icon, images}, index) => (
        <Tab.Screen
          name={title}
          component={component}
          key={name}
          listeners={{
            tabPress: e => {
              // e.preventDefault();
              // if ((!isLogin && index == 2) || (!isLogin && index == 3)) {
              //   LoginBottomSheetUtils.show();
              // }
            },
          }}
          options={({navigation}) => ({
            headerShown: false,
            tabBarStyle: {
              paddingBottom: 0,
              paddingTop: 4,
              height: 52,
            },
            tabBarIcon: ({focused}) => {
              const isLastIcon = index === screenSocialData.length - 1;
              if (isLastIcon) {
                return images ? (
                  <Image
                    source={images}
                    style={{
                      resizeMode: 'contain',
                      height: 24,
                      width: 24,
                      borderWidth: focused ? 2 : 0,
                      borderRadius: 1000,
                      borderColor: AppColors.primary,
                    }}
                  />
                ) : (
                  <AppSvg
                    size={24}
                    SvgSrc={focused ? icon.active : icon.inactive}
                  />
                );
              } else {
                return (
                  <AppSvg
                    size={24}
                    SvgSrc={focused ? icon.active : icon.inactive}
                  />
                );
              }
            },
            tabBarLabel: ({focused, children}) => {
              return (
                <Text
                  style={{
                    ...AppTextStyles.label5,
                    color: !focused
                      ? AppColors.lightTheme.subtitle
                      : AppColors.primary,
                  }}
                  numberOfLines={1}>
                  {children}
                </Text>
              );
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
