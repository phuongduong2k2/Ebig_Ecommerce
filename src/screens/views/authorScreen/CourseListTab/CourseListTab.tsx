import {View, Text, FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import AppImages from '../../../../constants/AppImages';
import CourseItem from '../../../../components/CourseItem/CourseItem';

type Props = {};

const CourseListTab = (props: Props) => {
  const renderItem: ListRenderItem<any> = ({item}) => {
    return (
      <CourseItem
        data={{
          description: 'asd',
          price: 1000,
          quantityPerson: 212,
          quantityRate: 123,
          rate: 21,
          tag: 'Course',
          title: 'asdasd',
        }}
        user={{name: 'Duong Quoc Phuong', avatar: AppImages.avatar}}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        scrollEnabled={false}
        data={[1, 2, 3, 4]}
        contentContainerStyle={{paddingHorizontal: 16}}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CourseListTab;
