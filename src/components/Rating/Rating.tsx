import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppSvg from '../AppSvg';
import {AppIcons} from '../../constants/AppIcons';

interface Props {
  activeIcon?: SVGElement;
  inactiveIcon?: SVGElement;
  numberStars?: number;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  initActive?: number;
}

const Rating = (props: Props) => {
  const {
    activeIcon,
    inactiveIcon,
    numberStars = 5,
    onPress,
    containerStyle = {},
    itemStyle = {},
    initActive = numberStars,
  } = props;
  const [indexSelected, setIndexSelected] = useState(0);

  useEffect(() => {
    if (onPress) {
      setIndexSelected(0);
    } else {
      setIndexSelected(numberStars);
    }
  }, [onPress]);

  useEffect(() => {
    setIndexSelected(initActive - 1);
  }, [initActive]);

  const listNumber = [];
  for (let i = 0; i < numberStars; i++) {
    listNumber.push(i);
  }
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', ...containerStyle}}>
      {listNumber.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={onPress ? undefined : 1}
            key={index}
            style={{
              height: 16,
              width: 16,
              marginLeft: index !== 0 ? 4 : 0,
              ...itemStyle,
            }}
            onPress={() => {
              if (onPress) {
                setIndexSelected(index);
                onPress();
              }
            }}>
            <AppSvg
              SvgSrc={
                index <= indexSelected
                  ? activeIcon ?? AppIcons.star.active
                  : inactiveIcon ?? AppIcons.star.inactive
              }
              size={16}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Rating;
