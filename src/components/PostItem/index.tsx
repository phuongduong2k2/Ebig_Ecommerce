import {
  View,
  Text,
  Image,
  ViewStyle,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import moment from 'moment';
import 'moment/locale/vi';
import useAppNavigation from '../../navigation/rootStackParamList';
import {AppColors} from '../../constants/AppColors';
import AppTextStyles from '../../constants/AppTextStyles';
import AppSvg from '../AppSvg';
import AppImages from '../../constants/AppImages';
import {AppIcons} from '../../constants/AppIcons';

type topicProps = {
  title?: string;
  image?: any;
};

type postProps = {
  id?: string | '';
  title?: string;
  content?: string;
  topicId?: string;
  categoryId?: string;
  totalLike?: number;
  totalComment?: number;
  createdAt?: string;
  user: {
    customerId?: string;
    pictureId?: ImageSourcePropType;
  };
  post: topicProps;
};

interface Props {
  data: postProps;
}

type ComboItemProps = {
  icon: SVGElement;
  quantity?: number;
  styles?: ViewStyle;
};

const PostItem = (props: Props) => {
  const {data} = props;
  const {
    categoryId = '',
    content = '',
    user = {},
    createdAt = '',
    id = '',
    title = '',
    topicId = '',
    totalComment = 0,
    totalLike = 0,
  } = data;

  const navigation = useAppNavigation();

  const formatDate = (data: string) => {
    moment.locale('vi');
    return moment(data).format('Do MMMM');
  };

  const ComboItem = (data: ComboItemProps) => {
    const {quantity, styles} = data;
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 24,
          paddingVertical: 8,
          minWidth: 32,

          ...styles,
        }}>
        <AppSvg SvgSrc={data.icon} size={16} />
        <Text
          style={{
            ...AppTextStyles.button2,
            marginLeft: 4,
            color: AppColors.lightTheme.subtitle,
          }}>
          {quantity?.toString()}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          //   navigation.navigate('AuthorsPersonalPage');
        }}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={user?.pictureId ?? AppImages.avatar}
          style={{
            height: 24,
            width: 24,
            resizeMode: 'contain',
            borderRadius: 1000,
          }}
        />
        <Text
          style={{
            ...AppTextStyles.label3,
            color: AppColors.lightTheme.label,
            marginLeft: 8,
            maxWidth: 150,
          }}
          numberOfLines={1}>
          {user?.customerId ?? 'Unknown'}
        </Text>
        <Text
          style={{
            ...AppTextStyles.subtitle2,
            color: AppColors.lightTheme.subtitle,
          }}>
          {' '}
          · {formatDate(createdAt!.toString())}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'row', marginTop: 9}}
        onPress={() => {
          navigation.navigate('PostDetailScreen', {
            title: 'asdasd',
            image:
              'https://cdn.dribbble.com/users/384937/screenshots/17235595/media/5ff440d5f9713acaaf915a5f5b40df03.png?resize=1000x750&vertical=center',
          });
        }}>
        <View style={{flex: 1}}>
          <Text
            numberOfLines={3}
            style={{
              ...AppTextStyles.title3,
              color: AppColors.lightTheme.title,
            }}>
            {title}
          </Text>
          <Text
            numberOfLines={3}
            style={{
              marginTop: 8,
              ...AppTextStyles.body1,
              color: AppColors.lightTheme.body,
            }}>
            {content}
          </Text>
          {/* <HashTag title="UI Design" styles={{marginTop: 12}} /> */}
        </View>
        <Image
          source={AppImages.post}
          style={{height: 80, width: 80, marginLeft: 16, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 8,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', width: '50%'}}>
            <ComboItem icon={AppIcons.icon_heart} quantity={totalLike} />
            <ComboItem
              icon={AppIcons.icon_chat}
              quantity={totalComment}
              styles={{marginLeft: 16}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '50%',
              justifyContent: 'flex-end',
            }}>
            <ComboItem icon={AppIcons.icon_bookmark_add} />
            <ComboItem icon={AppIcons.icon_sharing} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
