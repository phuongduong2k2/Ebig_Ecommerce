import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ListRenderItem,
} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader';
import AppSvg from '../../../components/AppSvg';
import {AppIcons} from '../../../constants/AppIcons';
import ListTag from '../../../components/ListTag';
import {AppColors} from '../../../constants/AppColors';
import GroupListProduct from '../../marketTab/components/groupListProduct';
import AppTextStyles from '../../../constants/AppTextStyles';
import useAppNavigation from '../../../navigation/RootStackParamList';

type Props = {
  title?: string;
};

const listTagData = [
  {key: '0', name: 'Sách nói'},
  {key: '1', name: 'Khoá học'},
  {key: '2', name: 'Mẫu thuyết trình'},
  {key: '3', name: 'Tài liệu nghiên cứu'},
  {key: '4', name: 'Sách nói'},
];

const listDemo = [
  {
    id: 0,
    title: 'Sản phẩm được đánh giá cao',
  },
  {
    id: 1,
    title: 'Sản phẩm có nhiều lượt bình luận nhất',
  },
  {
    id: 2,
    title: 'Sản phẩm được đánh giá cao',
  },
];

const CategoryScreen = (props: Props) => {
  const {title = 'WordPress Templates'} = props;

  const navigation = useAppNavigation();

  const renderItem: ListRenderItem<any> = ({item}) => {
    return (
      <View
        style={{
          height: 110,
          width: 183,
          backgroundColor: 'black',
          borderRadius: 8,
          padding: 16,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{color: AppColors.darkTheme.title, ...AppTextStyles.title3}}>
          {item.title}
        </Text>
        <Text
          style={{color: AppColors.darkTheme.label, ...AppTextStyles.button2}}>
          Danh sách
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <AppHeader title={title} leftTitle={true}>
        <>
          <TouchableOpacity
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}>
            <AppSvg SvgSrc={AppIcons.icon_left_arrow} size={24} />
          </TouchableOpacity>
        </>
        <></>
      </AppHeader>
      <ListTag
        data={listTagData}
        itemStyle={{backgroundColor: AppColors.lightTheme.grey1}}
        containerStyle={{height: 64, backgroundColor: 'white'}}
      />
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              paddingVertical: 32,
            }}>
            <GroupListProduct title="Đề xuất của eBig" data={[1, 2, 3, 4]} />
          </View>
          <View
            style={{
              paddingTop: 24,
              paddingBottom: 32,
              backgroundColor: 'white',
            }}>
            <GroupListProduct
              title="Sản phẩm dưới 200.000đ"
              data={[1, 2, 3, 4]}
            />
          </View>
          <View>
            <FlatList
              data={listDemo}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={{width: 16}} />}
              contentContainerStyle={{paddingHorizontal: 16}}
            />
          </View>
          <View
            style={{
              paddingVertical: 32,
              backgroundColor: 'white',
            }}>
            <GroupListProduct title="Bán chạy trong tuần" data={[1, 2, 3, 4]} />
          </View>
          <View
            style={{
              paddingVertical: 32,
              backgroundColor: 'white',
            }}>
            <GroupListProduct
              title="Sản phẩm mới bán chạy nhất"
              data={[1, 2, 3, 4]}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CategoryScreen;
