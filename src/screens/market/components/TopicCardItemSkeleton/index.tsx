import {ViewStyle, DimensionValue} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface Props {
  style?: ViewStyle;
  height?: DimensionValue;
  width?: DimensionValue;
}

const TopicCardItemSkeleton = (props: Props) => {
  const {style, height = 200, width = 140} = props;
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <SkeletonPlaceholder.Item
        height={height}
        width={width}
        // marginLeft={16}
        style={style}
      />
    </SkeletonPlaceholder>
  );
};

export default TopicCardItemSkeleton;
