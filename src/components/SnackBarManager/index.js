import {View, Text} from 'react-native';
import React, {createRef, useEffect, useRef, useState} from 'react';
import AppSnackBar from '../AppSnackBar';
import AppSnackBarProps from './type';

const ref = createRef();

const SnackBarManager = () => {
  const [quantity, setQuantity] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const quantityRef = useRef([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const itemRefs = useRef([]);

  const willAddBack = (num, duration) => {
    if (duration) {
      setTimeout(() => {
        quantityRef.current.push(num);
      }, duration);
    }
  };

  const showSnackBar = data => {
    willAddBack(quantityRef.current[0], data.duration ?? 2000);
    itemRefs.current[quantityRef.current[0]].show(data);
    quantityRef.current = quantityRef.current.filter(
      (item, index) => index !== 0,
    );
    // console.log('showSnackBar', quantityRef.current);
  };

  const hideSnackBar = () => {
    // console.log('hide snack bar');
  };

  useEffect(() => {
    ref.current = {
      showSnackBar: showSnackBar,
      hideSnackBar: hideSnackBar,
    };
  }, []);

  return quantity.map(item => (
    <View
      key={item}
      style={{
        position: 'absolute',
        bottom: -60,
        width: '100%',
      }}>
      <Text>{item}</Text>
      <AppSnackBar ref={por => (itemRefs.current[item] = por)} />
    </View>
  ));
};

export default SnackBarManager;

export const AppSnackBarUtils = {
  /**
   * @author phuongduong
   * @param {AppSnackBarProps} data
   */
  showSnackBar: data => {
    if (ref.current) {
      ref.current.showSnackBar(data);
    }
  },
  hideSnackBar: () => {
    if (ref.current) {
      ref.current.hideSnackBar();
    }
  },
};
