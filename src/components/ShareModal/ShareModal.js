import {View, Text, TouchableOpacity} from 'react-native';
import React, {createRef, useEffect, useState} from 'react';
import BottomSheetKeyboardAvoidingView from '../BottomSheetKeyboardAvoidingView/BottomSheetKeyboardAvoidingView';
import {AppColors} from '../../constants/AppColors';
import AppTextStyles from '../../constants/AppTextStyles';
import {AppIcons} from '../../constants/AppIcons';
import {AppSnackBarUtils} from '../SnackBarManager';
import AppSvg from '../AppSvg';
import AppDivider from '../AppDivider';
import Share, {Social} from 'react-native-share';
import ShareModalProps from './type';

const modalRef = createRef(null);

const ShareModal = props => {
  // const {isVisible, onCloseModal, title} = props;
  const [isVisible, setVisible] = useState(false);
  const [title, setTitle] = useState('Title');

  useEffect(() => {
    modalRef.current = {
      showModal: data => {
        setVisible(true);
        setTitle(data.title);
      },
      hideModal: data => {
        setVisible(false);
      },
    };
  }, [isVisible]);

  return (
    <BottomSheetKeyboardAvoidingView
      height={0.4}
      isVisible={isVisible}
      onCloseModal={() => {
        setVisible(false);
      }}>
      <View
        style={{
          width: '100%',
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
            {title}
          </Text>
          <TouchableOpacity
            style={{position: 'absolute', right: 0, paddingHorizontal: 16}}
            onPress={() => {
              setVisible(false);
            }}>
            <AppSvg SvgSrc={AppIcons.icon_close} size={24} />
          </TouchableOpacity>
        </View>
        <>
          <TouchableOpacity
            style={{
              height: 64,
              alignItems: 'center',
              paddingHorizontal: 16,
              flexDirection: 'row',
            }}
            onPress={() => {
              setVisible(false);
              AppSnackBarUtils.showSnackBar({
                title: 'Đã chép đường liên kết',
                icon: AppIcons.icon_copy_file_white,
                status: 'default',
                duration: 2000,
              });
            }}>
            <AppSvg SvgSrc={AppIcons.icon_copy_file} size={32} />
            <Text
              style={{
                ...AppTextStyles.label2,
                color: AppColors.lightTheme.label,
                marginLeft: 12,
              }}>
              Sao chép đường liên kết
            </Text>
          </TouchableOpacity>
          <AppDivider marginVertical={0} />
          <TouchableOpacity
            style={{
              height: 64,
              alignItems: 'center',
              paddingHorizontal: 16,
              flexDirection: 'row',
            }}
            onPress={async () => {
              try {
                const ShareResponse = await Share.shareSingle({
                  social: Social.Facebook,
                  title: 'Check this puppy',
                  message: 'This post is so great',
                });
                console.log('Result =>', ShareResponse);
              } catch (error) {
                console.log('Error =>', error);
              }
            }}>
            <AppSvg SvgSrc={AppIcons.logoFacebook} size={32} />
            <Text
              style={{
                ...AppTextStyles.label2,
                color: AppColors.lightTheme.label,
                marginLeft: 12,
              }}>
              Chia sẻ lên Facebook
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </BottomSheetKeyboardAvoidingView>
  );
};

export default ShareModal;

export const ShareModalUtils = {
  /**
   *
   * @author dqphuong2k2
   * @param {ShareModalProps} data
   */
  showModal: data => {
    if (modalRef) {
      modalRef.current.showModal(data);
    }
  },
  hideModal: data => {
    if (modalRef) {
      modalRef.current.hideModal(data);
    }
  },
};
