import {View, Text} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type Props = {};

const CardPostSkeleton = (props: Props) => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item height={192} width={'100%'} />
        <SkeletonPlaceholder.Item
          marginTop={16}
          flexDirection="row"
          alignItems="center">
          <SkeletonPlaceholder.Item height={24} width={24} borderRadius={100} />
          <SkeletonPlaceholder.Item height={16} width={'50%'} marginLeft={8} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item marginTop={12}>
          <SkeletonPlaceholder.Item height={22} width={280} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item marginTop={8}>
          <SkeletonPlaceholder.Item height={16} width={200} />
          <SkeletonPlaceholder.Item height={16} width={300} marginTop={8} />
          <SkeletonPlaceholder.Item height={16} width={150} marginTop={8} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          marginTop={16}
          flexDirection="row"
          justifyContent="space-between">
          <SkeletonPlaceholder.Item width={100} height={22} />
          <SkeletonPlaceholder.Item width={100} height={22} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default CardPostSkeleton;
