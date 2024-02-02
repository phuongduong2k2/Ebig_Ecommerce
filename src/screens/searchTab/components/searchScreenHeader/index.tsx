import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MainAppHeader from '../../../../components/MainAppHeader/MainAppHeader';
import NotiItem from '../../../../components/MainAppHeader/NotiItem';
import {AppIcons} from '../../../../constants/AppIcons';
import FilterMarketModal from '../../../../components/MainAppHeader/FilterMarket';

type Props = {
  title?: string;
};

const MainSearchTabHeader = (props: Props) => {
  const {title} = props;

  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <FilterMarketModal
        isVisible={isVisible}
        onCloseModal={() => {
          setVisible(false);
        }}
      />
      <MainAppHeader
        title={title}
        rightContentComponent={() => {
          return (
            <View style={{paddingRight: 8}}>
              <NotiItem
                icon={AppIcons.icon_setup_preferences}
                style={{paddingHorizontal: 8}}
                onPress={() => {
                  setVisible(true);
                }}
              />
            </View>
          );
        }}
      />
    </>
  );
};

export default MainSearchTabHeader;
