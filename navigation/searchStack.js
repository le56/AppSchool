import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {DestinationDetail} from '../screens';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator initialRouteName="searchIndex">
      <Stack.Screen
        name="searchIndex"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="searchItem" component={DestinationDetail} />
    </Stack.Navigator>
  );
}
