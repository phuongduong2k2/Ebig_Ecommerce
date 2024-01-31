import {View, Text, TextStyle, ViewStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../constants/AppColors';
import AppTextStyles from '../../constants/AppTextStyles';

interface Props {
  title: string;
  textStyles?: TextStyle;
  styles?: ViewStyle;
}

const HashTag = (props: Props) => {
  const {title, textStyles, styles} = props;
  return (
    <TouchableOpacity
      style={{
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        margin: 4,
        alignSelf: 'flex-start',
        backgroundColor: AppColors.lightTheme.grey1,
        borderRadius: 100,
        ...styles,
      }}>
      <Text
        style={{
          ...AppTextStyles.button2,
          color: AppColors.lightTheme.subtitle,
          ...textStyles,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HashTag;
