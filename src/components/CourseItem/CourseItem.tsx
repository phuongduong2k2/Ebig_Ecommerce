import {View, Image, Text} from 'react-native';
import {AppColors} from '../../constants/AppColors';
import {AppIcons} from '../../constants/AppIcons';
import AppTextStyles from '../../constants/AppTextStyles';
import {formatNumber, formatPrice} from '../../utils';
import AppSvg from '../AppSvg';

interface Props {
  user: {
    name: string;
    avatar: string;
  };
  data: {
    title: string;
    description: string;
    quantityPerson: number;
    rate: number;
    quantityRate: number;
    price: number;
    tag: string;
  };
}
export default function CourseItem(item: Props) {
  return (
    <View style={{borderRadius: 8, paddingTop: 16}}>
      <Image
        style={{width: '100%', borderRadius: 8}}
        source={require('../../../assets/images/course/course.png')}
      />
      <View style={{gap: 8, marginTop: 16}}>
        <View style={{width: '100%', height: 24, flexDirection: 'row'}}>
          <Image
            source={
              item.user.avatar !== '' && item.user.avatar !== undefined
                ? {uri: item.user.avatar}
                : {
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7GRo3ow-AMiXdjB-xOnqb5t5IiOZ5SD3f9lgJ-c&s',
                  }
            }
            style={{
              backgroundColor: 'green',
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
            }}>
            {item.user?.name}
          </Text>
          <View
            style={{
              paddingVertical: 1,
              paddingHorizontal: 8,
              borderRadius: 100,
              backgroundColor: AppColors.infoBackground,
              marginLeft: 20,
            }}>
            <Text style={[AppTextStyles.button3, {color: AppColors.info}]}>
              {item.data.tag}
            </Text>
          </View>
        </View>
        <Text
          style={[AppTextStyles.title3, {color: AppColors.lightTheme.title}]}>
          {item.data.title}
        </Text>
        <Text style={[AppTextStyles.body1, {color: AppColors.lightTheme.body}]}>
          {item.data.description}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <AppSvg SvgSrc={AppIcons.icon_user_profile} size={14} />
            <Text
              style={[
                AppTextStyles.button2,
                {color: AppColors.lightTheme.subtitle},
              ]}>
              {formatNumber(item.data.quantityPerson)}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <AppSvg SvgSrc={AppIcons.star.icon_outline_app_star} size={14} />
            <Text
              style={[
                AppTextStyles.button2,
                {color: AppColors.lightTheme.subtitle},
              ]}>
              {item.data.rate}
              {' ('}
              {formatNumber(item.data.quantityRate)}
              {')'}
            </Text>
          </View>
        </View>
        <Text
          style={[AppTextStyles.title3, {color: AppColors.lightTheme.title}]}>
          {formatPrice(item.data.price)}đ
        </Text>
      </View>
    </View>
  );
}
