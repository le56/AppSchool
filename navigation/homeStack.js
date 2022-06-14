import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from '../screens';
import DeadlineSubmit from '../screens/DeadlineSubmit';
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

      <Stack.Screen
        name="Deadline_submit"
        options={{title: 'Deadline submit', headerShown: true}}
        component={DeadlineSubmit}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
