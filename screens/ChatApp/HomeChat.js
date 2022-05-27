import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {StreamChat} from 'stream-chat';
import {Avatar, Divider} from 'native-base';
import {
  Channel,
  ChannelList,
  Chat,
  MessageInput,
  MessageList,
  OverlayProvider,
} from 'stream-chat-react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS, SIZES} from '../../constants';
export default function HomeChat() {
  const API_KEY = 'jrst27v5nx84';
  const client = StreamChat.getInstance(API_KEY);
  const user = useSelector(state => state.currentUser.user.data.user);
  const Stack = createStackNavigator();
  const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: `student${user.id}`,
          name: user.student_email,
          image: `https://nguyenngockhanh.xyz/images/${user.avatar}`,
        },
        client.devToken(`student${user.id}`),
      );
      const channel = client.channel('messaging', 'notjustdev', {
        name: 'notjust.dev',
      });
      await channel.watch();
    };
    connectUser();
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        {selectedChannel ? (
          <Channel channel={selectedChannel}>
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                //    paddingHorizontal: SIZES.padding,
                alignItems: 'center',
              }}>
              <View
                style={{margin: 5, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setSelectedChannel(null)}>
                  <Ionicons
                    name="arrow-back"
                    size={25}
                    color={COLORS.primary}
                    style={{
                      paddingLeft: 5,
                    }}
                  />
                </TouchableOpacity>
                <Avatar
                  bg="amber.500"
                  source={{
                    uri: `https://i.pinimg.com/originals/ca/83/ab/ca83ab3daa588d1bc3b29331d5a3dff2.jpg`,
                  }}
                  size="10"
                  marginLeft={1}>
                  <Avatar.Badge bg="green.500" />
                </Avatar>
                <Text
                  style={{
                    ...FONTS.h4,
                    color: COLORS.black,
                    marginLeft: SIZES.padding / 2,
                  }}>
                  Khánh
                </Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>
           {/*      <FontAwesome
                  name="phone"
                  size={25}
                  color={COLORS.primary}
                  style={{padding: 5, paddingRight:20}}
                /> */}
                <FontAwesome
                  name="info-circle"
                  size={30}
                  color={COLORS.primary}
                  style={{padding: 5, paddingRight:20}}
                />
              </View>
            </View>
            <Divider bg={COLORS.lightGray} />
            <MessageList />
            <MessageInput />
          </Channel>
        ) : (
          <ChannelList onSelect={channel => setSelectedChannel(channel)} />
        )}
      </Chat>
    </OverlayProvider>
  );
}