import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import CalendarStrip from 'react-native-calendar-strip';
import {Avatar} from 'native-base';
import IconEntypo from 'react-native-vector-icons/Ionicons';
export default function SchoolCalendar() {
  const date = new Date();

  const CardLesstion = () => {
    return (
      <View style={{marginTop: SIZES.padding / 2}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 20,
                height: 15,
                backgroundColor: '#FCBF82',
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{...FONTS.h3, marginLeft: 10, color: COLORS.black}}>
                07:00
              </Text>
            </View>
          </View>
          <Text style={{...FONTS.body4, marginRight: SIZES.padding}}>
            1 h 45 min
          </Text>
        </View>
        <View
          style={[
            styles.shadow,
            {
              backgroundColor: COLORS.white,
              width: SIZES.width - SIZES.padding * 2,
              height: 150,
              marginLeft: SIZES.padding,
              marginVertical: SIZES.padding / 2,
              borderRadius: SIZES.radius,
              flexDirection: 'row',
            },
          ]}>
          <View
            style={{
              backgroundColor: '#DC143C',
              width: 5,
              height: 150,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
            }}></View>
          <View style={{backgroundColor: '#FEF5F6', flex: 1}}>
            <View style={{marginTop: 10, marginLeft: 20}}>
              <Text style={{...FONTS.h3, color: COLORS.black}}>
                Java Advance
              </Text>
              <Text style={{marginTop: 3}}>The basic of Typography I</Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Avatar
                  bg="amber.500"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}
                  size="8">
                  <Avatar.Badge bg="green.500" />
                </Avatar>
                <View style={{marginLeft: 10}}>
                  <Text style={{...FONTS.h3, color: COLORS.black}}>
                    Ts: Le Khanh Duong
                  </Text>
                  <Text>Email: lkduong.20it12@vku.udn.vn</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 32,
                    height: 32,
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <IconEntypo name="md-location-sharp" size={20} />
                </View>
                <View style={{height: 32, alignItems: 'center'}}>
                  <Text style={{marginLeft: 10}}>Room: 3K301</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderTimeTable = () => {
    return (
      <ScrollView style={{marginTop: 10}}>
        <CardLesstion />
        <CardLesstion />
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
   
      {renderTimeTable()}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white},
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
