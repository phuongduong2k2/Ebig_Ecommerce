import {View, Text} from 'react-native';
import React from 'react';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

type Props = {
  children: any;
};

const WrapTab = (props: Props) => {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={{flex: 1}}>
      {props.children}
    </Animated.View>
  );
};

export default WrapTab;
