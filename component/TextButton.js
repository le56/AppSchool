import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'

export default function TextButton({contentContainerStyle, disabled, lable, lableStyle,onPress}) {
  return (
    <TouchableOpacity
        style={{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:COLORS.primary,
            ...contentContainerStyle
        }}
        disabled={disabled}
        onPress={onPress}
    >
        <Text style={{...FONTS.h3,color:COLORS.white,...lableStyle}}>
            {lable}
        </Text>
    </TouchableOpacity>
  )
}