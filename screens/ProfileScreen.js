import {View, Text, Image} from 'react-native';
import React from 'react';
import {images, COLORS, FONTS, SIZES, icons} from '../constants';
import {Avatar} from 'native-base';
export default function ProfileScreen() {
  const renderHeader = () => {
    return (
      <View style={{position:'absolute'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: SIZES.padding,
          }}>
          <Image
            source={images.logo}
            resizeMode="cover"
            style={{
              width: 250,
              height: 30,
            }}
          />
        </View>
      </View>
    );
  };
  const renderBanner = () => {
    const renderAvartar = () => {
      return (
        <View
          style={{
            position: 'absolute',
            width: 135,
            height: 135,
            backgroundColor: COLORS.white,
            borderRadius: 150,
            bottom: -25,
            marginLeft: SIZES.padding,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Avatar
            bg="amber.500"
            source={{
              uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
            size="2xl"></Avatar>
          <View
            style={{
              position: 'absolute',
              width: 35,
              height: 35,
              backgroundColor: COLORS.white,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 35,
              bottom: 0,
              right: 8,
            }}>
            <Image
              source={icons.camera}
              resizeMode="contain"
              style={{
                padding: 5,
                width: 20,
                height: 20,
                tintColor: COLORS.black,
              }}
            />
          </View>
        </View>
      );
    };
    return (
      <View style={{width: SIZES.width, height: 200}}>
        <Image
          source={images.background}
          resizeMode="cover"
          style={{
            width: SIZES.width,
            height: '100%',
            borderBottomRightRadius: SIZES.padding * 3,
          }}
        />
        {renderHeader()}
        {/* Avatar */}
        {renderAvartar()}
      </View>
    );
  };

  return <View style={{flex: 1}}>{renderBanner()}</View>;
}
