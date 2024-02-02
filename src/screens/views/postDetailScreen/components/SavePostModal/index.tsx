import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import BottomSheetKeyboardAvoidingView from '../../../../../components/BottomSheetKeyboardAvoidingView/BottomSheetKeyboardAvoidingView';
import {AppColors} from '../../../../../constants/AppColors';
import AppSvg from '../../../../../components/AppSvg';
import AppTextStyles from '../../../../../constants/AppTextStyles';
import {AppIcons} from '../../../../../constants/AppIcons';
import AppTextInput from '../../../../../components/AppTextInput';
import AppButton from '../../../../../components/AppButton';
import {AppSnackBarUtils} from '../../../../../components/SnackBarManager';
import CheckBoxCell from '../../../../../components/CheckBoxCell/CheckboxCell';
import AppDivider from '../../../../../components/AppDivider';

interface Props {
  isVisible: boolean;
  onCloseModal?: () => void;
  onSaved?: () => void;
}

const SavePostModal = (props: Props) => {
  const {isVisible, onCloseModal = () => {}, onSaved} = props;
  const [isVisibleCreateBookMark, setVisibleCreateBookMark] = useState(false);

  const insets = useSafeAreaInsets();

  const [nameOfNewCollection, setNameOfNewCollection] = useState('');

  const ModalCreateBookMark = () => {
    return (
      <BottomSheetKeyboardAvoidingView
        height={1}
        isVisible={isVisibleCreateBookMark}
        onCloseModal={() => {
          setVisibleCreateBookMark(false);
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            flex: 1,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              paddingTop: 16,
            }}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                borderBottomColor: AppColors.lightTheme.grey2,
                borderBottomWidth: 1,
                paddingBottom: 16,
              }}>
              <Text
                style={[
                  AppTextStyles.title3,
                  {color: AppColors.lightTheme.title},
                ]}>
                Danh sách lưu bài viết mới
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setVisibleCreateBookMark(false);
                }}
                style={{position: 'absolute', right: 16, bottom: 16}}>
                <AppSvg
                  SvgSrc={AppIcons.icon_e_remove}
                  size={24}
                  color={AppColors.lightTheme.subtitle}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, width: '100%'}}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingTop: 20,
                  paddingBottom: 12,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  paddingHorizontal: 16,
                }}>
                <View>
                  <Text
                    style={{
                      ...AppTextStyles.label3,
                      color: AppColors.lightTheme.label,
                    }}>
                    Tên danh sách
                  </Text>
                  <AppTextInput
                    placeholder="Nhập tên cho danh sách mới"
                    height={56}
                    containerStyle={{
                      marginTop: 8,
                    }}
                    style={{
                      margin: 0,
                      padding: 0,
                      textAlignVertical: 'center',
                    }}
                    borderColor={AppColors.lightTheme.border1}
                    onClearValue={() => {
                      setNameOfNewCollection('');
                    }}
                    onChangeValue={value => {
                      setNameOfNewCollection(value);
                    }}
                  />
                </View>
                <View style={{marginTop: 24}}>
                  <Text
                    style={{
                      ...AppTextStyles.label3,
                      color: AppColors.lightTheme.label,
                    }}>
                    Mô tả chung
                  </Text>
                  <AppTextInput
                    height={124}
                    multiline={true}
                    borderColor={AppColors.lightTheme.border1}
                    placeholder="Nhập mô tả"
                    style={{paddingTop: 16, paddingBottom: 16}}
                    containerStyle={{marginTop: 8}}
                  />
                </View>
              </ScrollView>
              <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
              {/* <AppButton
                  onPress={() => {
                    setVisibleCreateBookMark(false);
                  }}
                  height={48}
                  disabled={nameOfNewCollection.length <= 0}
                  containerStyle={{
                    marginBottom: 16,
                    marginHorizontal: 16,
                    borderRadius: 24,
                    borderWidth: 0,
                    backgroundColor: AppColors.primary,
                  }}
                  textStyle={{color: AppColors.darkTheme.title}}
                  title={'Tạo'}
                /> */}
            </View>
          </View>
        </View>
      </BottomSheetKeyboardAvoidingView>
    );
  };

  useEffect(() => {
    if (!isVisibleCreateBookMark) {
      setPressedCreate(false);
    }
  }, [isVisibleCreateBookMark]);

  const [isPressedCreate, setPressedCreate] = useState(false);

  return (
    <View style={{}}>
      {ModalCreateBookMark()}
      <BottomSheetKeyboardAvoidingView
        height={1}
        isVisible={isVisible}
        onModalHide={() => {
          if (isPressedCreate) {
            setVisibleCreateBookMark(true);
          }
        }}
        onCloseModal={() => {
          onCloseModal();
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              height: 56,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: AppColors.lightTheme.border2,
            }}>
            <Text
              style={{
                ...AppTextStyles.title3,
                color: AppColors.lightTheme.title,
              }}>
              Lưu vào
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 0, paddingHorizontal: 16}}
              onPress={() => {
                onCloseModal();
              }}>
              <AppSvg SvgSrc={AppIcons.icon_close} size={24} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{paddingHorizontal: 16}}
            onPress={() => {
              onCloseModal();
              setPressedCreate(true);
            }}>
            <View
              style={{
                marginVertical: 16,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AppSvg
                SvgSrc={AppIcons.icon_e_add}
                size={16}
                color={AppColors.primary}
              />
              <Text
                style={{
                  ...AppTextStyles.label2,
                  color: AppColors.primary,
                  marginLeft: 4,
                }}>
                Tạo danh sách mới
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <View style={{paddingHorizontal: 16}}>
              <AppDivider marginVertical={0} />
            </View>
            <FlatList
              data={[1, 2, 3, 4]}
              contentContainerStyle={{paddingHorizontal: 16}}
              ItemSeparatorComponent={() => <AppDivider marginVertical={0} />}
              renderItem={({item}) => <CheckBoxCell />}
            />
          </View>
          <AppButton
            title="Lưu"
            onPress={() => {
              if (onCloseModal && onSaved) {
                onCloseModal();
                onSaved();
                AppSnackBarUtils.showSnackBar({
                  status: 'default',
                  title: 'Đã lưu vào',
                  icon: AppIcons.icon_bookmark_save_white,
                  textIconBtn: 'Xem các mục',
                });
              }
            }}
            textStyle={{
              ...AppTextStyles.button1,
              color: AppColors.darkTheme.title,
            }}
            containerStyle={{
              height: 48,
              marginBottom: 16,
              marginHorizontal: 16,
              borderWidth: 0,
              backgroundColor: AppColors.primary,
            }}
          />
        </View>
      </BottomSheetKeyboardAvoidingView>
    </View>
  );
};

export default SavePostModal;
