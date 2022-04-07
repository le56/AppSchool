import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import IconLable from './IconLable';
export default function CourseCard({containerStyle, course}) {
  return (
    <TouchableOpacity
      style={{
        width: 270,
        ...containerStyle,
      }}>
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 150,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
      />
      {/* Detail */}
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 45,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            backgroundColor: COLORS.primary,
          }}>
          <Image
            source={icons.playIcon}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
        </View>
        <View
          style={{
            flexShrink: 1,
            paddingHorizontal: SIZES.radius,
          }}>
          <Text style={{ flex:1,...FONTS.h3, fontSize: 16, color: 'black'}}>
            {course.title}
          </Text>
        </View>
        </View>
          <IconLable
            icon={icons.timeIcon}
            lable={course.duration}
            containerStyle={{marginTop: 10, marginLeft:55}}></IconLable>
    </TouchableOpacity>
  );
}
