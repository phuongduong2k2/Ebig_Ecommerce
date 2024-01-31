import {InteractionManager} from 'react-native';
import {useEffect, useRef, useState} from 'react';

let timeout: any = null;

const useAfterInteractions = () => {
  const [areInteractionsComplete, setInteractionsComplete] = useState(false);

  const subscriptionRef = useRef<ReturnType<
    typeof InteractionManager.runAfterInteractions
  > | null>(null);

  useEffect(() => {
    subscriptionRef.current = InteractionManager.runAfterInteractions(() => {
      timeout = setTimeout(() => {
        setInteractionsComplete(true);
        subscriptionRef.current = null;
      }, 200);
    });

    return () => {
      clearTimeout(timeout);
      subscriptionRef.current?.cancel();
    };
  }, []);

  return areInteractionsComplete;
};

export default useAfterInteractions;
