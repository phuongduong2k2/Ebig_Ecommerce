import {Slider} from '@miblanchard/react-native-slider';
import React, {useState} from 'react';
import {Dimensions, Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import {AppColors} from '../../constants/AppStyle';

AppSlider.propTypes = {
  disabled: PropTypes.bool,
  onValueChange: PropTypes.any,
  value: PropTypes.any,
  maximumValue: PropTypes.number,
  minimumValue: PropTypes.number,
  onSlidingComplete: PropTypes.func,
  onSlidingStart: PropTypes.func,
  renderAboveThumbComponent: PropTypes.func,
  vertical: PropTypes.bool,
  renderBelowThumbComponent: PropTypes.func,
  animateTransitions: PropTypes.any,
  containerStyle: PropTypes.object,
  maximumTrackStyle: PropTypes.object,
  maximumTrackTintColor: PropTypes.string,
  minimumTrackStyle: PropTypes.object,
  minimumTrackTintColor: PropTypes.string,
  renderMaximumTrackComponent: PropTypes.any,
  renderMinimumTrackComponent: PropTypes.any,
  renderThumbComponent: PropTypes.any,
  renderTrackMarkComponent: PropTypes.any,
  startFromZero: PropTypes.bool,
  thumbStyle: PropTypes.any,
  thumbImage: PropTypes.string,
  thumbTintColor: PropTypes.string,
  trackClickable: PropTypes.bool,
  trackStyle: PropTypes.object,
  trackMarks: PropTypes.arrayOf(PropTypes.number),
  step: PropTypes.number,
  animateTransitions: PropTypes.any,
};

AppSlider.defaultProps = {
  disabled: false,
  onValueChange: undefined,
  value: 0.5,
  maximumValue: 1,
  minimumValue: 0,
  onSlidingComplete: () => {},
  onSlidingStart: () => {},
  renderAboveThumbComponent: () => {},
  vertical: false,
  renderBelowThumbComponent: () => {},
  animateTransitions: undefined,
  containerStyle: {},
  maximumTrackStyle: {},
  maximumTrackTintColor: AppColors.grey3,
  minimumTrackStyle: {},
  minimumTrackTintColor: AppColors.primary,
  renderMaximumTrackComponent: undefined,
  renderMinimumTrackComponent: undefined,
  renderThumbComponent: undefined,
  renderTrackMarkComponent: undefined,
  startFromZero: false,
  thumbStyle: undefined,
  thumbImage: '',
  thumbTintColor: undefined,
  trackClickable: false,
  trackStyle: {},
  trackMarks: undefined,
  step: undefined,
};

function AppSlider(props) {
  const {
    value,
    onValueChange,
    disabled,
    maximumValue,
    minimumValue,
    onSlidingComplete,
    onSlidingStart,
    renderAboveThumbComponent,
    vertical,
    renderBelowThumbComponent,
    animateTransitions,
    containerStyle,
    maximumTrackStyle,
    maximumTrackTintColor,
    minimumTrackStyle,
    minimumTrackTintColor,
    renderMaximumTrackComponent,
    renderMinimumTrackComponent,
    renderThumbComponent,
    renderTrackMarkComponent,
    startFromZero,
    thumbStyle,
    thumbImage,
    thumbTintColor,
    trackClickable,
    trackStyle,
    trackMarks,
    step,
  } = props;

  const [sliderValue, setSliderValue] = useState(value);

  const _renderThumb = () => {
    return (
      <View
        style={{
          height: 20,
          width: 20,
          borderWidth: 2,
          borderRadius: 1000,
          backgroundColor: thumbTintColor ?? 'white',
          borderColor: disabled ? AppColors.disable : AppColors.primary,
        }}
      />
    );
  };

  return (
    <Slider
      disabled={disabled}
      maximumValue={maximumValue}
      minimumValue={minimumValue}
      value={sliderValue}
      onSlidingComplete={onSlidingComplete}
      onSlidingStart={onSlidingStart}
      onValueChange={value => {
        setSliderValue(value);
        if (onValueChange) {
          onValueChange(value);
        }
      }}
      step={step}
      vertical={vertical}
      animateTransitions={animateTransitions && animateTransitions}
      containerStyle={containerStyle}
      maximumTrackStyle={maximumTrackStyle}
      maximumTrackTintColor={maximumTrackTintColor}
      minimumTrackStyle={minimumTrackStyle}
      minimumTrackTintColor={
        disabled ? AppColors.disable : minimumTrackTintColor
      }
      renderMaximumTrackComponent={
        renderMaximumTrackComponent
          ? () => renderMaximumTrackComponent(disabled)
          : undefined
      }
      renderMinimumTrackComponent={
        renderMinimumTrackComponent
          ? () => renderMinimumTrackComponent(disabled)
          : undefined
      }
      renderThumbComponent={
        renderThumbComponent
          ? () => renderThumbComponent(disabled)
          : _renderThumb
      }
      renderTrackMarkComponent={renderTrackMarkComponent}
      startFromZero={startFromZero}
      thumbStyle={thumbStyle}
      thumbImage={thumbImage}
      thumbTintColor={thumbTintColor}
      trackClickable={trackClickable}
      trackStyle={trackStyle}
      trackMarks={trackMarks}
      renderBelowThumbComponent={() => renderBelowThumbComponent(sliderValue)}
      renderAboveThumbComponent={() => renderAboveThumbComponent(sliderValue)}
    />
  );
}

export default AppSlider;
