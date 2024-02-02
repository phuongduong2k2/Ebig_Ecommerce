import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import MainSearchTabHeader from './components/searchScreenHeader';
import SearchButton from '../../components/SearchButton';
import ListTag from '../../components/ListTag';
import {AppColors} from '../../constants/AppColors';
import GroupListProduct from '../marketTab/components/groupListProduct';

type Props = {};

const listTagData = [
  {
    key: '0',
    name: 'Tất cả',
  },
  {
    key: '1',
    name: 'Khoá học',
  },
  {
    key: '2',
    name: 'Mẫu thuyết trình',
  },
  {
    key: '3',
    name: 'Tài liệu',
  },
];

const SearchTab = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <MainSearchTabHeader title="Tìm kiếm sản phẩm" />
      <SearchButton title="Tìm kiếm" />
      <ListTag
        containerStyle={{backgroundColor: 'white', height: 48}}
        itemStyle={{backgroundColor: AppColors.lightTheme.grey1}}
        data={listTagData}
        onPress={item => {
          console.log(item);
        }}
      />
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'white',
              paddingTop: 24,
              paddingBottom: 32,
            }}>
            <GroupListProduct title="Đã xem gần đây" data={[1, 2, 3, 4]} />
          </View>
          <View
            style={{
              paddingTop: 32,
              paddingBottom: 32,
            }}>
            <GroupListProduct title="Đề xuất của eBig" data={[1, 2, 3, 4]} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchTab;
