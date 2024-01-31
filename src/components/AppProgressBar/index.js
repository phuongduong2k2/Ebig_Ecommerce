import React, {useEffect, useRef, useState} from 'react';
import * as Progress from 'react-native-progress';
import PropTypes from 'prop-types';
import {Animated, View} from 'react-native';
import {AppColors} from '../../constants/AppColors';

AppProgressBar.propTypes = {
  progress: PropTypes.number,
  with: PropTypes.any,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  unfilledColor: PropTypes.string,
  borderWidth: PropTypes.number,
};

AppProgressBar.defaultProps = {
  progress: 0,
  with: null,
  height: 8,
  borderRadius: 8,
  color: AppColors.primary,
  borderColor: AppColors.primary,
  unfilledColor: 'white',
  borderWidth: 1,
};
function AppProgressBar(props) {
  const {
    progress,
    width,
    height,
    borderRadius,
    color,
    borderColor,
    unfilledColor,
    borderWidth,
  } = props;

  const [widthContainer, setWidthContainer] = useState(0);

  // Animated progress
  const animated = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    let newProgress = progress;
    if (progress > 1) {
      newProgress = 1;
    }
    if (progress < 0) {
      newProgress = 0;
    }
    Animated.timing(animated, {
      toValue: newProgress,
      duration: 120,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View
      onLayout={event => {
        var {width} = event.nativeEvent.layout;
        setWidthContainer(width);
      }}
      style={{justifyContent: 'center', width: '100%'}}>
      <Progress.Bar
        progress={progress}
        width={width === null || width === undefined ? null : width}
        height={height}
        borderRadius={borderRadius}
        color={'transparent'}
        style={{borderWidth: borderWidth}}
        borderColor={borderColor}
        unfilledColor={unfilledColor}
        animationType="timing"
        animationConfig={{duration: 150}}
      />
      {/* Thanh Progress thay thế */}
      <Animated.View
        style={{
          left: borderWidth,
          height: height,
          width: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, widthContainer - borderWidth * 2],
          }),
          borderRadius: 100,
          backgroundColor: color,
          position: 'absolute',
        }}
      />
    </View>
  );
}

export default AppProgressBar;
