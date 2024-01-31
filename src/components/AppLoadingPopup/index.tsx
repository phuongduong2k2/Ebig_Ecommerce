import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity, Text } from 'react-native';

import { AppIcons } from '../../constants/AppIcons';
import AppSvg from '../AppSvg';
import AppTextStyles from '../../constants/AppTextStyles';

import Modal from 'react-native-modal';
interface PopupDialog {
    isVisible: boolean;
    closeModal: () => void;
    onPress?: () => void;
    ImageNotification?: keyof typeof AppIcons,
    style?: ViewStyle;
    title: string,
    bodyTitle: string,
    titleButtonleft?: string,
    titleButton: string,

    backgroundColor: string
}

const PopupDialog: React.FC<PopupDialog> = ({
    isVisible,
    closeModal,
    onPress,
    ImageNotification,
    style,
    title,
    bodyTitle,
    titleButtonleft,
    titleButton,
    backgroundColor
}) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            onSwipeComplete={closeModal}
            backdropOpacity={0.5}
            // onBackdropPress={closeModal}
            // swipeDirection="down"
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={[styles.container, style]}>
                {ImageNotification !== undefined &&
                    <View style={{ marginBottom: 12 }}>
                        <AppSvg SvgSrc={AppIcons[ImageNotification]} size={60} />
                    </View>
                }
                <Text style={AppTextStyles.title2} >{title}</Text>
                <View style={{ marginTop: 4 }}>
                    <Text style={[AppTextStyles.body2, { textAlign: 'center' }]} >{bodyTitle}</Text></View>

                <View style={{ flexDirection: 'row' }}>
                    {titleButtonleft !== undefined &&
                        <TouchableOpacity
                            style={[styles.viewButton, { backgroundColor: '#F3F3F3', marginRight: 8 }]}>
                            <Text style={[AppTextStyles.button2, { color: '#8C8C8C' }]}>{titleButtonleft}</Text>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity
                        onPress={onPress}
                        style={[styles.viewButton, { backgroundColor: backgroundColor }]}>

                        <Text style={[AppTextStyles.button2, { color: '#FFFFFF' }]}>{titleButton}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,

    },
    viewButton: {
        flex: 1,
        marginTop: 24,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8
    }
});

export default PopupDialog;