import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native';
import React from 'react';
import AppImages from '../../constants/AppImages';
import AppTextStyles from '../../constants/AppTextStyles';
import {AppColors} from '../../constants/AppColors';
import AppSvg from '../AppSvg';
import {AppIcons} from '../../constants/AppIcons';

type Props = {};

const PostSavedItem = (props: Props) => {
  const {} = props;

  const renderItem: ListRenderItem<any> = ({item}) => {
    return (
      <Image
        source={{
          uri: 'https://wallpapercave.com/wp/wp10203482.jpg',
        }}
        style={{
          height: 122,
          width: undefined,
          aspectRatio: 1.3,
        }}
      />
    );
  };

  return (
    <View
      style={{
        paddingTop: 16,
        backgroundColor: AppColors.lightTheme.grey1,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: AppColors.lightTheme.grey2,
      }}>
      <View style={{paddingHorizontal: 16}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={AppImages.avatar}
            style={{height: 24, width: 24, resizeMode: 'contain'}}
          />
          <Text
            style={{
              marginLeft: 8,
              ...AppTextStyles.label3,
              color: AppColors.lightTheme.label,
            }}>
            Danh mục của tôi
          </Text>
        </View>
        <View style={{marginVertical: 12}}>
          <Text
            style={{
              ...AppTextStyles.title3,
              color: AppColors.lightTheme.title,
            }}>
            Bài viết đã lưu
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
            <Text
              style={{
                flex: 1,
                ...AppTextStyles.subtitle2,
                color: AppColors.lightTheme.subtitle,
              }}>
              0 Bài viết
            </Text>
            <TouchableOpacity>
              <AppSvg SvgSrc={AppIcons.icon_trash} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        style={{borderBottomRightRadius: 8, borderBottomLeftRadius: 8}}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 4}} />}
        data={[1, 2, 3]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PostSavedItem;
