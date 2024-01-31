import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {AppColors} from '../../constants/AppColors';
import AppTextStyles from '../../constants/AppTextStyles';
import AppSvg from '../AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import {useDispatch} from 'react-redux';
import {LoginBottomSheetUtils} from '../../screens/Login/LoginScreen';

type Props = {};

const AppLoginBadge = (props: Props) => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const dispatch = useDispatch();
  return (
    <View
      style={{
        height: 48,
        width: '100%',
        backgroundColor: AppColors.darkTheme.black,
        paddingHorizontal: 16,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <AppSvg SvgSrc={AppIcons.icon_compass_white} size={24} />
      <Text
        style={{
          ...AppTextStyles.body2,
          color: AppColors.darkTheme.body,
          marginLeft: 12,
          flex: 1,
        }}
        numberOfLines={2}>
        Đăng nhập để khám phá nhiều hơn
      </Text>
      <TouchableOpacity
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          LoginBottomSheetUtils.show();
        }}>
        <Text
          style={{...AppTextStyles.button2, color: AppColors.darkTheme.title}}>
          Đăng nhập
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppLoginBadge;
