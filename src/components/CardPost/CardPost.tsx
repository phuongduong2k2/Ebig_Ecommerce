import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppImages from '../../constants/AppImages';
import AppTextStyles from '../../constants/AppTextStyles';
import {AppColors} from '../../constants/AppColors';
import AppSvg from '../AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import useAppNavigation from '../../navigation/RootStackParamList';
import {useRoute} from '@react-navigation/core';
import AppImageLazy from '../AppImageLazy/AppImageLazy';

type dataProps = {
  image: Image;
  title: string;
  like: string;
  comment: string;
  description: string;
  dateCreated: string;
  user: {
    name: string;
    avatar: Image;
  };
};

interface Props {
  data?: dataProps;
  onPressShare?: () => void;
}

const CardPost = (props: Props) => {
  const {data, onPressShare} = props;
  //   const {comment, dateCreated, description, image, like, title, user} = data;
  const navigation = useAppNavigation();
  const route = useRoute();

  const onPressPost = () => {
    if (route.name === 'PostDetailTabScreen') {
      navigation.replace('PostDetailTabScreen', {
        title: 'adsfasdf',
        image:
          'https://cdn.dribbble.com/users/384937/screenshots/17235595/media/5ff440d5f9713acaaf915a5f5b40df03.png?resize=1000x750&vertical=center',
      });
    } else
      navigation.navigate('PostDetailTabScreen', {
        title: 'adsfasdf',
        image:
          'https://cdn.dribbble.com/users/384937/screenshots/17235595/media/5ff440d5f9713acaaf915a5f5b40df03.png?resize=1000x750&vertical=center',
      });
  };

  const onPressAuthor = () => {};

  return (
    <View>
      <AppImageLazy
        onPress={onPressPost}
        source={{
          uri: 'https://cdn.dribbble.com/users/384937/screenshots/17235595/media/5ff440d5f9713acaaf915a5f5b40df03.png?resize=1000x750&vertical=center',
        }}
        style={{
          resizeMode: 'stretch',
          height: 192,
          width: '100%',
        }}
      />
      <TouchableOpacity
        style={{marginTop: 16, flexDirection: 'row', alignItems: 'center'}}
        onPress={onPressAuthor}>
        <Image
          source={AppImages.avatar}
          style={{resizeMode: 'contain', height: 24, width: 24}}
        />
        <Text
          style={{
            ...AppTextStyles.label3,
            marginLeft: 8,
            color: AppColors.lightTheme.label,
          }}>
          Phan Minh Anh
        </Text>
        <Text
          style={{
            ...AppTextStyles.subtitle2,
            color: AppColors.lightTheme.subtitle,
          }}>
          {' '}
          · 12 tháng 09
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 12, height: 120}}
        onPress={onPressPost}>
        <Text
          numberOfLines={2}
          style={{...AppTextStyles.title3, color: AppColors.lightTheme.title}}>
          10 Principles of Good Website Design in 2023
        </Text>
        <Text
          numberOfLines={3}
          style={{
            ...AppTextStyles.body1,
            color: AppColors.lightTheme.body,
            marginTop: 8,
          }}>
          The world of website design is constantly evolving. As new
          technologies emerge, new website design principles
        </Text>
      </TouchableOpacity>
      <View style={{marginTop: 16, flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AppSvg SvgSrc={AppIcons.icon_like} size={16} />
            <Text
              style={{
                ...AppTextStyles.button2,
                color: AppColors.lightTheme.subtitle,
                marginLeft: 4,
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
            <AppSvg SvgSrc={AppIcons.icon_chat} size={16} />
            <Text
              style={{
                ...AppTextStyles.button2,
                color: AppColors.lightTheme.subtitle,
                marginLeft: 4,
              }}>
              1,2K
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => {
              console.log('save post');
            }}>
            <AppSvg SvgSrc={AppIcons.icon_bookmark_add} size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginLeft: 16}}
            onPress={() => {
              console.log('share post');
              if (onPressShare) {
                onPressShare();
              }
            }}>
            <AppSvg SvgSrc={AppIcons.icon_sharing} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardPost;
