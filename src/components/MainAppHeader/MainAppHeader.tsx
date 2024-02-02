import {View, Text, FlatList, ListRenderItem} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {AppIcons} from '../../constants/AppIcons';
import {useNavigation} from '@react-navigation/native';
import {AppColors} from '../../constants/AppColors';
import AppTextStyles from '../../constants/AppTextStyles';
import NotiItem from './NotiItem';

interface Props {
  title?: string;
  rightContentComponent?: () => ReactNode;
}

const listItemHeader = [
  {id: 0, name: 'Cart', icon: AppIcons.icon_shopping_cart, quantity: 10},
  {id: 1, name: 'Notification', icon: AppIcons.icon_bell, quantity: 10},
  {id: 2, name: 'Chat', icon: AppIcons.icon_chat, quantity: 10},
];

const MainAppHeader = (props: Props) => {
  const {title, rightContentComponent = null} = props;

  const navigation = useNavigation();

  const renderItem: ListRenderItem<any> = ({item}) => {
    return (
      <NotiItem
        onPress={() => {
          console.log(item.name);
        }}
        key={item.id}
        icon={item.icon}
        quantity={item.quantity}
        style={{paddingHorizontal: 8}}
      />
    );
  };

  return (
    <View
      style={{
        height: 56,
        paddingLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 1,
      }}>
      <Text
        style={{
          ...AppTextStyles.title1,
          color: AppColors.lightTheme.title,
          flex: 1,
        }}
        numberOfLines={1}>
        {title}
      </Text>
      <View>
        {rightContentComponent ? (
          rightContentComponent()
        ) : (
          <FlatList
            horizontal
            data={listItemHeader}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{paddingRight: 8}}
            scrollEnabled={false}
          />
        )}
      </View>
    </View>
  );
};

export default MainAppHeader;
