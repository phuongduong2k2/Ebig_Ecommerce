import React, {useEffect, useRef, useState} from 'react';
import {Animated, Button, Text, View} from 'react-native';
import {AppColors} from '../../constants/AppStyle';
import PropTypes from 'prop-types';

AppBarContainer.propTypes = {
  style: PropTypes.object,
  duration: PropTypes.number,
  haveBottomIndicator: PropTypes.bool,
  isRow: PropTypes.bool,
  isReverse: PropTypes.bool,
};

AppBarContainer.defaultProps = {
  style: {},
  duration: 300,
  haveBottomIndicator: true,
  isRow: false,
  isReverse: false,
};

function AppBarContainer(props) {
  const {children, style, duration, haveBottomIndicator, isRow, isReverse} =
    props;
  const [isSelected, setSelected] = useState(0);

  const firstTime = useRef(true).current;

  const handleSelected = index => {
    setSelected(index);
  };

  const _renderAppBarItem = () =>
    React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        width: Array.isArray(children) ? `${100 / children.length}%` : '100%',
        isSelected: isSelected === index,
        duration: duration,
        isRow: isRow,
        isReverse: isReverse,
        onSelected: () => {
          handleSelected(index);
        },
      });
    });

  const animated = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!haveBottomIndicator) return;
    // if (firstTime) {
    //   return;
    // }
    Animated.timing(animated, {
      toValue: isSelected,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }, [isSelected]);
  return (
    <>
      <View
        style={{
          height: 48,
          flexDirection: 'row',
          alignItems: 'center',
          ...style,
          width: '100%',
        }}>
        {_renderAppBarItem()}

        {haveBottomIndicator && (
          <Animated.View
            style={{
              height: 2,
              left: animated.interpolate({
                inputRange: [0, children?.length - 1],
                outputRange: [
                  '0%',
                  `${((children?.length - 1) / children?.length) * 100}%`,
                ],
              }),
              backgroundColor: AppColors.primary,
              width: Array.isArray(children)
                ? `${100 / children.length}%`
                : '100%',
              position: 'absolute',
              bottom: 0,
            }}
          />
        )}
      </View>
      <Text>{((children?.length - 1) / children?.length) * 100}</Text>
    </>
  );
}

export default AppBarContainer;
