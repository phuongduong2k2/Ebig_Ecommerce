import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';


interface FBottomSheetProps {
    isVisible: boolean;
    closeModal: () => void;
    children: ReactNode;
    style?: ViewStyle;
}

const FBottomSheet: React.FC<FBottomSheetProps> = ({
    isVisible,
    closeModal,
    children,
    style,
}) => {
    return (
        <Modal
            statusBarTranslucent
            isVisible={isVisible}
            onBackdropPress={closeModal}
            onSwipeComplete={closeModal}
            backdropOpacity={0.8}
            swipeDirection="down"
            style={{ justifyContent: 'flex-end', margin: 0 }}>
            <View style={[styles.container, style]}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={styles.dotBTS}></View>
                </View>
                {children}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        backgroundColor: 'white',
    },
    dotBTS: {
        width: 32,
        height: 4,
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 4,
        marginTop: 8,
    },
});

export default FBottomSheet;