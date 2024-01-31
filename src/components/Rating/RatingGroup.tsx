import {View, Text} from 'react-native';
import React from 'react';
import {AppColors} from '../../constants/AppColors';
import AppSvg from '../AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import Rating from './Rating';
import AppProgressBar from '../AppProgressBar';
import AppTextStyles from '../../constants/AppTextStyles';

interface Props {}

const RatingGroup = (props: Props) => {
  const {} = props;
  return (
    <View
      style={{
        paddingVertical: 24,
        paddingHorizontal: 16,
        backgroundColor: AppColors.lightTheme.grey1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{width: 85}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              ...AppTextStyles.title1,
              fontSize: 32,
              fontWeight: '600',
              lineHeight: 48,
              color: AppColors.lightTheme.body,
            }}>
            4.7
          </Text>
          <AppSvg
            SvgSrc={AppIcons.star.active}
            size={24}
            style={{marginLeft: 4}}
          />
        </View>
        <Text
          style={{...AppTextStyles.title5, color: AppColors.lightTheme.body}}>
          11K Đánh giá
        </Text>
      </View>
      <View style={{flex: 1, marginLeft: 25, marginRight: 16}}>
        {[1, 2, 3, 4, 5].map(item => {
          return (
            <View key={item} style={{height: 22, justifyContent: 'center'}}>
              <AppProgressBar
                borderWidth={0}
                unfilledColor={AppColors.lightTheme.grey2}
                progress={0.2 * (5 - item + 1)}
                color={AppColors.primary}
              />
            </View>
          );
        })}
      </View>
      <View>
        {[1, 2, 3, 4, 5].map(item => {
          return (
            <View
              key={item}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 22,
                justifyContent: 'center',
              }}>
              <Rating initActive={5 - item + 1} numberStars={5} />
              <Text
                style={{
                  ...AppTextStyles.label4,
                  color: AppColors.lightTheme.body,
                }}>
                {'(9.245)'}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default RatingGroup;
