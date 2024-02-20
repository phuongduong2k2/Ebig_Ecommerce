import {View, Text, ImageSourcePropType, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenNames from '../constants/ScreenNames';
import {AppIcons} from '../constants/AppIcons';
import AppImages from '../constants/AppImages';
import {AppColors} from '../constants/AppColors';
import AppSvg from '../components/AppSvg';
import AppTextStyles from '../constants/AppTextStyles';
import MarketTab from '../screens/marketTab';
import SearchTab from '../screens/searchTab';
import ProfileTab from '../screens/profileTab';

const Tab = createBottomTabNavigator();

type Props = {};

interface Icon {
  active: string;
  inactive: string;
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
    name: ScreenNames.MarketTab,
    component: MarketTab,
    icon: {
      active: AppIcons.icon_shop_active,
      inactive: AppIcons.icon_shop,
    },
  },
  {
    title: 'Tìm kiếm',
    name: ScreenNames.SearchTab,
    component: SearchTab,
    icon: {
      active: AppIcons.icon_search_active,
      inactive: AppIcons.icon_search,
    },
  },
  {
    title: 'Hồ sơ',
    name: ScreenNames.ProfileTab,
    component: ProfileTab,
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
