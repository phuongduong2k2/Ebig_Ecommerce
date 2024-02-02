import {View, Text, ViewStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../constants/AppColors';
import AppSvg from '../AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import AppTextStyles from '../../constants/AppTextStyles';

type Props = {
  title?: string;
  containerStyle?: ViewStyle;
  onPress?: () => void;
};

const SearchButton = (props: Props) => {
  const {containerStyle = {}, title = 'Title', onPress = () => {}} = props;
  return (
    <View
      style={{
        paddingHorizontal: 16,
        height: 48,
        paddingVertical: 8,
        backgroundColor: 'white',
        ...containerStyle,
      }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={{
          borderRadius: 8,
          width: '100%',
          height: '100%',
          backgroundColor: AppColors.lightTheme.grey1,
          paddingHorizontal: 16,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <AppSvg SvgSrc={AppIcons.icon_search} size={16} />
        <Text
          style={{
            ...AppTextStyles.placeholder2,
            marginLeft: 8,
            color: AppColors.lightTheme.placeholder,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchButton;
