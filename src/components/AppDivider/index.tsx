import React from 'react';
import {View, ViewStyle} from 'react-native';
import PropTypes from 'prop-types';
import {AppColors} from '../../constants/AppColors';

interface Props {
  marginVertical?: number;
  styleDivider?: ViewStyle;
}

function AppDivider(props: Props) {
  const {marginVertical = 32, styleDivider} = props;
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        marginVertical: marginVertical,
        backgroundColor: AppColors.lightTheme.grey2,
        ...styleDivider,
      }}
    />
  );
}

export default AppDivider;
