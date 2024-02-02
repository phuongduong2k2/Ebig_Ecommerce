import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  InteractionManager,
  ActivityIndicator,
  PanResponder,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ReactNativeModal from 'react-native-modal';
import Share, {Social} from 'react-native-share';
import useAppNavigation, {
  RootStackParamList,
} from '../../../navigation/rootStackParamList';
import {AppColors} from '../../../constants/AppColors';
import BottomSheetKeyboardAvoidingView from '../../../components/BottomSheetKeyboardAvoidingView/BottomSheetKeyboardAvoidingView';
import AppTextStyles from '../../../constants/AppTextStyles';
import AppSvg from '../../../components/AppSvg';
import {AppIcons} from '../../../constants/AppIcons';
import AppHeader from '../../../components/AppHeader';
import {ShareModalUtils} from '../../../components/ShareModal/ShareModal';
import OptimizeHeavyScreen from '../../../components/OptimizeHeavyScreen/OptimizeHeavyScreen';
import AppImages from '../../../constants/AppImages';
import AppImageLazy from '../../../components/AppImageLazy/AppImageLazy';
import AppDivider from '../../../components/AppDivider';
import HashTag from '../../../components/HashTag/HashTag';
import AppButton from '../../../components/AppButton';
import CardPost from '../../../components/CardPost/CardPost';
import SavePostModal from './components/SavePostModal';

interface Props {}
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'PostDetailScreen'>;

const TagList = [
  'Design',
  'Data Visualization',
  'UX Design',
  'UI Design',
  'Visual Design',
];

