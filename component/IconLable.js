import { View, Text,Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

export default function IconLable({containerStyle,icon,iconStyle,lable,lableStyle}) {
  return (
    <View
        style={{
            flexDirection:'row',
            alignItems:'center',
            ...containerStyle
        }}
    >
      <Image source={icon} style={{width:20,height:20,tintColor:COLORS.gray,...iconStyle}}/>
      <Text style={{marginLeft:SIZES.padding/2,color:COLORS.gray,...lableStyle}}>{lable}</Text>
    </View>
  )
}