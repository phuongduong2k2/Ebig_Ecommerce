import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList,
  ListRenderItem,
  Image,
  InteractionManager,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import React from 'react';
import MainAppHeader from '../../components/MainAppHeader/MainAppHeader';
import useAppNavigation from '../../navigation/rootStackParamList';
import ListTag from '../../components/ListTag';
import {AppColors} from '../../constants/AppColors';
import ListCardHorizontal from '../../components/ListCardHorizontal';
import AppTextStyles from '../../constants/AppTextStyles';
import AppImageLazy from '../../components/AppImageLazy/AppImageLazy';
import AppButton from '../../components/AppButton';
import Rating from '../../components/Rating/Rating';
import GroupListProduct from './components/groupListProduct';
import OptimizeHeavyScreen from '../../components/OptimizeHeavyScreen/OptimizeHeavyScreen';

const demoData = [
  {
    key: '0',
    name: 'Sách nói',
  },
  {
    key: '1',
    name: 'Khoá học',
  },
  {
    key: '2',
    name: 'Mẫu thuyết trình',
  },
  {
    key: '3',
    name: 'Tài liệu',
  },
];

interface Props {}
const MarketTab = (props: Props) => {
  const navigation = useAppNavigation();

  // const [isDone, setDone] = useState(false);
  // useEffect(() => {
  //   const task = InteractionManager.runAfterInteractions(() => {
  //     setDone(true);
  //   });
  //   return () => {
  //     task.cancel();
  //   };
  // }, []);

  const renderBook: ListRenderItem<any> = ({index, item}) => {
    return (
      <TouchableOpacity
        style={{width: 163}}
        onPress={() => {
          navigation.navigate('MarketDetailScreen');
        }}>
        <AppImageLazy
          source={{
            uri: 'https://mockups-design.com/wp-content/uploads/2020/02/Free_Book_Mockup_5.jpg',
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

  const renderCardInfo: ListRenderItem<any> = ({index, item}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: index === 0 ? 16 : 0,
          borderBottomLeftRadius: index === 0 ? 16 : 0,
          borderTopRightRadius: index === 3 ? 16 : 0,
          borderBottomRightRadius: index === 3 ? 16 : 0,
        }}>
        <TouchableOpacity style={{padding: 16}}>
          <View style={{width: 310}}>
            <Image
              source={{
                uri: 'https://mockups-design.com/wp-content/uploads/2021/01/Free_Book_Mockup_8.jpg',
              }}
              style={{
                resizeMode: 'cover',
                height: 156,
                width: '100%',
                borderRadius: 8,
              }}
            />
            <Text
              style={{
                marginTop: 16,
                ...AppTextStyles.title3,
                color: AppColors.lightTheme.title,
              }}
              numberOfLines={2}>
              The unseen of spending three years at Pixelgrade
            </Text>
            <Text
              style={{
                marginTop: 12,
                ...AppTextStyles.subtitle3,
                color: AppColors.lightTheme.subtitle,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              luctus nisi, ut convallis nunc. Proin purus velit, malesuada{' '}
            </Text>
            <Text
              style={{
                marginTop: 24,
                ...AppTextStyles.button5,
                color: AppColors.lightTheme.subtitle,
              }}>
              EDUCATION
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <MainAppHeader title={'MarketTab'} />
      <OptimizeHeavyScreen>
        <View style={{flex: 1, width: '100%'}}>
          <ListTag
            containerStyle={{backgroundColor: 'white'}}
            itemStyle={{backgroundColor: AppColors.lightTheme.grey1}}
            data={demoData}
            onPress={item => {
              console.log(item);
            }}
          />
          <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{}}>
              <View style={{backgroundColor: 'white', paddingTop: 24}}>
                <Text
                  style={{
                    ...AppTextStyles.title2,
                    color: AppColors.lightTheme.title,
                    marginLeft: 16,
                  }}>
                  Danh mục phổ biến
                </Text>
                <ListCardHorizontal
                  onPress={item => {
                    console.log(item);
                  }}
                  onPressMore={() => {
                    navigation.navigate('AllCategoryScreen');
                  }}
                  containerStyle={{marginBottom: 24}}
                  data={[
                    {id: '0', name: 'WordPress', pictureId: ''},
                    {id: '1', name: 'eCommerce', pictureId: ''},
                    {id: '2', name: 'Site Template', pictureId: ''},
                    {id: '3', name: 'WordPress', pictureId: ''},
                    {id: '4', name: 'WordPress', pictureId: ''},
                  ]}
                />
              </View>
              <View style={{marginVertical: 32}}>
                <View style={{paddingHorizontal: 16}}>
                  <Text
                    style={{
                      ...AppTextStyles.title2,
                      color: AppColors.lightTheme.title,
                    }}>
                    Sản phẩm mới nổi bật
                  </Text>
                  <Text
                    style={{
                      marginTop: 16,
                      ...AppTextStyles.body2,
                      color: AppColors.lightTheme.body,
                    }}>
                    Trở thành thành viên để truy cập và tải xuống muôn vàn sản
                    phẩm kỹ thuật số chất lượng đồng thời kiếm thêm thu nhập khi
                    mở cửa hàng trên eBig
                  </Text>
                </View>
                <View style={{marginTop: 16}}>
                  <FlatList
                    horizontal
                    data={[1, 2, 3, 4]}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingHorizontal: 16,
                      marginVertical: 12,
                    }}
                    ItemSeparatorComponent={() => <View style={{width: 16}} />}
                    renderItem={renderBook}
                  />
                </View>
                <AppButton
                  title="Đăng ký thành viên"
                  containerStyle={{
                    marginTop: 16,
                    height: 40,
                    marginHorizontal: 16,
                    borderRadius: 24,
                    borderWidth: 0,
                    backgroundColor: AppColors.primary,
                  }}
                  textStyle={{
                    ...AppTextStyles.button2,
                    color: AppColors.darkTheme.title,
                  }}
                />
              </View>
              <View style={{backgroundColor: 'white', paddingVertical: 32}}>
                <GroupListProduct
                  title="Sản phẩm nổi bật dưới 200.000đ"
                  data={[1, 2, 3, 4]}
                />
              </View>
              <View style={{backgroundColor: 'white', paddingVertical: 32}}>
                <GroupListProduct
                  title="Bán chạy nhất trong tuần"
                  data={[1, 2, 3, 4]}
                />
              </View>
              <View style={{backgroundColor: 'white', paddingVertical: 32}}>
                <GroupListProduct
                  title="Sản phẩm mới bán chạy nhất"
                  data={[1, 2, 3, 4]}
                />
              </View>
              <View style={{paddingVertical: 32}}>
                <Text
                  style={{
                    ...AppTextStyles.title2,
                    color: AppColors.lightTheme.title,
                    paddingHorizontal: 16,
                  }}>
                  Chúng tôi chia sẻ thông tin cập nhật thường xuyên trên website
                </Text>
                <View style={{marginTop: 24}}>
                  <FlatList
                    data={[1, 2, 3, 4]}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => (
                      <View
                        style={{
                          width: 1,
                          backgroundColor: AppColors.lightTheme.border1,
                          height: '100%',
                        }}
                      />
                    )}
                    contentContainerStyle={{paddingHorizontal: 16}}
                    renderItem={renderCardInfo}
                    horizontal
                  />
                </View>
                <AppButton
                  title="Đọc tất cả bài viết"
                  containerStyle={{
                    width: undefined,
                    paddingHorizontal: 16,
                    height: 40,
                    alignSelf: 'center',
                    marginTop: 24,
                    borderColor: AppColors.primary,
                  }}
                  textStyle={{color: AppColors.primary}}
                />
              </View>
              <View style={{backgroundColor: 'white', paddingVertical: 32}}>
                <Text
                  style={{
                    paddingHorizontal: 16,
                    ...AppTextStyles.title2,
                    color: AppColors.lightTheme.title,
                  }}>
                  Quản lý và bán các sản phẩm kỹ thuật số chưa bao giờ dễ dàng
                  đến thế!
                </Text>
                <Text
                  style={{
                    marginTop: 12,
                    paddingHorizontal: 16,
                    ...AppTextStyles.subtitle3,
                    color: AppColors.lightTheme.subtitle,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris nec gravida ante. Sed sit amet felis non elit dapibus
                  porta. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </Text>
                <View style={{marginVertical: 24, paddingHorizontal: 16}}>
                  <Rating />
                  <Text
                    style={{
                      marginTop: 8,
                      ...AppTextStyles.button4,
                      color: AppColors.lightTheme.title,
                    }}>
                    4.7 out of 5 stars{' '}
                    <Text
                      style={{
                        ...AppTextStyles.button5,
                        color: AppColors.lightTheme.subtitle,
                      }}>
                      from 2.6k reviews
                    </Text>
                  </Text>
                  <View style={{marginTop: 24}}>
                    <ImageBackground
                      source={{
                        uri: 'https://img.freepik.com/premium-psd/video-review-youtube-channel-thumbnail-web-banner-premium-psd_623685-81.jpg',
                      }}
                      borderRadius={24}
                      style={{
                        height: undefined,
                        aspectRatio: 0.8,
                        width: '100%',
                      }}>
                      <View
                        style={{
                          width: '100%',
                          flex: 1,
                          justifyContent: 'flex-end',
                          paddingHorizontal: 16,
                          paddingBottom: 18,
                        }}>
                        <View
                          style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 8,
                            backgroundColor: 'white',
                            opacity: 0.9,
                            padding: 24,
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              ...AppTextStyles.subtitle2,
                              color: AppColors.lightTheme.subtitle,
                            }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fusce dictum ultrices lorem id fringilla.
                            Etiam ut ante vel nisi porta rhoncus sit amet id
                            nunc.
                          </Text>
                          <View>
                            <Text
                              style={{
                                ...AppTextStyles.title5,
                                color: AppColors.lightTheme.title,
                              }}>
                              Jenny Wilson
                            </Text>
                            <Text
                              style={{
                                marginTop: 4,
                                ...AppTextStyles.subtitle3,
                                color: AppColors.lightTheme.subtitle,
                              }}>
                              Project Manager at Microsoft
                            </Text>
                          </View>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </OptimizeHeavyScreen>
    </View>
  );
};

export default MarketTab;
