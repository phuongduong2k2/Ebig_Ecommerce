import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Animated, Button, Text, TouchableOpacity, View} from 'react-native';
import {AppDimentions, AppSnackBarStatus} from '../../constants/constants';
import {AppIcons} from '../../constants/AppIcons';
import AppSvg from '../AppSvg';

const ref = createRef();

const AppSnackBar = forwardRef((props, ref) => {
  const [state, setState] = useState({
    isVisible: false,
    status: AppSnackBarStatus.default,
    isSoft: false,
  });
  const [title, setTitle] = useState('');
  const [onPress, setOnPress] = useState(() => () => {});
  const [textIconBtn, setTextIconBtn] = useState(undefined);

  const [timer, setTimer] = useState(0);

  const [primaryColor, setPrimaryColor] = useState('white');
  const [iconState, setIcon] = useState(undefined);

  const iCount = useRef(0);

  const propsRef = createRef(ref);

  const animated = useRef(new Animated.Value(0)).current;

  const show = data => {
    const {
      title,
      isSoft,
      duration = 2000,
      textIconBtn,
      func,
      status,
      primaryColor,
      icon = undefined,
    } = data;
    let pmColor;
    if (primaryColor) {
      pmColor = primaryColor;
    } else {
      switch (data.status) {
        case 'success':
          pmColor = 'rgba(46, 181, 83, 1)';
          break;
        case 'failed':
          pmColor = 'rgba(245, 34, 45, 1)';
          break;
        case 'warning':
          pmColor = 'rgba(250, 140, 22, 1)';
          break;
        case 'info':
          pmColor = 'rgba(24, 144, 255, 1)';
          break;
        default:
          pmColor = 'rgba(38, 38, 38, 1)';
      }
    }
    setIcon(icon);
    setTimer(duration);
    setTextIconBtn(textIconBtn);
    setTitle(title);
    setState({
      isVisible: true,
      status: status,
      isSoft: isSoft,
    });
    setPrimaryColor(pmColor);
    setOnPress(() => func ?? (() => {}));
  };

  useImperativeHandle(ref, () => ({
    show,
  }));

  useEffect(() => {
    let interval;
    if (timer > 0) {
      iCount.current = timer;
      interval = setInterval(() => {
        iCount.current -= 100;
        setTimer(iCount.current);
        if (iCount.current <= 0) {
          setState({...state, isVisible: false});
          setTimer(0);
          return;
        }
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  useEffect(() => {
    if (state.isVisible) {
      Animated.timing(animated, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animated, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        iCount.current = 0;
        setTimer(iCount.current);
        setOnPress(() => () => {});
      });
    }
  }, [state.isVisible]);

  const _renderImage = isSoft => {
    let icon;
    if (iconState) {
      icon = function abc() {
        return iconState;
      };
    } else {
      switch (state.status) {
        case 'failed':
          icon = !isSoft
            ? AppIcons.snackBarIcons.close
            : AppIcons.snackBarIcons.close_filled;
          break;
        case 'success':
          icon = !isSoft
            ? AppIcons.snackBarIcons.check
            : AppIcons.snackBarIcons.check_filled;
          break;
        case 'warning':
          icon = !isSoft
            ? AppIcons.snackBarIcons.warning
            : AppIcons.snackBarIcons.warning_filled;
          break;
        case 'info':
          icon = !isSoft
            ? AppIcons.snackBarIcons.info
            : AppIcons.snackBarIcons.info_filled;
          break;
        default:
          icon = !isSoft
            ? AppIcons.snackBarIcons.default
            : AppIcons.snackBarIcons.default_filled;
          break;
      }
    }
    return <AppSvg SvgSrc={icon} size={24} color="red" />;
  };

  const _renderInsideButton = () => {
    // if (typeof textIconBtn === 'string') {
    return state.isSoft ? (
      <Text style={{color: primaryColor, fontWeight: '400'}}>
        {textIconBtn}
      </Text>
    ) : (
      <Text style={{color: 'white', fontWeight: '400'}}>{textIconBtn}</Text>
    );
    // } else {
    //   return <AppSvg SvgSrc={() => textIconBtn} size={16} />;
    // }
  };

  return (
    <Animated.View
      style={{
        width: '100%',
        position: 'absolute',
        opacity: animated.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
        bottom: 0,
        transform: [
          {
            translateY: animated.interpolate({
              inputRange: [0, 1],
              outputRange: [10, -100],
              extrapolate: 'clamp',
            }),
          },
        ],
        paddingHorizontal: AppDimentions.mainPadding,
      }}>
      <View
        style={{
          width: '100%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          backgroundColor: 'black',
          shadowOpacity: 0.39,
          shadowRadius: 8.3,
          elevation: 13,
          backgroundColor: state.isSoft ? 'white' : primaryColor,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: AppDimentions.secondPadding,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: AppDimentions.secondPadding,
            flex: 1,
          }}>
          {_renderImage(state.isSoft)}
          <Text
            style={{
              color: state.isSoft ? primaryColor : 'white',
              marginLeft: AppDimentions.secondPadding - 4,
              fontWeight: '400',
              flex: 1,
            }}
            numberOfLines={1}>
            {title}
          </Text>
        </View>

        {textIconBtn && (
          <TouchableOpacity
            style={{
              height: '100%',
              maxWidth: '30%',
              width:
                typeof textIconBtn === 'string'
                  ? textIconBtn.length * 7 + AppDimentions.secondPadding * 2
                  : undefined,
              aspectRatio: typeof textIconBtn === 'string' ? undefined : 1,
              justifyContent: 'center',
            }}
            onPress={() => {
              setState({
                ...state,
                isVisible: false,
              });
              onPress();
            }}>
            <View
              style={{
                position: 'absolute',
                right: AppDimentions.secondPadding,
              }}>
              {_renderInsideButton()}
            </View>
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
});

export default AppSnackBar;
