import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from './src/components/AppButton';
import ListCardHorizontal from './src/components/ListCardHorizontal';
import ListTag from './src/components/ListTag';
import MainAppHeader from './src/components/MainAppHeader/MainAppHeader';
import OptimizeHeavyScreen from './src/components/OptimizeHeavyScreen/OptimizeHeavyScreen';
import Rating from './src/components/Rating/Rating';
import { AppColors } from './src/constants/AppColors';
import AppTextStyles from './src/constants/AppTextStyles';
import navigation from './src/navigation';
import GroupListProduct from './src/screens/marketTab/components/groupListProduct';

export default function Test() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>Test</Text>
    </View>
  )
}

const styles = StyleSheet.create({})