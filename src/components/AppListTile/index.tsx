import {ReactNode} from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {View} from 'react-native-animatable';
import AppSvg from '../AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import AppTextStyles from '../../constants/AppTextStyles';
import {AppColors} from '../../constants/AppColors';

type Props = {
  onPressTile?: () => void;
  backgroundColor?: string | any;
  listTileStyle?: ViewStyle;
  titleView?: ReactNode;
  title?: string;
  titleStyle?: TextStyle;
  subTitleView?: ReactNode;
  subTitle?: string;
  subTitleStyle?: TextStyle;
  avatarView?: ReactNode;
  actionView?: ReactNode;
  isClose?: boolean;
  onPressClose?: () => void;
};

const AppListTile = (props: Props) => {
  const {
    onPressTile,
    onPressClose,
    backgroundColor,
    listTileStyle,
    titleView = undefined,
    subTitleView = undefined,
    title = '',
    titleStyle,
    subTitle = '',
    subTitleStyle,
    actionView = undefined,
    avatarView = undefined,
    isClose = false,
  } = props;
  return (
    <TouchableOpacity
      disabled={onPressTile ? false : true}
      onPress={onPressTile}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingVertical: 16,
          backgroundColor: backgroundColor,
          borderRadius: 8,
          alignItems: subTitleView || subTitle != '' ? 'flex-start' : 'center',
          alignContent: 'space-between',
          ...listTileStyle,
        }}>
        <View style={{flexDirection: 'column', paddingRight: 16}}>
          <View style={{flexDirection: 'row'}}>{avatarView}</View>
        </View>
        <View style={{flexDirection: 'column', flex: 1}}>
          {titleView ? (
            titleView
          ) : title != '' ? (
            <Text
              numberOfLines={3}
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#00204d',
                textAlign: 'left',
                flex: 1,
                ...titleStyle,
              }}>
              {title}
            </Text>
          ) : null}
          {subTitleView ? (
            subTitleView
          ) : subTitle != '' ? (
            <View style={{paddingTop: 4}}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 12,
                  lineHeight: 16,
                  color: 'rgba(0, 32, 77, 0.6)',
                  ...subTitleStyle,
                }}>
                {subTitle}
              </Text>
            </View>
          ) : null}
        </View>
        <View style={{flexDirection: 'column', paddingLeft: 16}}>
          <View style={{flexDirection: 'row'}}>
            {isClose ? (
              <TouchableOpacity onPress={onPressClose}>
                <AppSvg SvgSrc={AppIcons.close_circle} size={24} />
              </TouchableOpacity>
            ) : null}
            {actionView}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppListTile;
