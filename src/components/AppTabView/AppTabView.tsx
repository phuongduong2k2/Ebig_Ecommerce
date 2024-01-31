import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  PanResponder,
  PanResponderInstance,
} from 'react-native';
import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {
  NavigationState,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view';
import {AppIcons} from '../../constants/AppIcons';
import AppSvg from '../AppSvg';
import {AppColors} from '../../constants/AppColors';
import AppTextStyles from '../../constants/AppTextStyles';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import useAppNavigation from '../../navigation/rootStackParamList';
import {Layout} from 'react-native-tab-view/lib/typescript/src/types';
import {TabActions, useNavigation} from '@react-navigation/native';

type RouteProps = {
  key: string;
  title: string;
};

interface Props {
  routes: RouteProps[];
  animationEnabled?: boolean;
  renderScene: (
    props: SceneRendererProps & {route: RouteProps},
  ) => React.ReactNode;
  onIndexChange?: (index: number) => void;
  // initialLayout?: Partial<Layout>;
  onPressAdd?: () => void;
}

const AppTabView = (props: Props) => {
  const {routes, animationEnabled, onIndexChange, renderScene, onPressAdd} =
    props;

  // const isLogin = useLoginState();

  const navigation = useAppNavigation();
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();

  const [itemWidths, setItemWidths] = useState<Record<string, any>>([]);
  const widthIndicator = useSharedValue(0);
  const posIndicator = useSharedValue(16 + 24 + 24);
  const positionsRef = useRef<{
    [key: string]: {
      width: number;
      pos: number;
    };
  }>({});
  useEffect(() => {
    StartIndicator(routes[index].key);
  }, [itemWidths]);

  const StartIndicator = (key: string) => {
    if (Object.keys(positionsRef.current).includes(key)) {
      widthIndicator.value = withTiming(positionsRef.current[key].width);
      posIndicator.value = withTiming(positionsRef.current[key].pos);
      refScrollView.current?.scrollTo({
        x:
          positionsRef.current[key].pos -
          (layout.width - positionsRef.current[key].width) / 2,
        animated: true,
      });
    }
  };

  useEffect(() => {
    StartIndicator(routes[index].key);
    if (onIndexChange) {
      onIndexChange(index);
    }
  }, [index]);

  const refScrollView = useRef<ScrollView>(null);

  const renderTabBar = (props: any) => {
    const {jumpTo} = props;
    return (
      <View
        style={{
          width: '100%',
          height: 48,
          backgroundColor: AppColors.lightTheme.white,
          // borderBottomWidth: 1,
          borderColor: AppColors.lightTheme.border2,
          zIndex: 1000,
        }}>
        <ScrollView
          style={{}}
          ref={refScrollView}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            {/* {isLogin && onPressAdd && (
              <View
                style={{
                  height: '100%',
                  marginLeft: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{}}
                  onPress={() => {
                    onPressAdd();
                    // navigation.navigate('CustomizeTopicScreen');
                    //   setRoutes([
                    //     ...routes,
                    //     {
                    //       key: `Demo Tab_${routes.length}`,
                    //       title: `Demo_Tab_${routes.length}`,
                    //     },
                    //   ]);
                  }}>
                  <AppSvg SvgSrc={AppIcons.icon_e_add} size={24} />
                </TouchableOpacity>
              </View>
            )} */}
            {routes.map((ite, ind) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setIndex(ind);
                    jumpTo(ite.key);
                  }}
                  key={ite.key}
                  onLayout={e => {
                    const {width, x} = e.nativeEvent.layout;
                    const preState = {...itemWidths};
                    if (
                      Object.keys(preState).includes(ite.key) &&
                      itemWidths[ite?.key]?.width === width &&
                      itemWidths[ite?.key]?.x === x
                    ) {
                      return;
                    }
                    positionsRef.current[ite.key] = {
                      width: width,
                      pos: x,
                    };
                    preState[ite.key] = {
                      width: width,
                      pos: x,
                    };
                    setItemWidths(preState);
                  }}
                  style={{
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // marginLeft: isLogin ? 24 : 8,
                    marginRight: ind === routes.length - 1 ? 16 : 0,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      height: 32,
                      borderRadius: 20,
                      // backgroundColor: !isLogin
                      //   ? AppColors.lightTheme.grey1
                      //   : undefined,
                      // paddingHorizontal: isLogin ? 0 : 16,
                    }}>
                    <Text
                      style={{
                        ...AppTextStyles.label3,
                        color:
                          index === ind
                            ? AppColors.primary
                            : AppColors.lightTheme.subtitle,
                      }}>
                      {ite.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            <Animated.View
              style={{
                left: posIndicator,
                height: 2,
                width: widthIndicator,
                // backgroundColor: isLogin ? AppColors.primary : 'transparent',
                position: 'absolute',
                bottom: 0,
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      animationEnabled={animationEnabled}
      // swipeEnabled={false}
      onIndexChange={index => {
        setIndex(index);
        if (onIndexChange) {
          onIndexChange(index);
        }
      }}
      initialLayout={{width: layout.width}}
    />
  );
};

export default AppTabView;
