import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  DimensionValue,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import PropTypes from 'prop-types';
import {AppColors} from '../../constants/AppColors';
import AppSvg from '../AppSvg';
import AppTextStyles from '../../constants/AppTextStyles';

interface Props {
  onPress?: () => void;
  disabled?: boolean;
  backgroundColor?: string | any;
  width?: DimensionValue;
  height?: DimensionValue;
  containerStyle?: ViewStyle;
  prefixIcon?: SVGElement;
  prefixIconSize?: DimensionValue;
  title?: string | any;
  textStyle?: TextStyle;
  suffixIcon?: SVGElement;
  suffixIconSize?: DimensionValue;
}

const AppButton = (props: Props) => {
  const {
    onPress,
    backgroundColor = 'white',
    width,
    disabled,
    height = 32,
    prefixIcon,
    title = 'Button',
    textStyle = {},
    containerStyle = {},
    suffixIcon,
    prefixIconSize = 24,
    suffixIconSize = 24,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={
        !disabled
          ? {
              height: height,
              width: width,
              borderWidth: 1,
              backgroundColor: backgroundColor,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 24,
              ...containerStyle,
            }
          : {
              height: height,
              width: width,
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 24,
              ...containerStyle,
              backgroundColor: '#0035800A',
            }
      }>
      {prefixIcon && <AppSvg SvgSrc={prefixIcon} size={prefixIconSize} />}
      <Text
        style={
          !disabled
            ? {...AppTextStyles.button2, ...textStyle}
            : {
                ...AppTextStyles.button2,
                ...textStyle,
                color: AppColors.lightTheme.disable,
              }
        }>
        {title}
      </Text>
      {suffixIcon && (
        <View style={{marginLeft: 4}}>
          <AppSvg SvgSrc={suffixIcon} size={suffixIconSize} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
