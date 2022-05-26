import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import IconLable from './IconLable';
import {BASE_URL_IMAGE} from '../api/axiosClient';
import {useNavigation} from '@react-navigation/native';
export default function CourseCard({containerStyle, _news}) {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate('news_details', {
      news_id: _news.news_id,
    });
  };
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={{
        width: 270,
        ...containerStyle,
      }}>
      <Image
        source={{
          uri: `${BASE_URL_IMAGE}/${_news.news_image}`,
        }}
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
        {/* <View
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
        </View> */}
        <View
          style={{
            flexShrink: 1,
            paddingHorizontal: SIZES.radius,
          }}>
          <Text style={{flex: 1, ...FONTS.h3, fontSize: 16, color: 'black'}}>
            {_news.news_title.slice(0, 30) + ' ...'}
          </Text>
        </View>
      </View>
      <IconLable
        icon={icons.timeIcon}
        lable={_news.created_at}
        containerStyle={{marginTop: 10, marginLeft: 10}}></IconLable>
    </TouchableOpacity>
  );
}
