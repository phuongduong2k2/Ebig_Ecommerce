import React, { Children, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, GestureResponderEvent, TouchableOpacity } from 'react-native';

import { AppIcons } from '../../constants/AppIcons';
import AppTextStyles from '../../constants/AppTextStyles';
import { AppColors } from '../../constants/AppColors';

interface CustomProgress {
    iconLeft?: keyof typeof AppIcons | any,
    iconRight?: keyof typeof AppIcons | any,
    action: any,
    colorAction?: string,
    contentTitle?: string,
    TextActionView?: string,
    value?: string,
    value1?: string,
    style?: ViewStyle;
}

const AppProgressView: React.FC<CustomProgress> = ({
    iconLeft,
    iconRight,
    action,
    colorAction,
    contentTitle,
    TextActionView,
    value,
    value1,
    style


}) => {

    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ flex: 1 }}>
                    {contentTitle !== undefined &&
                        <Text style={{ ...AppTextStyles.label5, color: AppColors.lightTheme.title }}>{contentTitle}</Text>
                    }

                </View>
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                    {TextActionView !== undefined &&
                        <Text style={{ ...AppTextStyles.label5, color: AppColors.lightTheme.title }}>{TextActionView}</Text>
                    }

                </TouchableOpacity>
            </View>
            {iconLeft && iconRight ?

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 7 }}>

                    <View>
                        {iconLeft !== undefined && iconLeft
                        }
                    </View>
                    <View style={[{ flex: 1, backgroundColor: '#F3F3F3', borderRadius: 8, height: 10 }, style]}>
                        <Text style={{ width: action, backgroundColor: colorAction ? colorAction : AppColors.primary, borderRadius: 8 }}></Text>
                    </View>
                    <View>
                        {iconRight !== undefined && iconRight}

                    </View>

                </View>
                :
                (<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 4 }}>

                    <View>
                        <Text style={AppTextStyles.title6}>{value}</Text>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: '#F3F3F3', borderRadius: 8, height: 10 }, style]}>
                        <Text style={{ width: action, backgroundColor: colorAction ? colorAction : AppColors.primary, borderRadius: 8 }}></Text>
                    </View>
                    <View >
                        <Text style={AppTextStyles.title6}>{value1}</Text>
                    </View>
                </View>

                )
            }


            {value && value1 && iconLeft && iconRight &&
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={AppTextStyles.title6}>{value}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={AppTextStyles.title6}>{value1}</Text>
                    </View>
                </View>
            }



        </View>


    );
};

export default AppProgressView;
