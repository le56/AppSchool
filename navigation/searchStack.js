import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from '../screens/SearchScreen';
import { DestinationDetail } from '../screens';

const Stack = createStackNavigator();

export default function searchStack() {
  return (
    <Stack.Navigator initialRouteName='searchIndex'>
        <Stack.Screen name='searchIndex' component={SearchScreen} options={{headerShown:false}}/>
        <Stack.Screen name='searchItem' component={DestinationDetail}/>
    </Stack.Navigator>
  )
}