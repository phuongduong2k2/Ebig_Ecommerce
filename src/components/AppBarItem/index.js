import React, {useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {AppIcons} from '../../constants/AppIcons';
import {AppColors} from '../../constants/AppColors';
import AppSvg from '../AppSvg';
import TextStyle from '../../constants/TextStyle';

AppBarItem.propTypes = {
  title: PropTypes.string,
  onSelected: PropTypes.func,
  isSelected: PropTypes.bool,
  width: PropTypes.any,
  unactiveColor: PropTypes.string,
  activeColor: PropTypes.string,
  duration: PropTypes.number, // Mili second
  isRow: PropTypes.bool,
  isReverse: PropTypes.bool,
  iconSrc: PropTypes.any,
};

AppBarItem.defaultProps = {
  title: '',
  onSelected: () => {},
  isSelected: false,
  width: undefined,
  unactiveColor: AppColors.typography.subtitle,
  activeColor: AppColors.primary,
  duration: 300,
  isRow: false,
  isReverse: false,
  iconSrc: AppIcons.star.active,
};

function AppBarItem(props) {
  const {
    title,
    onSelected,
    isSelected,
    width,
    unactiveColor,
    activeColor,
    duration,
    isRow,
    isReverse,
    iconSrc,
  } = props;

  const animatedTextColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedTextColor, {
      toValue: isSelected ? 1 : 0,
      useNativeDriver: false,
      duration: duration,
    }).start();
  }, [isSelected]);

  return (
    <TouchableOpacity
      onPress={onSelected}
      activeOpacity={1}
      style={{
        backgroundColor: 'white',
        width: width,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: isRow ? (isReverse ? 'row-reverse' : 'row') : undefined,
      }}>
      <AppSvg SvgSrc={iconSrc} size={20} />
      <Animated.Text
        style={{
          ...TextStyle.button.btn_2,
          color: animatedTextColor.interpolate({
            inputRange: [0, 1],
            outputRange: [unactiveColor, activeColor],
          }),
        }}>
        {title}
      </Animated.Text>
    </TouchableOpacity>
  );
}

export default AppBarItem;
