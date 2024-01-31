import {StyleProp, ViewStyle} from 'react-native';

export default interface AppStepItemProps {
  /**
   * Nguồn ảnh svg success
   */
  successIconSrc?: SVGElement | undefined;
  /**
   * Nguồn ảnh svg failed
   */
  failedIconSrc?: SVGElement | undefined;
  /**
   * Text thời gian
   */
  timeLine: string;
  /**
   * Tiêu đề
   */
  title: string;
  /**
   * Thẻ view handle event
   */
  renderActionView: React.ReactNode;
  successColor?: string | undefined;
  failedColor?: string | undefined;
  backgroundColor?: string | undefined;
  style?: StyleProp<ViewStyle> | undefined;
}
