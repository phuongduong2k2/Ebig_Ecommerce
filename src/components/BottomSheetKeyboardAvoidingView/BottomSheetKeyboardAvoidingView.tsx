import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Dimensions,
  PanResponder,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import {AppColors} from '../../constants/AppColors';
import SnackBarManager from '../SnackBarManager';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  children: ReactNode;
  isVisible: boolean;
  onCloseModal: () => void;
  height: number;
  onModalHide?: () => void;
}
const heightOfIndicator = 16;

const BottomSheetKeyboardAvoidingView = (props: Props) => {
  const {
    children,
    isVisible,
    onCloseModal,
    height,
    onModalHide = () => {},
  } = props;

  const heightOfScreen = Dimensions.get('window').height * height;

  const pan = useSharedValue(heightOfScreen + heightOfIndicator * 2);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy >= -10) {
          pan.value = gestureState.dy;
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (heightOfScreen - gestureState.dy < heightOfScreen * 0.7) {
          setTimeout(() => {
            onCloseModal();
          }, 300);
          pan.value = withTiming(heightOfScreen + heightOfIndicator * 2);
        } else {
          pan.value = withSpring(0, {
            mass: 1,
            damping: 67,
            stiffness: 100,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 100,
            reduceMotion: ReduceMotion.System,
          });
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (isVisible) {
      // pan.value = withSpring(0, {damping: 15});
      pan.value = withTiming(0);
    } else {
      pan.value = withTiming(heightOfScreen + heightOfIndicator * 2);
    }
  }, [isVisible]);

  const containerStyle = useAnimatedStyle(() => {
    return {
      flex: 1,
      transform: [{translateY: pan.value}],
    };
  });

  const insets = useSafeAreaInsets();
  return (
    <ReactNativeModal
      onModalHide={onModalHide}
      useNativeDriver={true}
      isVisible={isVisible}
      statusBarTranslucent
      style={{margin: 0}}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}>
      <Animated.View style={containerStyle}>
        <View
          style={{
            flex: 1,
            width: '100%',
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          }}>
          <TouchableOpacity
            onPress={() => {
              onCloseModal();
            }}
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: 'transparent',
              // position: 'absolute',
              // top: 0,
              // left: 0,
              zIndex: 0,
            }}>
            <View
              style={{
                height: StatusBar.currentHeight
                  ? StatusBar.currentHeight + insets.top + 24
                  : insets.top + 24,

                position: 'absolute',
                bottom: 0,
                width: '100%',
                transform: StatusBar.currentHeight
                  ? [{translateY: StatusBar.currentHeight + 24}]
                  : undefined,
              }}
            />
          </TouchableOpacity>
          <KeyboardAvoidingView
            style={{
              height: `${height * 90}%`,
              width: '100%',
              marginTop: StatusBar.currentHeight,
              // paddingTop: insets.top + 24,
            }}
            enabled
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Animated.View
              {...panResponder.panHandlers}
              style={{
                height: 16,
                width: '100%',
                backgroundColor: 'white',
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                borderColor: 'transparent',
                alignItems: 'center',
              }}>
              <View
                style={{
                  marginTop: 8,
                  width: 32,
                  height: 4,
                  backgroundColor: '#EAEAEA',
                }}
              />
            </Animated.View>
            {children}
          </KeyboardAvoidingView>

          {/* This for IOS */}
          {/* <View style={{height: insets.bottom, backgroundColor: 'white'}} /> */}
          <View
            style={{
              height: insets.bottom + 24,
              width: '100%',
              backgroundColor: 'white',
              position: 'absolute',
              bottom: -24,
            }}
          />
          {/* <View style={{zIndex: 100}}>
            <SnackBarManager />
          </View> */}
        </View>
      </Animated.View>
    </ReactNativeModal>
  );
};

export default BottomSheetKeyboardAvoidingView;
