import {View, Text, FlatList} from 'react-native';
import React from 'react';
import AppDivider from '../../../../components/AppDivider';
import PostItem from '../../../../components/PostItem';

type Props = {};

const testDataPost: any = [1, 2, 3, 4];
const PostTab = (props: Props) => {
  return (
    <FlatList
      scrollEnabled={false}
      ItemSeparatorComponent={() => <AppDivider marginVertical={24} />}
      data={testDataPost}
      contentContainerStyle={{paddingBottom: 24}}
      // ListEmptyComponent={() => {
      //   return dataPost !== null ? (
      //     <FlatList
      //       data={[1, 2, 3]}
      //       ItemSeparatorComponent={postDivider}
      //       renderItem={() => <PostItemSkeleton />}
      //     />
      //   ) : (
      //     <Image
      //       source={{
      //         uri: 'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png',
      //       }}
      //       style={{
      //         resizeMode: 'contain',
      //         width: '100%',
      //         height: 200,
      //       }}
      //     />
      //   );
      // }}
      renderItem={({item}) => {
        return <PostItem data={item} />;
      }}
    />
  );
};

export default PostTab;
