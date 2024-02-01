import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ListRenderItem,
} from 'react-native';
import React, {useRef} from 'react';
import AppHeader from '../../../../components/AppHeader';
import AppSvg from '../../../../components/AppSvg';
import {AppIcons} from '../../../../constants/AppIcons';
import {CollapsibleRef, Tabs} from 'react-native-collapsible-tab-view';
import AppDivider from '../../../../components/AppDivider';
import AppImages from '../../../../constants/AppImages';
import AppTextStyles from '../../../../constants/AppTextStyles';
import {AppColors} from '../../../../constants/AppColors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppButton from '../../../../components/AppButton';
import RatingGroup from '../../../../components/Rating/RatingGroup';
import {ShareModalUtils} from '../../../../components/ShareModal/ShareModal';
import CustomTabBar from '../../../../components/CustomTabBar';
import useAppNavigation from '../../../../navigation/rootStackParamList';

const ProductDescription = () => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <View
        style={{
          padding: 16,
          marginVertical: 20,
          borderRadius: 8,
          backgroundColor: AppColors.lightTheme.grey1,
        }}>
        {productDescrip.map(item => {
          return (
            <View
              key={item}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 4,
              }}>
              <AppSvg SvgSrc={AppIcons.icon_c_check} size={16} />
              <Text
                style={{
                  marginLeft: 8,
                  ...AppTextStyles.label3,
                  color: AppColors.lightTheme.title,
                }}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
      <Text
        style={{
          ...AppTextStyles.title2,
          color: AppColors.lightTheme.title,
        }}>
        Giới thiệu tổng quan
      </Text>
      <Text
        style={{
          ...AppTextStyles.body1,
          color: AppColors.lightTheme.body,
          marginTop: 8,
        }}>
        Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
        vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra
        vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at
        sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque
        lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam
        aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel
        ornare vel, dignissim a tortor. Morbi ut sapien vitae odio accumsan
        gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque.
        Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc
        sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit
        amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula.
        Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra
        dignissim ut sed leo.
      </Text>
    </View>
  );
};

const Rate = () => {
  return (
    <View
      style={{
        marginVertical: 20,
        flex: 1,
        // paddingBottom: 100,
      }}>
      <RatingGroup />
    </View>
  );
};
const Seller = () => {
  const navigation = useAppNavigation();

  const renderItem: ListRenderItem<any> = ({item, index}) => {
    return (
      <TouchableOpacity style={{width: 163}}>
        <Image
          source={{
            uri: 'https://www.psfreebies.com/wp-content/uploads/Flying-Softcover-Book-Mockup-PSD-Free-Download-1.jpg',
          }}
          style={{
            height: undefined,
            aspectRatio: 163 / 122,
            width: 163,
            resizeMode: 'contain',
          }}
        />
        <Text
          numberOfLines={2}
          style={{
            marginTop: 8,
            ...AppTextStyles.title3,
            color: AppColors.lightTheme.title,
          }}>
          Columbia Men’s Bahama from Education Library Vent PFG Boat Shoe
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 4,
          }}>
          <Image
            source={AppImages.avatar}
            style={{height: 24, width: 24, resizeMode: 'contain'}}
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
              marginLeft: 16,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AppSvg SvgSrc={AppIcons.star.icon_outline_app_star} size={16} />
            <Text
              style={{
                marginLeft: 4,
                ...AppTextStyles.button4,
                color: AppColors.lightTheme.subtitle,
              }}>
              1,2K
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
    <View style={{marginTop: 20, flex: 1}}>
      <View style={{paddingHorizontal: 16}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ExpertProfileScreen');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={AppImages.avatar}
            style={{height: 56, width: 56, resizeMode: 'contain'}}
          />
          <View style={{marginLeft: 16, flex: 1}}>
            <Text
              style={{
                ...AppTextStyles.title1,
                color: AppColors.lightTheme.title,
              }}>
              Phan Minh Anh
            </Text>
            <Text
              style={{
                marginTop: 4,
                ...AppTextStyles.label3,
                color: AppColors.lightTheme.body,
              }}>
              <Text
                style={{
                  ...AppTextStyles.title5,
                  color: AppColors.lightTheme.label,
                }}>
                640
              </Text>{' '}
              Người theo dõi ·{' '}
              <Text
                style={{
                  ...AppTextStyles.title5,
                  color: AppColors.lightTheme.label,
                }}>
                60
              </Text>{' '}
              Đang theo dõi
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            marginVertical: 16,
            ...AppTextStyles.body2,
            color: AppColors.lightTheme.body,
          }}>
          Data Guy working Banking & Finance I write (randomly & sporadically)
          about anything and everything that interests me or worth
          sharing/analysing.
        </Text>
        <View style={{flexDirection: 'row'}}>
          <AppButton
            title={'Nhắn tin'}
            textStyle={{
              ...AppTextStyles.button2,
              color: AppColors.lightTheme.subtitle,
            }}
            containerStyle={{
              flex: 1,
              backgroundColor: AppColors.lightTheme.grey2,
              borderWidth: 0,
              height: 40,
            }}
          />
          <View style={{width: 8}} />
          <AppButton
            title={'Theo dõi'}
            textStyle={{
              ...AppTextStyles.button2,
              color: AppColors.darkTheme.label,
            }}
            containerStyle={{
              flex: 1,
              backgroundColor: AppColors.primary,
              borderWidth: 0,
              height: 40,
            }}
          />
        </View>
      </View>
      <View style={{paddingHorizontal: 16}}>
        <AppDivider marginVertical={24} />
      </View>
      <View>
        <Text
          style={{
            paddingHorizontal: 16,
            ...AppTextStyles.title2,
            color: AppColors.lightTheme.title,
          }}>
          Sản phẩm khác từ Phan Minh Anh
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 16}}
          style={{marginVertical: 24}}
          data={[1, 2, 3, 4, 5]}
          ItemSeparatorComponent={() => <View style={{width: 16}} />}
          horizontal
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const listTab = [
  {
    id: 0,
    name: 'Mô tả sản phẩm',
    Component: ProductDescription,
  },
  {
    id: 1,
    name: 'Đánh giá',
    Component: Rate,
  },
  {
    id: 2,
    name: 'Người bán',
    Component: Seller,
  },
];

