import React, {
  MutableRefObject,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  DimensionValue,
  Keyboard,
  KeyboardType,
  LayoutAnimation,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import PropTypes, {any} from 'prop-types';
import {AppIcons} from '../../constants/AppIcons';
import {Controller} from 'react-hook-form';
import {AppDimentions, KeyboardTypes} from '../../constants/constants';
import styles from './style';
import {AppColors} from '../../constants/AppColors';
import AppSvg from '../AppSvg';
import AppTextStyles from '../../constants/AppTextStyles';

interface Props {
  onChangeValue?: (value: string) => void;
  prefixIcon?: SVGPathElement;
  suffixIcon?: SVGPathElement;
  height?: DimensionValue;
  numberOfLines?: number;
  multiline?: boolean;
  containerStyle?: ViewStyle;
  placeholderTextColor?: string;
  keyboardType?: KeyboardType;
  onBlur?: () => void;
  onFocus?: () => void;
  placeholder?: string;
  valueDefault?: string;
  editable?: boolean;
  isPassword?: boolean;
  control?: any;
  errors?: any;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  onSubmitEditing?: () => void;
  style?: TextStyle;
  onClearValue?: () => void;
}
const AppTextInput = forwardRef((props: Props, ref: any) => {
  const {
    prefixIcon = undefined,
    suffixIcon = AppIcons.close_circle,
    height,
    numberOfLines,
    multiline,
    onChangeValue = () => {},
    containerStyle = {},
    placeholderTextColor = AppColors.lightTheme.placeholder,
    keyboardType = 'default',
    onBlur = () => {},
    onFocus = () => {},
    onSubmitEditing = () => {},
    editable = true,
    isPassword = false,
    control,
    errors,
    backgroundColor = AppColors.lightTheme.white,
    borderColor = AppColors.lightTheme.grey1,
    borderWidth = 1,
    placeholder = 'Placeholder',
    valueDefault = undefined,
    style = {},
    onClearValue = () => {},
  } = props;

  const [isFocused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  // Keyboard Listener
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      // console.log('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      // console.log('Keyboard Hidden');
      setFocused(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // Animated show error
  const animated = useRef(new Animated.Value(0)).current;

  const firstTime = useRef(true);

  useEffect(() => {
    // Collapse 1 time
    console.log(firstTime.current);
    if (firstTime.current && isFocused) {
      // if (isFocused) {
      Animated.timing(animated, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      // } else {
      //   Animated.timing(animated, {
      //     toValue: 0,
      //     duration: 300,
      //     useNativeDriver: false,
      //   }).start();
      // }
      firstTime.current = false;
    }
  }, [isFocused]);

  // Input Ref
  const textInputRef = useRef<TextInput>(null);

  return (
    <View
      style={{
        height: height,
        paddingHorizontal: multiline ? 0 : 16,
        paddingRight: multiline ? 16 : undefined,
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: backgroundColor,
        borderColor: isFocused ? AppColors.primary : borderColor,
        borderWidth: borderWidth,
        ...containerStyle,
      }}>
      {prefixIcon && (
        <View
          style={{
            height: '100%',
            marginRight: 8,
            justifyContent: 'center',
          }}>
          <AppSvg SvgSrc={prefixIcon} size={16} />
        </View>
      )}
      <TextInput
        value={valueDefault}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        style={{
          ...AppTextStyles.placeholder2,

          // multiline
          height: multiline ? '100%' : undefined,
          padding: multiline ? 16 : 0,
          paddingTop: multiline ? 16 : undefined,

          // default
          margin: 0,
          lineHeight: undefined,
          flex: 1,

          ...style,
        }}
        secureTextEntry={isPassword}
        placeholderTextColor={placeholderTextColor}
        editable={editable}
        ref={textInputRef}
        onSubmitEditing={() => {
          Keyboard.dismiss();
          onSubmitEditing();
        }}
        onChangeText={value => {
          setValue(value);
          onChangeValue(value);
        }}
        blurOnSubmit={true}
        keyboardType={keyboardType}
        onBlur={() => {
          onBlur;
          setFocused(false);
        }}
        onFocus={() => {
          onFocus();
          setFocused(true);
        }}
      />
      {suffixIcon && value && (
        <TouchableOpacity
          onPress={() => {
            if (textInputRef && textInputRef.current) {
              textInputRef.current.clear();
            }
            setValue('');
            onClearValue();
          }}>
          <View
            style={{
              height: '100%',
              marginRight: 8,
              justifyContent: 'center',
            }}>
            <AppSvg
              SvgSrc={suffixIcon}
              size={16}
              color={AppColors.lightTheme.subtitle}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
});

export default AppTextInput;
