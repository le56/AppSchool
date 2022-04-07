import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {Divider, Button, SimpleGrid} from 'native-base';
import IconLable from './IconLable';
export default function HorizontalCard({containerStyle, course}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {/* Thumnail */}
      <ImageBackground
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: 130,
          height: 130,
          marginBottom: SIZES.radius,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            backgroundColor: COLORS.white,
          }}>
          <Image
            source={icons.favourite}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: course.is_favourite == false ? COLORS.gray : '#D9142E',
            }}
          />
        </View>
      </ImageBackground>
      {/* Detail */}
      <View style={{flex: 1, marginLeft: SIZES.base}}>
        <Text style={{...FONTS.h3, fontSize: 16, color: COLORS.black}}>
          {course.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}>
          <Text style={{...FONTS.h4}}>By {course.instructor}</Text>
          <IconLable
            icon={icons.timeIcon}
            lable={course.duration}
            containerStyle={{
              marginLeft: SIZES.base,
            }}
            iconStyle={{
              width: 15,
              height: 15,
            }}
            lableStyle={{
              ...FONTS.h4,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}>
              <Text style={{...FONTS.h4}}>Room: A.303</Text>
              <IconLable
                icon={icons.starIcon}
                lable={course.ratings}
                containerStyle={{
                    marginLeft:SIZES.padding,
                }}
                iconStyle={{
                    width:20,
                    height:20,
                    tintColor:COLORS.primary
                }}
                lableStyle={{
                    ...FONTS.h3
                }}
              />
          </View>
      </View>
    </TouchableOpacity>
  );
}