interface Props {}

const productDescrip = [
  '20 Web & Mobile Screens',
  'User-friendly and modern layout design',
  'Design System Included',
  'Easy Customization',
  'Organized screen, layer, and components',
];

const MarketDetailScreen = (props: Props) => {
  const {} = props;
  const navigation = useAppNavigation();

  const refTab = useRef<CollapsibleRef>(null);

  const renderHeader = () => {
    return (
      <View style={{paddingHorizontal: 16}}>
        <Image
          source={{
            uri: 'https://colorlib.com/wp/wp-content/uploads/sites/2/8_book-cover-mockup.jpg',
          }}
          style={{width: '100%', aspectRatio: 382 / 232, height: undefined}}
        />
        <Text
          style={{
            marginTop: 20,
            ...AppTextStyles.title1,
            color: AppColors.lightTheme.title,
          }}>
          Thiết kế UI/UX dành cho người mới bắt đầu
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
            marginBottom: 10,
          }}>
          <Image
            source={AppImages.avatar}
            style={{height: 24, width: 24, resizeMode: 'contain'}}
          />
          <Text
            style={{
              marginLeft: 8,
              ...AppTextStyles.label3,
              color: AppColors.lightTheme.subtitle,
            }}>
            Phan Minh Anh
          </Text>
        </View>
      </View>
    );
  };

  const insets = useSafeAreaInsets();

  const scrollViewRef = useRef<any>([]);

  return (
    <View
      style={{flex: 1, backgroundColor: 'white', paddingBottom: insets.bottom}}>
      <AppHeader title={''}>
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
        <>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <AppSvg SvgSrc={AppIcons.icon_heart} size={24} />
            </TouchableOpacity>
            <View style={{width: 16}} />
            <TouchableOpacity
              onPress={() => {
                ShareModalUtils.showModal({title: 'Share book'});
              }}>
              <AppSvg SvgSrc={AppIcons.icon_sharing} size={24} />
            </TouchableOpacity>
          </View>
        </>
      </AppHeader>
      <Tabs.Container
        ref={refTab}
        lazy
        containerStyle={{backgroundColor: 'white'}}
        renderHeader={renderHeader}
        pagerProps={{scrollEnabled: false}}
        initialTabName={listTab[0].name}
        renderTabBar={(props: any) => (
          <CustomTabBar
            scrollViewRef={scrollViewRef}
            MaterialTabBarProps={props}
            ref={refTab}
          />
        )}>
        {listTab.map(({Component, id, name}, index) => {
          return (
            <Tabs.Tab key={name} label={name} name={name}>
              <Tabs.ScrollView
                ref={e => (scrollViewRef.current[index] = e)}
                contentContainerStyle={{
                  paddingBottom: 100,
                }}>
                <Component />
              </Tabs.ScrollView>
            </Tabs.Tab>
          );
        })}
      </Tabs.Container>
      <View
        style={{
          height: 70,
          paddingHorizontal: 16,
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',

          shadowColor: 'rgba(0,0,0,0.4)',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 6,
        }}>
        <View style={{width: '50%'}}>
          <Text
            style={{
              ...AppTextStyles.title1,
              color: AppColors.lightTheme.title,
            }}>
            235.000đ
          </Text>
        </View>
        <AppButton
          title="Thêm vào giỏ hàng"
          onPress={() => {}}
          height={48}
          textStyle={{
            ...AppTextStyles.button1,
            color: AppColors.darkTheme.title,
          }}
          containerStyle={{
            width: '50%',
            borderWidth: 0,
            backgroundColor: AppColors.primary,
          }}
        />
      </View>
    </View>
  );
};

export default MarketDetailScreen;
