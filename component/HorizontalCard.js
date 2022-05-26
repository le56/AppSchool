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
import {useNavigation} from '@react-navigation/native';
import {BASE_URL_IMAGE} from '../api/axiosClient';
export default function HorizontalCard({containerStyle, course}) {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate('news_details', {
      news_id: course.news_id,
    });
  };
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {/* Thumnail */}
      <ImageBackground
        source={{
          uri: `${BASE_URL_IMAGE}/${course.news_image}`,
        }}
        resizeMode="cover"
        style={{
          width: 130,
          height: 130,
          marginBottom: SIZES.radius,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        {/* <View
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
        </View> */}
      </ImageBackground>
      {/* Detail */}
      <View style={{flex: 1, marginLeft: SIZES.body3}}>
        <Text style={{...FONTS.h3, fontSize: 16, color: COLORS.black}}>
          {course.news_title.slice(0, 20) + ' ...'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}>
          <Text style={{...FONTS.h4}}>
            {course.news_desc.slice(0, 40) + ' ...'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}>
          {/* <Text style={{...FONTS.h4}}>Room: A.303</Text>
          <IconLable
            icon={icons.starIcon}
            lable={course.ratings}
            containerStyle={{
              marginLeft: SIZES.padding,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.primary,
            }}
            lableStyle={{
              ...FONTS.h3,
            }}
          /> */}
          <IconLable
            icon={icons.timeIcon}
            lable={course.created_at}
            containerStyle={
              {
                // marginLeft: SIZES.base,
              }
            }
            iconStyle={{
              width: 15,
              height: 15,
            }}
            lableStyle={{
              ...FONTS.h4,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
