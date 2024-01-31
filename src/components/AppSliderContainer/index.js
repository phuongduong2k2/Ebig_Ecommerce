import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

AppSliderContainer.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.element,
  sliderValue: PropTypes.arrayOf(PropTypes.number),
  vertical: PropTypes.bool,
  onValueChange: PropTypes.func,
};

AppSliderContainer.defaultProps = {
  caption: '',
  children: <></>,
  sliderValue: [],
  vertical: false,
  onValueChange: () => {},
};

function AppSliderContainer(props) {
  const {sliderValue, onValueChange} = props;
  const [value, setValue] = useState(sliderValue);

  const onChange = value => {
    setValue(value);
    onValueChange(value);
  };

  const renderChildren = () => {
    return React.Children.map(props.children, child => {
      if (!!child) {
        return React.cloneElement(child, {
          onValueChange: onChange,
          value,
        });
      }

      return child;
    });
  };

  return (
    <View
      style={{
        paddingVertical: 16,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>{Array.isArray(value) ? value.join(' - ') : value}</Text>
      </View>
      {renderChildren()}
    </View>
  );
}

export default AppSliderContainer;
