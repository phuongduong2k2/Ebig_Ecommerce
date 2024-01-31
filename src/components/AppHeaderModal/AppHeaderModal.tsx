import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {AppColors} from '../../constants/AppColors';
import AppTextStyles from '../../constants/AppTextStyles';

type Props = {
  title?: string;
  children?: any;
};

const AppHeaderModal = (props: Props) => {
  const {title = 'Title', children = []} = props;
  return (
    <View
      style={{
        height: 56,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: AppColors.lightTheme.border1,
      }}>
      <View style={{position: 'absolute', left: 0, paddingHorizontal: 16}}>
        {children[0] && children[0]}
      </View>
      <Text
        style={{
          ...AppTextStyles.title3,
          color: AppColors.lightTheme.title,
        }}>
        {title}
      </Text>
      <View style={{position: 'absolute', right: 0, paddingHorizontal: 16}}>
        {children[1] && children[1]}
      </View>
    </View>
  );
};

export default AppHeaderModal;
