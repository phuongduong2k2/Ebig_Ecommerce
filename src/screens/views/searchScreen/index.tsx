import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import useAppNavigation from '../../../navigation/rootStackParamList';
import AppTextStyles from '../../../constants/AppTextStyles';
import {AppColors} from '../../../constants/AppColors';
import {AppIcons} from '../../../constants/AppIcons';
import AppSvg from '../../../components/AppSvg';
import AppDivider from '../../../components/AppDivider';
import AppHeader from '../../../components/AppHeader';
import AppTextInput from '../../../components/AppTextInput';

const testDataRecentlySearch = [
  {
    id: 0,
    name: 'tai nghe',
  },
  {
    id: 1,
    name: 'tai nghe bluetooth',
  },
  {
    id: 2,
    name: 'tai nghe có dây',
  },
];

type Props = {};

const SearchScreen = (props: Props) => {
  const navigation = useAppNavigation();

  const [searchText, setSearchText] = useState('');

  const renderRecentlySearch = (data: any[]) => {
    return (
      <>
        <Text
          style={{
            marginBottom: 12,
            ...AppTextStyles.title5,
            color: AppColors.lightTheme.subtitle,
          }}>
          Tìm kiếm gần đây
        </Text>
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
          style={{borderRadius: 8, backgroundColor: 'white'}}
          data={data}
          renderItem={item => {
            return (
              <View
                style={{
                  height: 30,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <AppSvg SvgSrc={AppIcons.icon_search} size={20} />
                <TouchableOpacity
                  style={{
                    flex: 1,
                    height: '100%',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      marginLeft: 12,
                      ...AppTextStyles.title5,
                      color: AppColors.lightTheme.label,
                    }}>
                    {item.item.name}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <AppSvg SvgSrc={AppIcons.icon_close} size={20} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </>
    );
  };

  const renderResultSearch = () => {
    return (
      <>
        <Text
          style={{
            marginBottom: 12,
            ...AppTextStyles.title5,
            color: AppColors.lightTheme.subtitle,
          }}>
          Kết quả tìm kiếm
        </Text>
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
          data={[1, 2, 3]}
          style={{borderRadius: 8, backgroundColor: 'white'}}
          ItemSeparatorComponent={() => <AppDivider marginVertical={8} />}
          renderItem={item => {
            return (
              <TouchableOpacity
                style={{
                  height: 22,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    flex: 1,
                    ...AppTextStyles.title5,
                    color: AppColors.lightTheme.label,
                  }}>
                  dasda
                </Text>
                <AppSvg SvgSrc={AppIcons.icon_arrow_right} size={20} />
              </TouchableOpacity>
            );
          }}
        />
      </>
    );
  };

  const widthScreen = Dimensions.get('screen').width;

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
      <AppHeader title={'Tìm kiếm'}>
        <></>
        <>
          <TouchableOpacity
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}>
            <Text style={{...AppTextStyles.button2, color: AppColors.primary}}>
              Huỷ bỏ
            </Text>
          </TouchableOpacity>
        </>
      </AppHeader>
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}>
        <AppTextInput
          height={40}
          valueDefault={searchText}
          onChangeValue={text => {
            setSearchText(text);
          }}
          placeholder="Tìm kiếm"
          onClearValue={() => {
            setSearchText('');
          }}
          style={{
            color: AppColors.lightTheme.label,
            ...AppTextStyles.body1,
            lineHeight: 0,
          }}
          prefixIcon={AppIcons.icon_search}
          backgroundColor={AppColors.lightTheme.grey1}
        />
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: 16, paddingTop: 16}}>
          {searchText.length > 0
            ? renderResultSearch()
            : renderRecentlySearch(testDataRecentlySearch)}
        </View>
        {searchText.length === 0 && (
          <View style={{marginTop: 28}}>
            <Text
              style={{
                marginBottom: 12,
                ...AppTextStyles.title5,
                color: AppColors.lightTheme.subtitle,
                marginLeft: 16,
              }}>
              Gợi ý tìm kiếm
            </Text>
            <FlatList
              numColumns={2}
              scrollEnabled={false}
              contentContainerStyle={{paddingHorizontal: 16}}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              ItemSeparatorComponent={() => (
                <View style={{width: 16, height: 16}} />
              )}
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              renderItem={renderCategoryItem}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
