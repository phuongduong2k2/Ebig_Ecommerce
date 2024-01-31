import React, {createRef, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {AppDimentions} from '../../constants/constants';
import PropTypes from 'prop-types';

AppStepContainer.propTypes = {
  duration: PropTypes.number,
  style: PropTypes.object,
  onDone: PropTypes.func,
  onReset: PropTypes.func,
  require: PropTypes.bool,
};

AppStepContainer.defaultProps = {
  duration: 300,
  style: {},
  onDone: () => {},
  onReset: () => {},
  require: false,
};
const ref = createRef(null);
function AppStepContainer(props) {
  const {children, duration, style, onDone, onReset, require} = props;
  const [currentStep, setCurrentStep] = useState(0);

  let numberStep = 1;
  const [statusChild, setStatusChild] = useState([]);

  if (Array.isArray(children)) {
    numberStep = children.length;
  }

  useEffect(() => {
    initialStatus();
  }, []);

  const initialStatus = () => {
    let arr = [];
    for (let i = 0; i < numberStep; i++) {
      arr.push(undefined);
    }
    setStatusChild(arr);
  };

  const handleReset = () => {
    setCurrentStep(0);
    initialStatus();
    onReset();
  };

  useEffect(() => {
    // console.log(currentStep, numberStep);
    if (!statusChild.includes(undefined) && currentStep === numberStep - 1) {
      onDone();
    }
    ref.current = {
      nextStep: () => {
        if (currentStep < numberStep - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          if (require) {
            if (!statusChild.includes(undefined)) {
              handleReset();
            }
          } else {
            handleReset();
          }
        }
      },
      backStep: () => {
        if (currentStep > 0) {
          setCurrentStep(currentStep - 1);
        }
      },
      setSuccess: () => {
        const newStatus = [...statusChild];
        const x = newStatus.map((item, index) =>
          index === currentStep ? 'success' : item,
        );
        setStatusChild(x);
      },
      setFailed: () => {
        const newStatus = [...statusChild];
        const x = newStatus.map((item, index) =>
          index === currentStep ? 'failed' : item,
        );
        setStatusChild(x);
      },
    };
  }, [statusChild, currentStep]);

  const _renderStepItem = () =>
    React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        currentStep: currentStep,
        index: numberStep - 1 - index,
        duration: duration,
        status: statusChild[numberStep - 1 - index],
      });
    });

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingVertical: AppDimentions.secondPadding,
        ...style,
      }}>
      {_renderStepItem()}
    </View>
  );
}

export default AppStepContainer;

export const AppStepContainerUtils = {
  nextStep: () => {
    if (ref.current) {
      ref.current.nextStep();
    }
  },
  backStep: () => {
    if (ref.current) {
      ref.current.backStep();
    }
  },
  jumpStep: step => {
    if (ref.current) {
      ref.current.jumpStep(step);
    }
  },
  setSuccess: () => {
    if (ref.current) {
      ref.current.setSuccess();
    }
  },
  setFailed: () => {
    if (ref.current) {
      ref.current.setFailed();
    }
  },
};
