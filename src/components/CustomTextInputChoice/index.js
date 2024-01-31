import {View, Text, Animated, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import YesNoChoice from '../YesNoChoice';
import AppTextInput from '../AppTextInput';
import {AppDimentions, InputType} from '../../constants/constants';
import AppRadioButton from '../AppRadioButton';
import AppDivider from '../AppDivider';
import TextStyle from '../../constants/TextStyle';
import AppRadioBox from '../AppRadioBox';
import {AppColors} from '../../constants/AppColors';

const CustomTextInputChoice = React.forwardRef((props, ref) => {
  const {data, onChangeChoice, control, onReset, onChangeText, errors} = props;

  const [isOption, setOption] = useState(false);
  const [displayField, setDisplayField] = useState(false);
  const animMaxHeight = useRef(new Animated.Value(0)).current;
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOption) {
      setDisplayField(true);
      Animated.timing(animMaxHeight, {
        toValue: 250,
        duration: 400,
        useNativeDriver: false,
      }).start();
    } else {
      setDisplayField(false);
      Animated.timing(animMaxHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isOption]);

  const _renderField = (data, fromId) => {
    switch (data.type) {
      case InputType.textInput:
        return (
          <AppTextInput
            borderColor={AppColors.background.grey4}
            control={control}
            onReset={onReset}
            onChangeText={onChangeText}
            errors={errors}
            name={data.label}
            rules={displayField ? data.rules : undefined}
            placeholder={data.label}
          />
        );
      case InputType.radio:
        return (
          <AppRadioBox
            control={control}
            errors={errors}
            name={data.label}
            fields={data.fields}
            required={
              displayField
                ? {value: true, message: 'This radio is required'}
                : undefined
            }
          />
        );
      default:
        return null;
    }
  };

  const _renderComboTextField = (data, fromId) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {data?.fields.map((field, index) => (
          <View key={`${field.label}${index}`} style={{width: '47%'}}>
            <AppTextInput
              control={control}
              borderColor={AppColors.background.grey4}
              errors={errors}
              placeholder={field.label}
              name={field.label}
              rules={displayField ? field.rules : undefined}
            />
          </View>
        ))}
      </View>
    );
  };

  useEffect(() => {
    console.log('render');
    if (errors && errors[data.label]) {
      setError(true);
    } else {
      setError(false);
    }
  }, [errors, errors[data.label]]);

  return (
    <View
      ref={ref}
      style={{
        backgroundColor: 'white',
        margin: AppDimentions.thirdPadding,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: error ? 'red' : 'transparent',
      }}>
      <View style={{padding: AppDimentions.thirdPadding}}>
        <Text style={{...TextStyle.title.t_4, color: 'black'}}>
          {data.label}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: AppDimentions.thirdPadding,
          marginBottom: AppDimentions.thirdPadding,
        }}>
        <AppRadioBox
          control={control}
          fields={['Có', 'Không']}
          name={data.label}
          required={{value: true, message: 'This field required'}}
          onValueChange={value => {
            setOption(value);
            console.log(value);
          }}
        />
        <Button
          title="toggle"
          onPress={() => {
            setOption(!isOption);
          }}
        />
      </View>
      <Animated.View
        style={{
          maxHeight: animMaxHeight,
          opacity: animMaxHeight.interpolate({
            inputRange: [0, 200],
            outputRange: [0, 1],
          }),
        }}>
        <AppDivider
          width={'100%'}
          height={1}
          color={AppColors.background.grey3}
        />
        <View
          style={{
            paddingHorizontal: AppDimentions.thirdPadding,
            marginBottom: AppDimentions.thirdPadding,
          }}>
          {data?.options.map(options => (
            <View key={options.label}>
              <View
                style={{
                  paddingVertical: AppDimentions.thirdPadding,
                }}>
                <Text>{options.label}:</Text>
              </View>
              {options?.isCombo
                ? _renderComboTextField(options, data?.id)
                : _renderField(options, data?.id)}
            </View>
          ))}
        </View>
      </Animated.View>
    </View>
  );
});

export default CustomTextInputChoice;
