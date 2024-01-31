import {ActivityIndicator} from 'react-native';
import React, {ReactNode} from 'react';
import useAfterInteractions from './useAfterInteractions';
import Animated, {FadeOut} from 'react-native-reanimated';

type Props = {
  children: ReactNode;
};

const OptimizeHeavyScreen = (props: Props) => {
  const {children} = props;

  const areInteractionsComplete = useAfterInteractions();

  return (
    <>
      {areInteractionsComplete ? (
        children
      ) : (
        <Animated.View
          exiting={FadeOut}
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator animating={true} size={'large'} />
        </Animated.View>
      )}
    </>
  );
};

export default OptimizeHeavyScreen;
