import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader';
import AppSvg from '../../../components/AppSvg';
import {AppIcons} from '../../../constants/AppIcons';
import useAppNavigation from '../../../navigation/rootStackParamList';
import {AppColors} from '../../../constants/AppColors';
import AppTextStyles from '../../../constants/AppTextStyles';
import GroupListProduct from '../../marketTab/components/groupListProduct';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {};

const AllCategoryScreen = (props: Props) => {
  const navigation = useAppNavigation();

  const widthScreen = Dimensions.get('screen').width;

  const insets = useSafeAreaInsets();

  const renderCategoryItem: ListRenderItem<any> = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CategoryScreen');
        }}
        style={{
          borderWidth: 1,
          padding: 16,
          borderRadius: 8,
          borderColor: AppColors.lightTheme.border2,
          backgroundColor: 'white',
          width: (widthScreen - 16 * 3) / 2,
        }}>
        <Text
          style={{...AppTextStyles.title3, color: AppColors.lightTheme.title}}>
          WordPresss
        </Text>
        <Text
          style={{
            marginTop: 4,
            ...AppTextStyles.subtitle3,
            color: AppColors.lightTheme.subtitle,
          }}>
          342 sản phẩm
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <AppHeader title={'Tất cả danh mục'} leftTitle={true}>
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
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: insets.bottom + 20}}>
        <View style={{}}>
          <FlatList
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={{paddingHorizontal: 16, paddingTop: 32}}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            ItemSeparatorComponent={() => (
              <View style={{width: 16, height: 16}} />
            )}
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={renderCategoryItem}
          />
        </View>
        <View style={{marginTop: 20, marginBottom: 32}}>
          <GroupListProduct title="Đề suất của eBig" data={[1, 2, 3, 4]} />
        </View>
        <View style={{backgroundColor: 'white', flex: 1}}>
          <View style={{marginTop: 24, marginBottom: 32}}>
            <GroupListProduct
              title="Sản phẩm nổi bật dưới 200.000đ"
              data={[1, 2, 3, 4]}
            />
          </View>
          <View style={{marginVertical: 32}}>
            <GroupListProduct
              title="Bán chạy nhất trong tuần"
              data={[1, 2, 3, 4]}
            />
          </View>
          <View style={{marginVertical: 32}}>
            <GroupListProduct
              title="Sản phẩm mới bán chạy nhất"
              data={[1, 2, 3, 4]}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AllCategoryScreen;
