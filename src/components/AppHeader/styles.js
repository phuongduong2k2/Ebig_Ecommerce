import {StyleSheet} from 'react-native';
import {AppDimentions} from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: '#fff',
    zIndex: 1,
    flexDirection: 'row',
  },
  positionContainer: {
    height: '100%',
    zIndex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    zIndex: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
