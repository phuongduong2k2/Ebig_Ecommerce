import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import BottomSheetKeyboardAvoidingView from '../BottomSheetKeyboardAvoidingView/BottomSheetKeyboardAvoidingView';
import {AppIcons} from '../../constants/AppIcons';
import AppSvg from '../AppSvg';
import AppTextStyles from '../../constants/AppTextStyles';
import {AppColors} from '../../constants/AppColors';
import AppDivider from '../AppDivider';
import AppTextInput from '../AppTextInput';
import AppButton from '../AppButton';
import ListCheckboxAndRadio from './ListCheckboxAndRadio';

interface Props {
  isVisible: boolean;
  onCloseModal: () => void;
}

const listProduct = [
  {id: 0, name: 'Sách nói'},
  {id: 1, name: 'Sách kỹ thuật số'},
  {id: 2, name: 'Đồ hoạ'},
  {id: 3, name: 'Sách kỹ thuật số'},
];

const productStatus = [
  {
    id: 0,
    name: 'Mới nhất',
  },
  {
    id: 1,
    name: 'Sản phẩm nổi bật',
  },
  {
    id: 2,
    name: 'Bán chạy nhất',
  },
];

const listFormat = [
  {
    id: 0,
    name: 'PDF',
  },
  {
    id: 1,
    name: 'HTML',
  },
  {
    id: 2,
    name: 'EPUB',
  },
  {
    id: 3,
    name: 'ZIP',
  },
  {
    id: 4,
    name: 'LINK',
  },
];

const listRate = [
  {
    id: 0,
    name: 'Xem tất cả',
  },
  {
    id: 1,
    name: '1 sao và cao hơn',
  },
  {
    id: 2,
    name: '2 sao và cao hơn',
  },
  {
    id: 3,
    name: '3 sao và cao hơn',
  },
  {
    id: 4,
    name: '4 sao và cao hơn',
  },
];

const timeSell = [
  {
    id: 0,
    name: 'Xem tất cả',
  },
  {
    id: 1,
    name: 'Năm trước',
  },
  {
    id: 2,
    name: 'Tháng trước',
  },
  {
    id: 3,
    name: 'Tuần trước',
  },
];

