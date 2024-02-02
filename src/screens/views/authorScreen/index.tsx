import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useRef} from 'react';
import PostTab from './PostTab/PostTab';
import CourseListTab from './CourseListTab/CourseListTab';
import SalesListTab from './SalesListTab/SalesListTab';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useAppNavigation from '../../../navigation/rootStackParamList';
import {CollapsibleRef, Tabs} from 'react-native-collapsible-tab-view';
import AppImages from '../../../constants/AppImages';
import AppTextStyles from '../../../constants/AppTextStyles';
import {AppColors} from '../../../constants/AppColors';
import AppButton from '../../../components/AppButton';
import AppHeader from '../../../components/AppHeader';
import {AppIcons} from '../../../constants/AppIcons';
import AppSvg from '../../../components/AppSvg';
import {ShareModalUtils} from '../../../components/ShareModal/ShareModal';
import CustomTabBar from '../../../components/CustomTabBar';

const listTab = [
  {
    id: 0,
    name: 'Bài viết',
    Component: PostTab,
  },
  {
    id: 1,
    name: 'Danh sách khoá học',
    Component: CourseListTab,
  },
  {
    id: 2,
    name: 'Danh sách bán hàng',
    Component: SalesListTab,
  },
];

type Props = {};

const AuthorScreen = (props: Props) => {
  const navigation = useAppNavigation();

  const refTab = useRef<CollapsibleRef>(null);

  const scrollViewRef = useRef<any>([]);

  const renderHeader = () => {
    return (
      <View style={{paddingHorizontal: 16, paddingTop: 24, paddingBottom: 12}}>
        <View
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
        </View>
        <Text
          numberOfLines={3}
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
              backgroundColor: AppColors.lightTheme.grey1,
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
    );
  };

  const insets = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <AppHeader title={'Phan Minh Anh'}>
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
          <TouchableOpacity
            onPress={() => {
              ShareModalUtils.showModal({title: 'Share Profile'});
            }}>
            <AppSvg SvgSrc={AppIcons.icon_sharing} size={24} />
          </TouchableOpacity>
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
                  paddingBottom: 24 + insets.bottom,
                }}>
                <Component />
              </Tabs.ScrollView>
            </Tabs.Tab>
          );
        })}
      </Tabs.Container>
    </View>
  );
};

export default AuthorScreen;
