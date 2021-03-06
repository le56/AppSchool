import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

export default function CategoryCard({category, containerStyle, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('searchItem');
      }}>
      <ImageBackground
        source={category?.thumbnail}
        resizeMode="cover"
        style={{
          height: 150,
          width: 200,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          justifyContent: 'flex-end',
          ...containerStyle,
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
          }}>
          {category?.news_category_name || category?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
