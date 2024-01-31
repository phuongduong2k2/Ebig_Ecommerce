import {View, Text, TouchableOpacity, Image, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {AppIcons} from '../../constants/AppIcons';
import MainAppHeaderProps from './type';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import AppSvg from '../AppSvg';
import {AppColors} from '../../constants/AppColors';
import AppTextStyles from '../../constants/AppTextStyles';
import FilterMarketModal from './FilterMarket';

interface Props {
  title?: string;
  type?: 'Market' | 'Social' | 'Course';
}
type NotiProps = {
  quantity?: number;
  icon: SVGElement;
  style?: ViewStyle;
  onPress?: () => void;
};

const MainAppHeader = (props: Props) => {
  const {title, type} = props;

  const navigation = useNavigation();

  const NotiItem = (data: NotiProps) => {
    const {quantity, icon, style, onPress = () => {}} = data;
    return (
      <TouchableOpacity
        style={{
          minHeight: 24,
          minWidth: 24,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          ...style,
        }}
        onPress={onPress}>
        <View>
          {quantity && (
            <View
              style={{
                position: 'absolute',
                right: -6,
                top: -8,
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 100,
                zIndex: 1,
                height: 18,
                width: 18,
              }}>
              <View
                style={{
                  backgroundColor: '#ED2011',
                  height: '100%',
                  width: '100%',
                  borderRadius: 1000,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    ...AppTextStyles.subtitle4,
                    color: AppColors.darkTheme.title,
                    position: 'absolute',
                    textAlign: 'center',
                  }}>
                  {quantity.toString()}
                </Text>
              </View>
            </View>
          )}
          <AppSvg SvgSrc={icon} size={24} />
        </View>
      </TouchableOpacity>
    );
  };

  const [isVisibleFilterModal, setVisibleFilterModal] = useState(false);

  const renderComboAction = () => {
    return (
      <>
        <NotiItem
          icon={AppIcons.icon_setup_preferences}
          style={{paddingHorizontal: 8}}
          onPress={() => {
            setVisibleFilterModal(true);
          }}
        />
      </>
    );
  };

  return (
    <View
      style={{
        height: 56,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 1,
      }}>
      <FilterMarketModal
        isVisible={isVisibleFilterModal}
        onCloseModal={() => {
          setVisibleFilterModal(false);
        }}
      />
      <Text
        style={{
          ...AppTextStyles.title1,
          color: AppColors.lightTheme.title,
          flex: 1,
        }}
        numberOfLines={1}>
        {title}
      </Text>
      <View style={{flexDirection: 'row', height: '100%'}}>
        {renderComboAction()}
      </View>
    </View>
  );
};

export default MainAppHeader;
