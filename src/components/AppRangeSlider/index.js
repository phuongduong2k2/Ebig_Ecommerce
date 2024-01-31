import React from 'react';
import AppSliderContainer from '../AppSliderContainer';
import AppSlider from '../AppSlider';
import PropTypes from 'prop-types';

AppRangeSlider.propTypes = {};

AppRangeSlider.defaultProps = {};

function AppRangeSlider(props) {
  const {} = props;
  return (
    <AppSliderContainer
      sliderValue={[6, 18]}
      onValueChange={value => {
        console.log('change', value);
      }}>
      <AppSlider
        animateTransitions
        maximumValue={20}
        minimumValue={4}
        step={1}
        onValueChange={value => {
          console.log(value);
        }}
      />
    </AppSliderContainer>
  );
}

export default AppRangeSlider;
