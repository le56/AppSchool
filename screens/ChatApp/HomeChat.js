import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {StreamChat} from 'stream-chat';
import {ChannelList, Chat, OverlayProvider} from 'stream-chat-react-native';

export default function HomeChat() {
  const API_KEY = 'jrst27v5nx84';
  const client = StreamChat.getInstance(API_KEY);
  const user = useSelector(state => state.currentUser.user.data.user);
  console.log(user);
  useEffect(() => {
    const connectUser = async () => {
      await client
        .connectUser(
          {
            id: `student${user.student_id}`,
            name: user.student_email,
            image: `https://nguyenngockhanh.xyz/images/${user.student_avatar}`,
          },
          client.devToken(`student${user.student_id}`),
        )
        .then(response => console.log(response))
        .catch(error => console.log(error));
    };
    connectUser();
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        <ChannelList />
      </Chat>
    </OverlayProvider>
  );
}