const FilterMarketModal = (props: Props) => {
  const {isVisible = false, onCloseModal = () => {}} = props;

  const [listProductSelected, setListProductSelected] = useState<any>([]);
  const [listProductStatusSelected, setListProductStatusSelected] =
    useState<any>([]);
  const [listFormatSelected, setListFormatSelected] = useState<any>([]);
  const [rateSelected, setRateSelected] = useState<any>(null);
  const [timeSellSelected, setTimeSellSelected] = useState<any>(null);

  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const excuteList = (data: any[], itemExcute: any, isSelected: boolean) => {
    let newData: any[] = [...data];
    if (data.some((item: any) => item.id === itemExcute.id) && !isSelected) {
      // bo ra khoi mang
      newData = newData.filter((item: any) => item.id !== itemExcute.id);
    } else if (isSelected) {
      // cho mang vao
      newData.push(itemExcute);
    }

    return newData;
  };

  return (
    <BottomSheetKeyboardAvoidingView
      height={1}
      isVisible={isVisible}
      onCloseModal={onCloseModal}>
      <View style={{flex: 1, width: '100%', backgroundColor: 'white'}}>
        <View
          style={{
            height: 56,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              onCloseModal();
            }}
            style={{
              position: 'absolute',
              left: 0,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 16,
            }}>
            <AppSvg SvgSrc={AppIcons.icon_close} size={24} />
          </TouchableOpacity>
          <Text
            style={{
              ...AppTextStyles.title3,
              color: AppColors.lightTheme.title,
            }}>
            Bộ lọc
          </Text>
        </View>
        <AppDivider marginVertical={0} />
        <ScrollView contentContainerStyle={{paddingBottom: 30}}>
          <View style={{marginTop: 8, paddingHorizontal: 16}}>
            <ListCheckboxAndRadio
              data={listProduct}
              title="Danh mục sản phẩm"
              itemSelected={listProductSelected}
              onSelected={(item, checked) => {
                const newData = excuteList(listProductSelected, item, checked);
                setListProductSelected(newData);
              }}
            />
            {/* <AppDivider marginVertical={0} /> */}
            <ListCheckboxAndRadio
              data={productStatus}
              itemSelected={listProductStatusSelected}
              title="Trạng thái sản phẩm"
              onSelected={(item, checked) => {
                const newData = excuteList(
                  listProductStatusSelected,
                  item,
                  checked,
                );
                setListProductStatusSelected(newData);
              }}
            />
            <View style={{marginTop: 8}}>
              <Text
                style={{
                  marginTop: 12,
                  marginBottom: 8,
                  ...AppTextStyles.title3,
                  color: AppColors.lightTheme.title,
                }}>
                Khoảng giá
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 12,
                  marginBottom: 28,
                }}>
                <AppTextInput
                  keyboardType="number-pad"
                  containerStyle={{height: 40, flex: 1}}
                  placeholder="Từ"
                  onClearValue={() => {
                    setFromValue('');
                  }}
                  onChangeValue={value => {
                    setFromValue(value);
                  }}
                  borderColor={AppColors.lightTheme.border2}
                />
                <View style={{paddingHorizontal: 12}}>
                  <AppSvg SvgSrc={AppIcons.icon_arrow_right} size={16} />
                </View>
                <AppTextInput
                  keyboardType="number-pad"
                  containerStyle={{height: 40, flex: 1}}
                  placeholder="Đến"
                  onClearValue={() => {
                    setToValue('');
                  }}
                  onChangeValue={value => {
                    setToValue(value);
                  }}
                  borderColor={AppColors.lightTheme.border2}
                />
              </View>
              <AppDivider marginVertical={0} />
            </View>
            <ListCheckboxAndRadio
              data={listFormat}
              title="Định dạng"
              itemSelected={listFormatSelected}
              onSelected={(item, checked) => {
                const newData = excuteList(listFormatSelected, item, checked);
                setListFormatSelected(newData);
              }}
            />
            <ListCheckboxAndRadio
              data={listRate}
              title="Đánh giá"
              type="radio"
              itemSelected={rateSelected}
              onSelected={(item, checked) => {
                setRateSelected(item);
              }}
            />
            <ListCheckboxAndRadio
              data={timeSell}
              type="radio"
              itemSelected={timeSellSelected}
              title="Thời gian đăng bán"
              onSelected={(item, checked) => {
                setTimeSellSelected(item);
              }}
            />
          </View>
        </ScrollView>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 30,

            backgroundColor: 'white',
            paddingTop: 12,
            paddingBottom: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
          }}>
          <AppButton
            title={'Về mặc định'}
            onPress={() => {
              setListFormatSelected([]);
              setListProductSelected([]);
              setRateSelected(null);
              setTimeSellSelected(null);
              setListProductStatusSelected([]);
              setFromValue('');
              setToValue('');
            }}
            height={40}
            suffixIconSize={16}
            suffixIcon={AppIcons.icon_refresh}
            textStyle={{
              ...AppTextStyles.button2,
              color: AppColors.lightTheme.subtitle,
            }}
            containerStyle={{
              flex: 1,
              justifyContent: undefined,
              borderWidth: 0,
              borderRadius: 0,
            }}
          />
          <View style={{width: 8}} />
          <AppButton
            title={'Áp dụng'}
            height={40}
            onPress={() => {
              // console.log(listFormatSelected);
              // console.log(listProductSelected);
              // console.log(listProductStatusSelected);
              // console.log(rateSelected);
              console.log(fromValue, toValue);
              // console.log(timeSellSelected);
            }}
            textStyle={{
              ...AppTextStyles.button2,
              color: AppColors.darkTheme.title,
            }}
            containerStyle={{
              borderWidth: 0,
              flex: 1,
              backgroundColor: AppColors.primary,
            }}
          />
        </View>
      </View>
    </BottomSheetKeyboardAvoidingView>
  );
};

export default FilterMarketModal;
