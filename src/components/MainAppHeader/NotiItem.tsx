import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import AppTextStyles from '../../constants/AppTextStyles';
import {AppColors} from '../../constants/AppColors';
import AppSvg from '../AppSvg';

type Props = {
  quantity?: number;
  icon: SVGElement;
  style?: ViewStyle;
  onPress?: () => void;
};

const NotiItem = (props: Props) => {
  const {quantity, icon, style, onPress = () => {}} = props;
  return (
    <TouchableOpacity
      style={{
        minHeight: 24,
        minWidth: 24,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        ...style,
      }}
      onPress={onPress}>
      <View>
        {quantity && (
          <View
            style={{
              position: 'absolute',
              right: -6,
              top: -8,
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 100,
              zIndex: 1,
              height: 18,
              width: 18,
            }}>
            <View
              style={{
                backgroundColor: '#ED2011',
                height: '100%',
                width: '100%',
                borderRadius: 1000,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  ...AppTextStyles.subtitle4,
                  color: AppColors.darkTheme.title,
                  position: 'absolute',
                  textAlign: 'center',
                }}>
                {quantity.toString()}
              </Text>
            </View>
          </View>
        )}
        <AppSvg SvgSrc={icon} size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default NotiItem;
