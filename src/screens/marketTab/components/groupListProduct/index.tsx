import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import React from 'react';
import AppTextStyles from '../../../../constants/AppTextStyles';
import {AppColors} from '../../../../constants/AppColors';
import AppImages from '../../../../constants/AppImages';
import AppImageLazy from '../../../../components/AppImageLazy/AppImageLazy';
import {AppIcons} from '../../../../constants/AppIcons';
import AppSvg from '../../../../components/AppSvg';
import AppButton from '../../../../components/AppButton';
import useAppNavigation from '../../../../navigation/RootStackParamList';

type Props = {
  title?: string;
  data: any[];
  onPressMore?: () => void;
};

const GroupListProduct = (props: Props) => {
  const {title = 'Title', data = [], onPressMore = () => {}} = props;

  const navigation = useAppNavigation();

  const ListFooterComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          width: 163,
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

  const renderProduct: ListRenderItem<any> = ({index, item}) => {
    return (
      <TouchableOpacity
        style={{width: 163}}
        onPress={() => {
          console.log(item);
          navigation.navigate('MarketDetailScreen');
        }}>
        <AppImageLazy
          source={{
            uri: 'https://assets-global.website-files.com/642d682a6e4ca0d303c81fdf/64fdb9580e029101ef849b6b_ezgif-5-5568221f2c.webp',
          }}
          style={{
            resizeMode: 'cover',
            width: '100%',
            height: 122,
            borderRadius: 8,
          }}
        />
        <Text
          style={{
            ...AppTextStyles.title3,
            color: AppColors.lightTheme.title,
            marginTop: 4,
          }}
          numberOfLines={2}>
          Columbia Men’s Bahama from Education Library Vent PFG Boat Shoe
        </Text>
        <View
          style={{marginTop: 4, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={AppImages.avatar}
            resizeMode="contain"
            style={{height: 24, width: 24}}
          />
          <Text
            style={{
              marginLeft: 8,
              ...AppTextStyles.label5,
              color: AppColors.lightTheme.subtitle,
            }}>
            Phan Minh Anh
          </Text>
        </View>
        <View
          style={{
            marginTop: 4,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppSvg SvgSrc={AppIcons.icon_user_profile} size={16} />
            <Text
              style={{
                marginLeft: 4,
                ...AppTextStyles.button4,
                color: AppColors.lightTheme.subtitle,
              }}>
              1,2K
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 16,
            }}>
            <AppSvg SvgSrc={AppIcons.star.icon_outline_app_star} size={16} />
            <Text
              style={{
                marginLeft: 4,
                ...AppTextStyles.button4,
                color: AppColors.lightTheme.subtitle,
              }}>
              4.7 (1,2K)
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 12,
            ...AppTextStyles.title3,
            color: AppColors.lightTheme.title,
          }}>
          565.000đ
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text
        style={{
          ...AppTextStyles.title2,
          color: AppColors.lightTheme.title,
          paddingHorizontal: 16,
        }}>
        {title}
      </Text>
      <View style={{marginTop: 20}}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 16}}
          ItemSeparatorComponent={() => <View style={{width: 16}} />}
          renderItem={renderProduct}
          horizontal
          ListFooterComponent={ListFooterComponent}
        />
      </View>
    </View>
  );
};

export default GroupListProduct;
