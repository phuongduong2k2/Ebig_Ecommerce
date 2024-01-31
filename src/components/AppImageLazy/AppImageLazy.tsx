import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  ImageStyle,
  ActivityIndicator,
  TouchableOpacity,
  ImageURISource,
} from 'react-native';
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  // children?: ReactNode;
  defaultSource?: ImageURISource | number | undefined;
  source: ImageSourcePropType;
  style?: ImageStyle;
  onPress?: () => void;
  onLoadDone?: () => void;
  activeOpacity?: number;
}

const AppImageLazy = (props: Props) => {
  const {
    source,
    style,
    onPress,
    defaultSource = undefined,
    onLoadDone,
    activeOpacity = undefined,
  } = props;
  const [isSuccess, setSuccess] = useState(false);

  const [isDone, setDone] = useState(false);

  const anim = useSharedValue(1);

  useEffect(() => {
    let timeout: any = null;
    if (isSuccess) {
      setDone(true);
      anim.value = withTiming(0, {duration: 1000});
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isSuccess]);

  const imageStyle = useAnimatedStyle(() => {
    const opacity = interpolate(anim.value, [1, 0], [0, 1], 'clamp');
    return {
      zIndex: 1,
      opacity,
      ...style,
    };
  });

  return (
    <View
      // activeOpacity={isDone && onPress ? activeOpacity : 1}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: style?.height,
        width: style?.width,
        zIndex: style?.zIndex,
      }}
      // onPress={() => {
      //   if (onPress) {
      //     onPress();
      //   }
      // }}
    >
      <View
        style={{
          width: style?.width,
          height: style?.height,
          position: 'absolute',
          left: 0,
          zIndex: 0,
        }}>
        {!isDone ? (
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              height={'100%'}
              width={'100%'}
              borderRadius={style?.borderRadius}
            />
          </SkeletonPlaceholder>
        ) : (
          <View
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#E1E9EE',
              borderRadius: style?.borderRadius,
            }}
          />
        )}
      </View>
      <View
        style={{
          height: '100%',
          width: '100%',
        }}>
        <Animated.Image
          defaultSource={defaultSource}
          source={source}
          style={imageStyle}
          onLoad={() => {
            console.log('loading success');
            setSuccess(true);
          }}
        />
      </View>
    </View>
  );
};

export default AppImageLazy;
