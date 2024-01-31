import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AppDimentions} from '../../constants/constants';
import {AppColors} from '../../constants/AppColors';

const YesNoChoice = props => {
  const {onValueChange} = props;
  const [isSelected, setSelected] = useState(undefined);
  const handleSelect = value => {
    setSelected(value);
    onValueChange(value);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // alignSelf: 'flex-start',
        justifyContent: 'space-between',
        // paddingVertical: AppDimentions.thirdPadding,

        // backgroundColor: 'red',
        paddingVertical: 8,
      }}>
      <View
        style={{
          width: '50%',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            handleSelect(true);
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderWidth: 2,
              borderColor:
                isSelected !== undefined && isSelected
                  ? 'red'
                  : AppColors.background.grey4,
              borderRadius: 1000,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {isSelected && (
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 100,
                  backgroundColor: 'red',
                }}
              />
            )}
          </View>
          <Text style={{marginLeft: 10}}>Có</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '50%',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            handleSelect(false);
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderWidth: 2,
              borderColor:
                isSelected !== undefined && !isSelected
                  ? 'red'
                  : AppColors.background.grey4,
              borderRadius: 1000,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {isSelected !== undefined && !isSelected && (
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 100,
                  backgroundColor: 'red',
                }}
              />
            )}
          </View>
          <Text style={{marginLeft: 10}}>Không</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YesNoChoice;
