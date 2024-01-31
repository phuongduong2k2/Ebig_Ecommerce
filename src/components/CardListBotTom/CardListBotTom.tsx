import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../constants/AppColors';
import {AppIcons} from '../../constants/AppIcons';
import AppTextStyles from '../../constants/AppTextStyles';
import AppSvg from '../AppSvg';

interface CardListBotTomProps {
  user: {
    name: string;
    avatar: string;
  };
  data: {
    name: string;
    quantityPost: number;
    quantitySavePost: number;
    listImage: string[];
  };
}
export default function CardListBotTom(props: CardListBotTomProps) {
  return (
    <View
      style={{
        backgroundColor: AppColors.lightTheme.grey1,
        borderRadius: 8,
        gap: 12,
        paddingTop: 16,
        paddingHorizontal: 16,
      }}>
      <View style={{width: '100%', height: 24, flexDirection: 'row'}}>
        <Image
          source={
            props.user.avatar !== '' && props.user.avatar !== undefined
              ? {uri: props.user.avatar}
              : {
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7GRo3ow-AMiXdjB-xOnqb5t5IiOZ5SD3f9lgJ-c&s',
                }
          }
          style={{
            backgroundColor: 'green',
            height: 24,
            width: 24,
            resizeMode: 'contain',
            borderRadius: 1000,
          }}
        />
        <Text
          style={{
            ...AppTextStyles.label3,
            color: AppColors.lightTheme.label,
            marginLeft: 8,
          }}>
          {props.user?.name}
        </Text>
      </View>
      <Text style={[AppTextStyles.title3, {color: AppColors.lightTheme.title}]}>
        {props.data.name}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Text
            style={[
              AppTextStyles.subtitle3,
              {color: AppColors.lightTheme.subtitle},
            ]}>
            10 Bài viết
          </Text>
          <Text
            style={[
              AppTextStyles.subtitle3,
              {color: AppColors.lightTheme.subtitle},
            ]}>
            100 Đã lưu
          </Text>
        </View>
        <AppSvg SvgSrc={AppIcons.icon_bookmark_add} size={17} />
      </View>
      <ScrollView
        style={{marginHorizontal: -16}}
        horizontal={true}
        contentContainerStyle={{gap: 4, flexDirection: 'row'}}>
        {props?.data &&
          props.data.listImage.map((item, index) => (
            <Image
              key={index}
              style={{height: 122, width: 163, borderBottomLeftRadius: 8}}
              source={
                item !== null && item !== ''
                  ? {uri: item}
                  : require('../../../assets/images/post/post.png')
              }
            />
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
