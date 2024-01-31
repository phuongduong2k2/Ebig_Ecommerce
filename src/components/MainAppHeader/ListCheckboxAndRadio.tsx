import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppTextStyles from '../../constants/AppTextStyles';
import {AppColors} from '../../constants/AppColors';
import AppDivider from '../AppDivider';
import AppSvg from '../AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import CheckBoxCell from '../CheckBoxCell/CheckboxCell';

interface Props {
  data: any[];
  hasLoadMore?: boolean;
  itemSelected?: any;
  onSelected?: (item: any, checked: boolean) => void;
  title?: string;
  type?: 'checkbox' | 'radio';
}

const ListCheckboxAndRadio = (props: Props) => {
  const {
    data = [],
    hasLoadMore = false,
    itemSelected = null,
    onSelected = () => {},
    title = '',
    type = 'checkbox',
  } = props;

  return (
    <View style={{marginTop: 20}}>
      <Text
        style={{
          ...AppTextStyles.title3,
          color: AppColors.lightTheme.title,
          marginBottom: 8,
        }}>
        {title}
      </Text>
      <FlatList
        data={data}
        scrollEnabled={false}
        renderItem={({item}) => {
          return (
            <CheckBoxCell
              text={item.name}
              type={type}
              isChecked={
                itemSelected &&
                (type === 'checkbox'
                  ? itemSelected.some((ite: any) => ite.id === item.id)
                  : itemSelected.id === item.id)
              }
              key={item.id}
              containerStyle={{
                height: 40,
                paddingVertical: 0,
              }}
              textStyle={{marginLeft: 0, paddingLeft: 0}}
              iconStyle={{
                position: 'absolute',
                right: 0,
                borderRadius: type === 'radio' ? 100 : 4,
              }}
              fillColor={type === 'radio' ? 'white' : AppColors.primary}
              iconComponent={
                type === 'radio' &&
                itemSelected && (
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 100,
                      backgroundColor:
                        itemSelected.id !== item.id
                          ? 'white'
                          : AppColors.primary,
                    }}
                  />
                )
              }
              innerIconStyle={{borderRadius: type === 'radio' ? 100 : 4}}
              onPress={checked => {
                onSelected(item, checked);
              }}
            />
          );
        }}
        ListFooterComponent={() => {
          return (
            hasLoadMore && (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                  marginBottom: 20,
                  alignSelf: 'flex-start',
                }}>
                <Text
                  style={{
                    ...AppTextStyles.button2,
                    color: AppColors.primary,
                    marginRight: 4,
                  }}>
                  Xem thêm
                </Text>
                <AppSvg SvgSrc={AppIcons.arrow_down} size={16} />
              </TouchableOpacity>
            )
          );
        }}
      />
      <View style={{height: 12}} />
      <AppDivider marginVertical={0} />
    </View>
  );
};

export default ListCheckboxAndRadio;
