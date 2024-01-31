import React, {useEffect, useRef, useState} from 'react';
import {Animated, Button, Text, View} from 'react-native';
import AppSvg from '../AppSvg';
import {AppDimentions} from '../../constants/constants';
import {AppColors} from '../../constants/AppColors';
import {AppIcons} from '../../constants/AppIcons';
import AppStepItemProps from './type';

AppStepItem.defaultProps = {
  title: 'TimeLine',
  successColor: AppColors.successPrimary,
  failedColor: AppColors.errorPrimary,
  backgroundColor: AppColors.background.grey3,
  successIconSrc: AppIcons.success_step,
  failedIconSrc: AppIcons.failed_step,
  status: undefined,
};

/**
 *
 * @author phuongduong
 * @param {AppStepItemProps} props
 * @returns
 */
function AppStepItem(props) {
  const {
    currentStep,
    index,
    successIconSrc,
    failedIconSrc,
    duration,
    status,
    timeLine,
    title,
    renderActionView,
    successColor,
    failedColor,
    backgroundColor,
    style,
  } = props;

  const animated = useRef(new Animated.Value(0)).current;
  const focusedAnimated = useRef(new Animated.Value(0)).current;
  const [colorIndicator, setColorIndicator] = useState(backgroundColor);

  useEffect(() => {
    // Scale Anim
    if (currentStep === index) {
      Animated.timing(focusedAnimated, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(focusedAnimated, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false,
      }).start();
    }

    // Indicator Load Anim
    if (currentStep >= index) {
      Animated.timing(animated, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animated, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false,
      }).start();
    }
  }, [currentStep]);

  useEffect(() => {
    switch (status) {
      case 'success':
        setColorIndicator(successColor);
        break;
      case 'failed':
        setColorIndicator(failedColor);
        break;
      default:
        setColorIndicator(backgroundColor);
    }
  }, [status]);

  const _renderIconStep = () => {
    if (status !== undefined) {
      if (status === 'success') {
        return <AppSvg SvgSrc={successIconSrc} size={10} />;
      } else if (status === 'failed') {
        return <AppSvg SvgSrc={failedIconSrc} size={10} />;
      }
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: AppDimentions.secondPadding,
        ...style,
      }}>
      <View
        style={{
          alignItems: 'center',
          width: 32,
          height: 20,
          justifyContent: 'center',
          marginRight: AppDimentions.secondPadding,
        }}>
        <Text>{timeLine}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: 20,
            width: 16,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              height: 16,
              width: 16,
              position: 'absolute',
              borderWidth: 0.5,
              borderColor: focusedAnimated.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  AppColors.background.grey3,
                  AppColors.successPrimary,
                ],
              }),
              transform: [
                {
                  scale: focusedAnimated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.5],
                  }),
                },
              ],
              backgroundColor: colorIndicator,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}></Animated.View>
          {_renderIconStep()}
        </View>
        <Animated.View
          style={{
            width: 1,
            height: animated.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 40],
            }),
            position: 'absolute',
            bottom: 0,
            zIndex: 1,
            backgroundColor: AppColors.successPrimary,
          }}
        />
        <View
          style={{
            width: 1,
            zIndex: 0,
            height: 40,
            backgroundColor: AppColors.background.grey3,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          height: 20,
          marginLeft: AppDimentions.secondPadding,
          justifyContent: 'center',
        }}>
        <Text style={{alignSelf: 'stretch'}}>{title}</Text>
      </View>
      <View
        style={{
          // width: 140,
          height: 25,
          justifyContent: 'center',
        }}>
        {renderActionView && renderActionView()}
      </View>
    </View>
  );
}

export default AppStepItem;
