import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Skeleton} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import useAppNavigation from '../../../../navigation/rootStackParamList';
import AppImageLazy from '../../../../components/AppImageLazy/AppImageLazy';
import AppTextStyles from '../../../../constants/AppTextStyles';
import {AppColors} from '../../../../constants/AppColors';

type Props = {
  data?: any[];
};

const ListBookHorizontal = (props: Props) => {
  const {data} = props;

  const navigation = useAppNavigation();

  const skeletonView = () => {
    return [0, 1, 2, 3].map(item => (
      <View
        key={item}
        style={{
          opacity: 0.5,
          marginRight: 16,
          height: 194,
          justifyContent: 'space-between',
        }}>
        <Skeleton
          height={122}
          width={163}
          style={{
            alignSelf: 'center',
            borderRadius: 8,
          }}
          animation="wave"
          LinearGradientComponent={LinearGradient}
        />
        <Skeleton
          animation="wave"
          LinearGradientComponent={LinearGradient}
          style={{width: '80%', height: 16}}
        />
        <Skeleton
          animation="wave"
          LinearGradientComponent={LinearGradient}
          style={{width: '50%', height: 16}}
        />
        <Skeleton
          animation="wave"
          LinearGradientComponent={LinearGradient}
          style={{width: '70%', height: 12}}
        />
      </View>
    ));
  };

  const renderBook: ListRenderItem<any> = ({index, item}) => {
    return (
      <TouchableOpacity
        style={{width: 163}}
        onPress={() => {
          navigation.navigate('MarketDetailScreen');
        }}>
        <AppImageLazy
          skeletonHeight={122}
          skeletonWidth={163}
          source={{
            uri: 'https://mockups-design.com/wp-content/uploads/2020/02/Free_Book_Mockup_5.jpg',
          }}
          style={{
            resizeMode: 'cover',
            flex: 1,
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
        <Text
          style={{
            marginTop: 4,
            ...AppTextStyles.subtitle3,
            color: AppColors.lightTheme.subtitle,
          }}>
          eBig Education Library
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        marginVertical: 12,
      }}
      ItemSeparatorComponent={() => <View style={{width: 16}} />}
      ListEmptyComponent={skeletonView}
      renderItem={renderBook}
    />
  );
};

export default ListBookHorizontal;
