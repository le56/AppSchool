import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {DestinationDetail} from '../screens';
import BookMark from '../screens/BookMark';

const NewStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="news_index">
      <Stack.Screen
        name="news_index"
        component={BookMark}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="news_details"
        options={{headerShown: false}}
        component={DestinationDetail}
      />
    </Stack.Navigator>
  );
};
export default NewStack;
