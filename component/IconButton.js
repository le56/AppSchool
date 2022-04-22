import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { COLORS } from '../constants';

export default function IconButton({icon}) {
  return (
    <TouchableOpacity style={{padding:1,marginRight:10, backgroundColor:COLORS.white, borderRadius:5, marginTop:5, marginBottom:10}}>
      <Image
        source={icon}
        style={{width: 20, height: 20}}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
