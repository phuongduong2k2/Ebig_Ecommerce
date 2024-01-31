import {Text, TouchableOpacity, DimensionValue} from 'react-native';
import React, {useState} from 'react';
import AppTextStyles from '../../../../constants/AppTextStyles';
import {AppColors} from '../../../../constants/AppColors';
import AppImages from '../../../../constants/AppImages';
import AppImageLazy from '../../../../components/AppImageLazy/AppImageLazy';

type TopicProps = {
  id: string;
  name: string;
  pictureId: string;
  image?: string;
};

interface Props {
  data: TopicProps;
  onPress?: (item: TopicProps) => void;
  height?: DimensionValue;
  width?: DimensionValue;
}

const TopicCardItem = (props: Props) => {
  const {data, onPress, height = 200, width = 140} = props;

  const [isPressing, setPressing] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.3}
      style={{
        height,
        width,
      }}
      onPress={() => {
        if (onPress) {
          onPress(data);
        }
      }}>
      <AppImageLazy
        // activeOpacity={0.3}
        defaultSource={AppImages.empty_image}
        source={{
          uri: 'https://wallpapers.com/images/hd/abstract-background-6m6cjbifu3zpfv84.jpg',
        }}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 8,
          zIndex: 0,
        }}
        onPress={() => {
          if (onPress) {
            onPress(data);
          }
        }}
      />
      <Text
        style={{
          ...AppTextStyles.title3,
          color: AppColors.darkTheme.title,
          position: 'absolute',
          bottom: 16,
          paddingHorizontal: 16,
          zIndex: 100,
        }}>
        {data.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TopicCardItem;
