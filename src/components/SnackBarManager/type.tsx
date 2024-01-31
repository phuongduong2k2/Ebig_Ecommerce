import {StyleProp, ViewStyle} from 'react-native';

export default interface AppSnackBarProps {
  /**
   * Tiêu đề
   */
  title: string;
  /**
   * Dạng soft
   */
  isSoft?: boolean | false;
  /**
   * Thời gian đóng
   */
  duration?: number | 2000;
  /**
   * Là nút bấm có chuỗi kí tự hoặc icon bến phải
   */
  textIconBtn?: string | number | undefined;
  /**
   * Event press
   */
  func?: Function | undefined;
  /**
   * Màu nền
   */
  primaryColor?: string | undefined;
  /**
   * Loại snackbar
   */
  status: 'success' | 'failed' | 'warning' | 'info' | 'default';
  /**
   * Icon
   */
  icon?: SVGElement | undefined;
}
