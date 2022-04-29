import { View, Text,Image } from 'react-native'
import React from 'react'

export const loadingFile = require("../assets/Loading.gif");

export default function Loading() {
  return (
    <View style={{width:'100%', height:'100%', alignItems:'center',justifyContent:'center'}}>
      <Image source={loadingFile} style={{width:50, height:50}}/>
    </View>
  )
}