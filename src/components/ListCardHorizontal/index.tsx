import {View, Text, FlatList, ViewStyle, ListRenderItem} from 'react-native';
import React from 'react';
import AppButton from '../AppButton';
import {AppColors} from '../../constants/AppColors';
import AppTextStyles from '../../constants/AppTextStyles';

import TopicCardItemSkeleton from '../../screens/marketTab/components/topicCardItemSkeleton';
import TopicCardItem from '../../screens/marketTab/components/topicCardItem';

type DataProp = {
  id: string;
  name: string;
  pictureId: string;
};

interface Props {
  data: DataProp[];
  contentContainerStyle?: ViewStyle;
  onPress?: (item: any) => void;
  itemHeight?: number;
  itemWidth?: number;
  containerStyle?: ViewStyle;
  onPressMore?: () => void;
}

const ListCardHorizontal = (props: Props) => {
  const {
    data,
    contentContainerStyle,
    onPress = () => {},
    itemHeight = 200,
    itemWidth = 140,
    containerStyle,
    onPressMore = () => {},
  } = props;

  const getItemLayoutTopic = (_: any, index: any) => ({
    length: 140,
    offset: 140 * index + 16,
    index,
  });

  const renderTopicItem: ListRenderItem<any> = ({item, index}) => (
    <TopicCardItem
      height={itemHeight}
      width={itemWidth}
      onPress={item => {
        onPress(item);
      }}
      data={item}
    />
  );

  const ListFooterComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          width: 140,
          marginLeft: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AppButton
          title="Xem thêm"
          onPress={onPressMore}
          textStyle={{...AppTextStyles.button2, color: AppColors.primary}}
          containerStyle={{
            paddingHorizontal: 16,
            borderColor: AppColors.primary,
          }}
          height={40}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        getItemLayout={getItemLayoutTopic}
        style={{marginTop: 20, marginBottom: 16, ...containerStyle}}
        ListEmptyComponent={() => {
          return [1, 2, 3].map(item => (
            <TopicCardItemSkeleton
              key={item}
              height={itemHeight}
              width={itemWidth}
              style={{
                marginLeft: item === 1 ? 0 : 16,
              }}
            />
          ));
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          height: itemHeight,
          ...contentContainerStyle,
        }}
        ItemSeparatorComponent={() => <View style={{width: 16}} />}
        renderItem={renderTopicItem}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

export default ListCardHorizontal;
