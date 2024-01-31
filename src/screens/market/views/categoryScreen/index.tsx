import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AppHeader from '../../../../components/AppHeader';
import AppSvg from '../../../../components/AppSvg';
import {AppIcons} from '../../../../constants/AppIcons';
import useAppNavigation from '../../../../navigation/rootStackParamList';

type Props = {
  title?: string;
};

const CategoryScreen = (props: Props) => {
  const {title = 'Category'} = props;

  const navigation = useAppNavigation();

  return (
    <View style={{flex: 1}}>
      <AppHeader title={title} leftTitle={true}>
        <>
          <TouchableOpacity
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}>
            <AppSvg SvgSrc={AppIcons.icon_left_arrow} size={24} />
          </TouchableOpacity>
        </>
        <></>
      </AppHeader>
      <Text>CategoryScreen</Text>
    </View>
  );
};

export default CategoryScreen;
