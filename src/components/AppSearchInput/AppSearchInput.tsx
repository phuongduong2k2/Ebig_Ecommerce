import {View, Text, Modal, Button} from 'react-native';
import React, {useState} from 'react';
import {AppIcons} from '../../constants/AppIcons';
import AppTextInput from '../AppTextInput';

type Props = {};

const AppSearchInput = (props: Props) => {
  const {} = props;
  const [isVisible, setVisible] = useState(false);

  return (
    <View>
      <AppTextInput
        prefixIcon={AppIcons.icon_search}
        containerStyle={{
          marginHorizontal: 16,
        }}
        onFocus={() => {
          console.log('focus');
          setVisible(true);
        }}
        onBlur={() => {
          console.log('blur');
        }}
        placeholder="Tìm kiếm"
      />
      <Modal
        style={{height: '100%', width: '100%', backgroundColor: 'red'}}
        visible={isVisible}
        statusBarTranslucent>
        <Button
          title="check"
          onPress={() => {
            setVisible(false);
          }}
        />
      </Modal>
    </View>
  );
};

export default AppSearchInput;
