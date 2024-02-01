import {View, Text, TouchableOpacity} from 'react-native';
import React, {forwardRef} from 'react';
import {MaterialTabBar, useFocusedTab} from 'react-native-collapsible-tab-view';
import useAppNavigation from '../../navigation/rootStackParamList';
import AppSvg from '../AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import {AppColors} from '../../constants/AppColors';
import AppTextStyles from '../../constants/AppTextStyles';

interface Props {
  MaterialTabBarProps: any;
  onPress?: () => void;
  scrollViewRef?: any;
}

const CustomTabBar = forwardRef((props: Props, ref: any) => {
  const {
    MaterialTabBarProps = null,
    onPress = () => {},
    scrollViewRef = null,
  } = props;

  const focusedTab = useFocusedTab();

  const navigation = useAppNavigation();

  return (
    <MaterialTabBar
      {...MaterialTabBarProps}
      scrollEnabled
      // keepActiveTabCentered
      TabItemComponent={(props: any) =>
        props.name !== 'ADD' ? (
          <TouchableOpacity
            activeOpacity={0.6}
            {...props}
            style={{marginLeft: props.index === 0 ? 16 : 24}}
            onPress={() => {
              onPress();
              if (ref && ref.current && scrollViewRef?.current) {
                const {header, tabBar} = ref.current.getHeight();
                const currentIndex = ref.current.getCurrentIndex();
                const currentPageScrollPos =
                  scrollViewRef.current[currentIndex].getCurrentScroll();
                console.log(header - currentPageScrollPos);
                if (header - currentPageScrollPos >= 0) {
                  if (scrollViewRef.current) {
                    scrollViewRef.current.map((item: any, i: number) => {
                      if (i === currentIndex) {
                        return;
                      }
                      scrollViewRef.current[i].scrollTo({
                        y: currentPageScrollPos - (header + tabBar),
                        animated: true,
                      });
                    });
                  }
                } else if (scrollViewRef.current) {
                  const currentIndex = ref.current.getCurrentIndex();
                  scrollViewRef.current.map((item: any, i: number) => {
                    if (i === currentIndex) {
                      return;
                    }
                    scrollViewRef.current[i].scrollTo({
                      y: -tabBar,
                      animated: true,
                    });
                  });
                }
              }

              if (ref.current) {
                ref.current.jumpToTab(props.name);
              }
            }}>
            <Text
              style={{
                paddingVertical: 13,
                ...AppTextStyles.label3,
                color:
                  focusedTab === props.name
                    ? AppColors.primary
                    : AppColors.lightTheme.subtitle,
              }}>
              {props.name}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            {...props}
            style={{paddingLeft: 16}}
            onPress={() => {
              //   navigation.navigate('PersonalRecommendTabScreen');
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AppSvg SvgSrc={AppIcons.icon_e_add} size={20} />
            </View>
          </TouchableOpacity>
        )
      }
      contentContainerStyle={{
        paddingRight: 16,
      }}
    />
  );
});

export default CustomTabBar;
