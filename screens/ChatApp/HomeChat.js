import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextBase, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES} from '../../constants';
import SockJS from 'sockjs-client';
import {Avatar, Input, Icon} from 'native-base';
import {useSelector} from 'react-redux';

var stompClient = null;

export default function HomeChat() {
  let Sock = new SockJS('http://localhost:8080/chat');

  let userCurrent = useSelector(state => state.currentUser.user.data.user);

  const renderHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.padding / 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Avatar
          bg="lightBlue.400"
          source={{
            uri: `https://nguyenngockhanh.xyz/images/${userCurrent.avatar}`,
          }}
          size="md">
          <Avatar.Badge bg="green.500" />
        </Avatar>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.black,
            marginLeft: SIZES.padding / 2,
          }}>
          Messenger
        </Text>
      </View>
    );
  };

  const Data = [
    {
      id: 1,
      name: 'Peacock',
    },
    {
      id: 2,
      name: 'Dove',
    },
    {
      id: 3,
      name: 'Sparrow',
    },
    {
      id: 4,
      name: 'Ostrich',
    },
    {
      id: 5,
      name: 'Pigeon',
    },
    {
      id: 6,
      name: 'Quail',
    },
    {
      id: 6,
      name: 'Quail',
    },
    {
      id: 6,
      name: 'Quail',
    },
  ];

  const FlatList_Header = () => {
    return (
      <View style={{marginLeft: SIZES.padding}}>
        <TouchableOpacity
          style={{
            width: 55,
            height: 55,
            backgroundColor: '#DDDDDD',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}>
          <FontAwesome name="video-camera" size={23} color="black" />
        </TouchableOpacity>
        <Text
          numberOfLines={2}
          style={{
            width: 55,
            textAlign: 'center',
            marginTop: 5,
            ...FONTS.body4,
          }}>
          Make video call
        </Text>
      </View>
    );
  };

  const renderFriendItem = ({item}) => {
    return (
      <View style={{marginLeft: SIZES.padding / 2}}>
        <TouchableOpacity
          style={{
            width: 55,
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}>
          <Avatar
            bg="amber.500"
            source={{
              uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
            size={55}>
            <Avatar.Badge bg="green.500" />
          </Avatar>
        </TouchableOpacity>
        <Text
          numberOfLines={2}
          style={{
            width: 55,
            textAlign: 'center',
            marginTop: 5,
            ...FONTS.body4,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  const renderFriend = () => {
    return (
      <View>
        <View
          style={{
            marginHorizontal: SIZES.padding,
            marginTop: SIZES.padding / 3,
          }}>
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="20"
            py="1"
            px="3"
            borderWidth="0"
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<FontAwesome name="search" />}
              />
            }
          />
        </View>
        <FlatList
          data={Data}
          horizontal
          renderItem={renderFriendItem}
          ListHeaderComponent={FlatList_Header}
          showsHorizontalScrollIndicator={false}
          style={{
            marginVertical: SIZES.padding / 1.5,
          }}
        />
      </View>
    );
  };

  const renderMessages = ({item}) => {
    return (
      <View
        style={{
          marginLeft: SIZES.padding,
          marginBottom: SIZES.padding / 1.5,
          flexDirection:'row'
        }}>
        <Avatar
          bg="amber.500"
          source={{
            uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
          size={60}>
          <Avatar.Badge bg="green.500" />
        </Avatar>
        <View style={{marginLeft:SIZES.padding/1.5, justifyContent:'center'}}>
          <Text style={{fontSize:17}}>{item.name}</Text>
          <Text>The last message</Text>
        </View>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <FlatList
        data={Data}
        ListHeaderComponent={renderFriend}
        showsVerticalScrollIndicator={false}
        renderItem={renderMessages}
      />
    );
  };

  return (
    <View style={{width: SIZES.width, height: SIZES.height}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {renderHeader()}
        <TouchableOpacity
          style={{
            padding: 15,
            marginRight: SIZES.padding,
            backgroundColor: '#DDDDDD',
            borderRadius: SIZES.padding * 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons
            name="pencil-sharp"
            size={17}
            color="#222222"
            style={{position: 'absolute'}}
          />
        </TouchableOpacity>
      </View>
      {renderContent()}
    </View>
  );
}
