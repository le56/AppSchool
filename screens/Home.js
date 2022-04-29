import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {images, COLORS, FONTS, SIZES, icons} from '../constants';
import {Divider, Avatar} from 'native-base';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../component/Loading';
import {changeLoading, setUser} from '../redux/reducers/currentUser';
import {unwrapResult} from '@reduxjs/toolkit';

import axios from 'axios';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.currentUser.loading);
  const tokenID = useSelector(state => state.currentUser.tokenID);

  React.useEffect(() => {
    const getUser =async () => {
      dispatch(changeLoading(true));
      try {
        const res = await axios.post(
          'https://nguyenngockhanh.xyz/api/auth/google/login',
          {
            tokenId: tokenID,
          },
        );
        console.log(res.data);
        dispatch(setUser(res.data))
        dispatch(changeLoading(false));
      } catch (error) {
        console.log(error);
        dispatch(changeLoading(false));
      }
    };
    getUser()
  }, []);

  const [deadline, setdeadline] = React.useState([
    {
      id: 0,
      name: 'Ski Villa',
      duration: 3,
      color: '#FEF5F6',
    },
    {
      id: 1,
      name: 'Climbing Hills',
      duration: 5,
      color: '#F4FDF8',
    },
    {
      id: 2,
      name: 'Frozen Hills',
      duration: 1,
      color: '#F4FDF8',
    },
    {
      id: 3,
      name: 'Beach',
      duration: 4,
      color: '#FEF5F6',
    },
  ]);
  const [data, setdata] = React.useState([
    {
      id: 0,
      name: 'Ski Villa',
      img: images.skiVilla,
    },
    {
      id: 1,
      name: 'Climbing Hills',
      img: images.climbingHills,
    },
  ]);

  // Render

  function renderDeadline(item, index) {
    var deadline = {};

    if (index == 0) {
      deadline = {marginLeft: SIZES.padding};
    }

    return (
      <TouchableOpacity
        style={[
          {
            justifyContent: 'center',
            marginHorizontal: SIZES.base,
            ...deadline,
          },
        ]}
        onPress={() => {
          navigation.navigate('Deadline');
        }}>
        <View
          style={[
            {
              width: 200,
              height: 120,
              marginVertical: 10,
              backgroundColor: item.color,
              borderRadius: SIZES.radius,
            },
          ]}>
          <Text
            style={{
              marginTop: SIZES.padding / 2,
              marginLeft: SIZES.padding,
              color: COLORS.gray,
            }}>
            Deadline
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: SIZES.padding,
              marginTop: SIZES.padding / 3,
            }}>
            <View
              style={{
                backgroundColor: item.color == '#FEF5F6' ? 'red' : 'green',
                width: 10,
                height: 10,
                marginRight: 5,
                borderRadius: 30,
              }}></View>
            <Text> {item.duration} days left</Text>
          </View>
          <View style={{flex: 1, marginBottom: 10, justifyContent: 'center'}}>
            <Text
              style={{
                marginLeft: SIZES.padding,
                ...FONTS.h2,
              }}>
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  const renderBanner = () => {
    return (
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 220,
        }}
        imageStyle={{
          width: '100%',
          height: '100%',
          borderBottomLeftRadius: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
          <Text style={{...FONTS.h4, fontSize: 10}}>Mon, 31-2-2021</Text>
        </View>
        <View style={{position: 'absolute', top: 100, left: SIZES.padding}}>
          <Text style={{color: COLORS.white, ...FONTS.body1, fontSize: 15}}>
            Good Mornning !
          </Text>
          <Text style={{color: COLORS.white, ...FONTS.h2, fontSize: 25}}>
            Le Khanh Duong
          </Text>
          <Text style={{color: COLORS.white, ...FONTS.body1, fontSize: 15}}>
            Here is a list of schedule you need check...
          </Text>
        </View>
      </ImageBackground>
    );
  };

  function renderClasses(item, index) {
    let classes = {};
    if (item.id == 0) {
      classes = {marginTop: SIZES.padding - 5};
    }
    return (
      <TouchableOpacity
        style={[
          {
            marginHorizontal: SIZES.padding,
            marginBottom: SIZES.padding - 5,
            borderRadius: SIZES.radius,
            width: SIZES.width - SIZES.padding * 2,
            height: 120,
            backgroundColor: '#F9F9FC',
            flexDirection: 'row',
          },
          styles.shadow,
          classes,
        ]}
        onPress={() => {
          navigation.navigate('Deadline');
        }}>
        <View
          style={{
            width: '25%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.black, ...FONTS.h3}}>08:00</Text>
          <Text style={{...FONTS.body4}}>AM</Text>
        </View>
        <Divider orientation="vertical" />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginTop: SIZES.padding / 2,
            marginLeft: SIZES.padding / 2,
          }}>
          <Text style={{...FONTS.h3, color: COLORS.black, marginLeft: 0}}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
            }}>
            <View
              style={{
                width: 32,
                height: 32,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <IconEntypo name="location" size={18} />
            </View>
            <Text
              style={{...FONTS.h3, flex: 1, marginLeft: SIZES.padding / 3}}
              numberOfLines={1}>
              Viet Nam and Korea University hello
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Avatar
              bg="lightBlue.400"
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
              size="8">
              <Avatar.Badge bg="green.500" />
            </Avatar>
            <Text
              style={{
                overflow: 'hidden',
                marginLeft: SIZES.padding / 3,
                ...FONTS.h4,
              }}>
              Ts. Lê Khánh Dương
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  if (loading == false) {
    return (
      <View style={styles.container}>
        {/* Banner */}
        {renderBanner()}
          {/* Class */}
          <View>
            <FlatList
              ListHeaderComponent={<View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    marginTop: SIZES.base,
                    marginHorizontal: SIZES.padding,
                    color: COLORS.black,
                    ...FONTS.h2,
                  }}>
                  Classes
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      marginRight: SIZES.padding,
                      ...FONTS.h4,
                      backgroundColor: COLORS.primary,
                      color: COLORS.white,
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      borderRadius: 15,
                    }}>
                    See all
                  </Text>
                </TouchableOpacity>
              </View>}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => renderClasses(item, index)}
            />
          </View>
          {/* Deadline */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  marginTop: SIZES.base,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.black,
                  ...FONTS.h2,
                }}>
                Deadline
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    marginRight: SIZES.padding,
                    ...FONTS.h4,
                    backgroundColor: COLORS.primary,
                    color: COLORS.white,
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                    borderRadius: 15,
                  }}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={deadline}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => renderDeadline(item, index)}
            />
          </View>
      </View>
    );
  }
  return <Loading />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Home;
