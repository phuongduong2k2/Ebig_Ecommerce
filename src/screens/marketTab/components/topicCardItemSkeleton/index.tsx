import {ViewStyle, DimensionValue} from 'react-native';
import React from 'react';
import {Skeleton} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  style?: ViewStyle;
  height?: number;
  width?: number;
}

const TopicCardItemSkeleton = (props: Props) => {
  const {style, height = 200, width = 140} = props;
  return (
    <Skeleton
      height={height}
      width={width}
      style={{
        alignSelf: 'center',
        borderRadius: 8,
        opacity: 0.5,
        ...style,
      }}
      animation="wave"
      LinearGradientComponent={LinearGradient}
    />
  );
};

export default TopicCardItemSkeleton;
