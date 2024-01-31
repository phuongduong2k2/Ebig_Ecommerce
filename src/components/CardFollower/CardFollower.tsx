import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../constants/AppColors';
import AppButton from '../AppButton';
import AppTextStyles from '../../constants/AppTextStyles';

type DataProps = {
  avatar: ImageSourcePropType;
  name: string;
  introduce: string;
};

interface Props {
  data: DataProps;
  onFollow?: () => void;
  onUnfollow?: () => void;
}

const CardFollower = (props: Props) => {
  const {data, onFollow, onUnfollow} = props;
  const [isFollowed, setFollowed] = useState(false);
  return (
    <View
      style={{
        paddingHorizontal: 16,
        flexDirection: 'row',
      }}>
      <View>
        <Image
          source={data.avatar}
          style={{height: 40, width: 40, resizeMode: 'contain'}}
        />
      </View>
      <View style={{flex: 1, marginLeft: 12}}>
        <Text
          style={{
            ...AppTextStyles.title3,
            color: AppColors.lightTheme.title,
          }}>
          {data.name}
        </Text>
        <Text
          numberOfLines={4}
          style={{
            marginTop: 4,
            ...AppTextStyles.subtitle2,
            color: AppColors.lightTheme.subtitle,
          }}>
          {data.introduce}
        </Text>
      </View>
      <View
        style={{
          height: '100%',
          marginLeft: 16,
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            zIndex: isFollowed ? 1 : 0,
            opacity: isFollowed ? 1 : 0,
          }}>
          <AppButton
            width={118}
            title="Đang theo dõi"
            containerStyle={{borderColor: AppColors.primary}}
            textStyle={{color: AppColors.primary}}
            onPress={() => {
              setFollowed(false);
              if (onUnfollow) {
                onUnfollow();
              }
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            zIndex: isFollowed ? 0 : 1,
            opacity: !isFollowed ? 1 : 0,
          }}>
          <AppButton
            title="Theo dõi"
            width={84}
            containerStyle={{
              paddingHorizontal: 10,
              borderWidth: 0,
              backgroundColor: AppColors.primary,
            }}
            textStyle={{
              color: AppColors.darkTheme.title,
              ...AppTextStyles.button2,
            }}
            onPress={() => {
              setFollowed(true);
              if (onFollow) {
                onFollow();
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CardFollower;
