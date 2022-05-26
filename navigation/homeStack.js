import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from '../screens';
import SchoolCalendar from '../screens/SchoolCalendar';

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Scheduler', headerShown: false}}
      />

      <Stack.Screen
        name="SchoolCarlendar"
        options={{title: 'Scheduler', headerShown: true}}
        component={SchoolCalendar}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
