import {ViewStyle, TextStyle} from 'react-native';
import React, {ReactNode, useEffect, useState} from 'react';
import {AppColors} from '../../constants/AppColors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AppTextStyles from '../../constants/AppTextStyles';

interface Props {
  onPress?: (checked: boolean) => void;
  text?: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: ViewStyle;
  isChecked?: boolean;
  innerIconStyle?: ViewStyle;
  iconComponent?: ReactNode;
  fillColor?: string;
  unfillColor?: string;
  type?: 'checkbox' | 'radio';
}

const CheckBoxCell = (props: Props) => {
  const {
    onPress = () => {},
    text = 'Text',
    containerStyle = {},
    textStyle = {},
    iconStyle = {},
    isChecked = false,
    innerIconStyle = {},
    iconComponent = undefined,
    fillColor = AppColors.primary,
    unfillColor = 'white',
    type = 'checkbox',
  } = props;
  const [isPressChecked, setPressChecked] = useState(isChecked);

  useEffect(() => {
    setPressChecked(isChecked);
  }, [isChecked]);

  return (
    <BouncyCheckbox
      unfillColor={unfillColor}
      style={{
        paddingVertical: 16,
        ...containerStyle,
      }}
      useNativeDriver={true}
      disableBuiltInState={true}
      textContainerStyle={{
        marginLeft: 12,
      }}
      textStyle={{
        textDecorationLine: 'none',
        ...AppTextStyles.label2,
        color: AppColors.lightTheme.label,
        ...textStyle,
      }}
      iconComponent={iconComponent}
      isChecked={isPressChecked}
      text={text}
      iconStyle={{
        borderRadius: 4,
        width: 20,
        height: 20,
        ...iconStyle,
      }}
      fillColor={fillColor}
      innerIconStyle={{
        borderRadius: 4,
        borderWidth: 2,
        borderColor: isPressChecked
          ? AppColors.primary
          : AppColors.lightTheme.grey2,
        height: 20,
        width: 20,
        ...innerIconStyle,
      }}
      onPress={() => {
        onPress(!isPressChecked);
        if (type === 'radio') {
          return;
        }
        setPressChecked(!isPressChecked);
      }}
    />
  );
};

export default CheckBoxCell;
