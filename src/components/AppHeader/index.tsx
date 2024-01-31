import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

AppHeader.propTypes = {
  title: PropTypes.string,
};

AppHeader.defaultProps = {
  title: 'Title',
};

type Props = {
  title: String;
  children: ReactNode[];
  haveBorder?: boolean;
  leftTitle?: boolean;
};

function AppHeader(props: Props) {
  const {title, children, haveBorder = true, leftTitle = false} = props;

  const borderShadow = {
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 20,
  };

  return (
    <View
      style={
        haveBorder
          ? {...styles.container, ...borderShadow}
          : {...styles.container}
      }>
      <View style={{...styles.positionContainer, left: 16}}>{children[0]}</View>
      <View
        style={{
          ...styles.centerContainer,
          paddingHorizontal: 44,
        }}>
        <Text
          style={{
            color: '#00204D',
            fontSize: 16,
            fontWeight: '600',
            width: '100%',
            textAlign: leftTitle ? undefined : 'center',
          }}>
          {title}
        </Text>
      </View>
      <View style={{...styles.positionContainer, right: 16}}>
        {children[1]}
      </View>
    </View>
  );
}

export default AppHeader;
