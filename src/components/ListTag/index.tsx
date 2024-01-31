import {
  View,
  Text,
  FlatList,
  Button,
  FlatListProps,
  ListRenderItem,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import AppTextStyles from '../../constants/AppTextStyles';
import {AppColors} from '../../constants/AppColors';
import {AppIcons} from '../../constants/AppIcons';
import AppSvg from '../AppSvg';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type TagObj = {
  name: string;
  key: string;
};

interface Props {
  data: TagObj[];
  onPress?: (item: TagObj) => void;
  contentContainerStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const ListTag = (props: Props) => {
  const {
    data = [],
    onPress = () => {},
    containerStyle,
    contentContainerStyle,
    itemStyle,
    textStyle,
  } = props;

  const renderTopic: ListRenderItem<TagObj> = ({item, index}) => {
    return (
      <View
        style={{
          height: 32,
          borderRadius: 100,
          backgroundColor: 'white',
          alignSelf: 'center',
          ...itemStyle,
        }}>
        <TouchableOpacity
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            onPress(item);
          }}>
          <Text
            style={{
              ...AppTextStyles.button2,
              color: AppColors.lightTheme.subtitle,
              paddingHorizontal: 12,
              ...textStyle,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const AddTopicTag = () => {
    return (
      <View
        style={{
          height: '100%',
          width: 24,
          marginLeft: 16,

          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 24,
          }}
          onPress={() => {}}>
          <AppSvg SvgSrc={AppIcons.icon_e_add} size={20} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItemSeparator = () => <View style={{width: 8}} />;

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 16,
          ...contentContainerStyle,
        }}
        renderItem={renderTopic}
        ListEmptyComponent={() => {
          return [1, 2, 3].map(item => (
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                height={32}
                width={91}
                borderRadius={24}
              />
            </SkeletonPlaceholder>
          ));
        }}
        // ListHeaderComponent={() => <AddTopicTag />}
        keyExtractor={item => item.key}
        style={{height: 64, ...containerStyle}}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </View>
  );
};

export default ListTag;