const PostDetailScreen = (props: Props) => {
  const navigation = useAppNavigation();
  const route = useRoute<DetailsScreenRouteProp>();
  const {title, image} = route.params;

  const insets = useSafeAreaInsets();
  const positionOfComboAction = 48 + 16 + insets.bottom;

  const onEndReached = useSharedValue(false);

  const scrollY = useSharedValue(0);
  const currentScroll = useSharedValue(positionOfComboAction);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      onEndReached.value =
        e.layoutMeasurement.height + e.contentOffset.y >= e.contentSize.height;
      if (e.contentOffset.y >= 0) {
        if (e.contentOffset.y > scrollY.value) {
          // scroll down
          if (currentScroll.value > 0) {
            currentScroll.value =
              currentScroll.value - (e.contentOffset.y - scrollY.value) / 2;
            if (currentScroll.value < 0) {
              currentScroll.value = 0;
            }
          }
        } else if (!onEndReached.value) {
          // scroll up
          if (currentScroll.value < positionOfComboAction) {
            currentScroll.value =
              currentScroll.value - (e.contentOffset.y - scrollY.value) / 2;
            if (currentScroll.value > positionOfComboAction) {
              currentScroll.value = positionOfComboAction;
            }
          }
        }
      }
      scrollY.value = e.contentOffset.y;
    },
  });

  const comboActionStyles = useAnimatedStyle(() => {
    return {
      height: 48,
      // width: 100,
      borderWidth: 1,
      position: 'absolute',
      top: 0,
      borderColor: AppColors.lightTheme.border1,
      backgroundColor: 'white',
      borderRadius: 40,
      transform: [{translateY: -currentScroll.value}],
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOpacity: 0.27,
      shadowRadius: 4,
      elevation: 6,
    };
  });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (
          currentScroll.value >= (positionOfComboAction * 1) / 3 &&
          currentScroll.value !== positionOfComboAction
        ) {
          currentScroll.value = withTiming(positionOfComboAction);
        }
        if (
          currentScroll.value < (positionOfComboAction * 1) / 3 &&
          currentScroll.value !== 0
        ) {
          currentScroll.value = withTiming(0);
        }
      },
    }),
  ).current;

  const [isVisibleSettingModal, setVisibleSettingModal] = useState(false);

  const SettingModal = () => {
    return (
      <BottomSheetKeyboardAvoidingView
        height={0.5}
        isVisible={isVisibleSettingModal}
        onCloseModal={() => {
          setVisibleSettingModal(false);
        }}>
        <View
          style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              height: 56,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: AppColors.lightTheme.border2,
            }}>
            <Text
              style={{
                ...AppTextStyles.title3,
                color: AppColors.lightTheme.title,
              }}>
              Cài đặt hiển thị
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 0, paddingHorizontal: 16}}
              onPress={() => {
                setVisibleSettingModal(false);
              }}>
              <AppSvg SvgSrc={AppIcons.icon_close} size={24} />
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, paddingHorizontal: 16, marginTop: 20}}>
            <Text
              style={{
                ...AppTextStyles.label2,
                color: AppColors.lightTheme.title,
              }}>
              Kiểu chữ
            </Text>
            <View style={{width: '100%', marginTop: 12}}>
              <FlatList
                data={[1, 2, 3]}
                horizontal
                ItemSeparatorComponent={() => <View style={{width: 12}} />}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{
                      height: 48,
                      borderWidth: 1,
                      borderColor: AppColors.lightTheme.border1,
                      width: 110,
                      borderRadius: 8,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: AppColors.lightTheme.body}}>
                      Default
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <Text
              style={{
                ...AppTextStyles.label2,
                color: AppColors.lightTheme.title,
                marginTop: 24,
              }}>
              Cỡ chữ
            </Text>
            <View style={{width: '100%', marginTop: 12}}>
              <FlatList
                data={[1, 2, 3]}
                horizontal
                ItemSeparatorComponent={() => <View style={{width: 12}} />}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{
                      height: 48,
                      borderWidth: 1,
                      borderColor: AppColors.lightTheme.border1,
                      width: 110,
                      borderRadius: 8,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: AppColors.lightTheme.body}}>
                      Default
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
      </BottomSheetKeyboardAvoidingView>
    );
  };

  const [isSavePostModalVisible, setSavePostModalVisible] = useState(false);

  const [isDone, setDone] = useState(false);

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      setDone(true);
    });
    return () => {
      task.cancel();
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      {SettingModal()}
      <SavePostModal
        isVisible={isSavePostModalVisible}
        onSaved={() => {
          console.log('saved');
        }}
        onCloseModal={() => {
          setSavePostModalVisible(false);
        }}
      />
      <AppHeader title={'Chi tiết bài viết'}>
        <>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <AppSvg SvgSrc={AppIcons.icon_left_arrow} size={24} />
          </TouchableOpacity>
        </>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{marginRight: 16}}
            onPress={() => {
              ShareModalUtils.showModal({
                title: 'Chia sẻ bài viết',
              });
            }}>
            <AppSvg SvgSrc={AppIcons.icon_sharing} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              setVisibleSettingModal(true);
            }}>
            <AppSvg SvgSrc={AppIcons.icon_display_setting} size={24} />
          </TouchableOpacity>
        </View>
      </AppHeader>
      <OptimizeHeavyScreen>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}>
          <Animated.ScrollView
            {...panResponder.panHandlers}
            onScroll={scrollHandler}
            contentContainerStyle={{
              paddingHorizontal: 16,
              backgroundColor: 'white',
            }}>
            <View style={{marginVertical: 24}}>
              <Text
                style={{
                  ...AppTextStyles.title1,
                  color: AppColors.lightTheme.title,
                }}>
                Dishonest fonts, sustainable design, how to be strategic, color
                with gen AI
              </Text>
              <Text
                style={{
                  ...AppTextStyles.subtitle1,
                  color: AppColors.lightTheme.subtitle,
                  marginTop: 4,
                }}>
                The Superpower of Inclusivity: Designing for Humans, Not Aliens.
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={AppImages.avatar}
                style={{resizeMode: 'contain', height: 56, width: 56}}
              />
              <View style={{flex: 1, marginLeft: 12}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      ...AppTextStyles.label1,
                      color: AppColors.lightTheme.title,
                    }}>
                    Phan Minh Anh
                  </Text>
                  <Text
                    style={{
                      ...AppTextStyles.label3,
                      color: AppColors.lightTheme.label,
                    }}>
                    {' '}
                    ·{' '}
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        ...AppTextStyles.button1,
                        color: AppColors.primary,
                      }}>
                      Theo dõi
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 4,
                  }}>
                  <Text
                    style={{
                      ...AppTextStyles.subtitle2,
                      color: AppColors.lightTheme.subtitle,
                    }}>
                    Đã đăng trong
                    <Text
                      onPress={() => {
                        console.log('press');
                      }}
                      style={{
                        ...AppTextStyles.button2,
                        color: AppColors.lightTheme.label,
                      }}>
                      {' '}
                      UI/UX cho người mới bắt đầu
                    </Text>
                  </Text>
                </View>
                <Text
                  style={{
                    ...AppTextStyles.subtitle2,
                    color: AppColors.lightTheme.subtitle,
                    marginTop: 4,
                  }}>
                  12 tháng 09
                </Text>
              </View>
            </View>
            <View style={{marginTop: 24}}>
              <AppImageLazy
                source={{uri: image}}
                style={{
                  resizeMode: 'stretch',
                  width: '100%',
                  height: 286,
                }}
              />
              <Text
                style={{
                  ...AppTextStyles.subtitle3,
                  color: AppColors.lightTheme.subtitle,
                  textAlign: 'center',
                  marginTop: 8,
                }}>
                Data tables are important for most enterprise projects and
                products
              </Text>
            </View>
            <AppDivider />
            <View>
              <Text
                style={{
                  ...AppTextStyles.title2,
                  color: AppColors.lightTheme.title,
                }}>
                Các chủ đề liên quan
              </Text>
              <View
                style={{
                  marginTop: 24,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {TagList.map(item => (
                  <HashTag key={item} title={item} />
                ))}
              </View>
            </View>
            <AppDivider marginVertical={32} />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={AppImages.avatar}
                  style={{resizeMode: 'contain', height: 64, width: 64}}
                />
                <AppButton
                  height={32}
                  title="Theo dõi"
                  containerStyle={{
                    paddingHorizontal: 16,
                    backgroundColor: AppColors.primary,
                    borderWidth: 0,
                    alignSelf: 'flex-end',
                  }}
                  textStyle={{
                    ...AppTextStyles.button2,
                    color: AppColors.darkTheme.title,
                  }}
                />
              </View>
              <Text
                style={{
                  ...AppTextStyles.title2,
                  color: AppColors.lightTheme.title,
                  marginTop: 8,
                }}>
                Phan Minh Anh
              </Text>
              <Text
                style={{
                  ...AppTextStyles.subtitle2,
                  color: AppColors.lightTheme.subtitle,
                }}>
                200 Bài viết · 334 Người theo dõi
              </Text>
              <Text
                style={{
                  ...AppTextStyles.body1,
                  color: AppColors.lightTheme.body,
                  marginTop: 8,
                }}>
                Hello! I'm Cameron Williamson, a UI/UX enthusiast that is
                currently studying Software Engeneering at Universitas
                Pendidikan
              </Text>
            </View>
            <AppDivider marginVertical={32} />
            <Text style={{...AppTextStyles.title2}}>
              Nhiều bài viết hơn từ Phan Minh Anh
            </Text>
            <FlatList
              data={[1, 2, 3, 4]}
              ItemSeparatorComponent={() => <AppDivider marginVertical={24} />}
              renderItem={({item}) => <CardPost />}
              scrollEnabled={false}
            />
          </Animated.ScrollView>
          <View
            style={{
              // zIndex: 99,
              height: 32,
              // borderWidth: 1,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              bottom: -32 - insets.bottom,
              left: 0,
              width: '100%',
            }}>
            <Animated.View
              style={[
                {
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                },
                comboActionStyles,
              ]}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <AppSvg SvgSrc={AppIcons.icon_like} size={20} />
                <Text
                  style={{
                    ...AppTextStyles.button2,
                    color: AppColors.lightTheme.subtitle,
                    marginLeft: 4,
                  }}>
                  1,2K
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => {
                  //   navigation.navigate('CommentScreen');
                }}>
                <AppSvg SvgSrc={AppIcons.icon_chat} size={20} />
                <Text
                  style={{
                    ...AppTextStyles.button2,
                    color: AppColors.lightTheme.subtitle,
                    marginLeft: 4,
                  }}>
                  1,2K
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setSavePostModalVisible(true);
                }}>
                <AppSvg SvgSrc={AppIcons.icon_bookmark_add} size={20} />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </OptimizeHeavyScreen>
    </View>
  );
};

export default PostDetailScreen;
