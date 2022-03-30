<<<<<<< HEAD
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// screens
import {Onboarding, DestinationDetail} from './screens/';
// extra screens
import Tabs from './navigation/tabs';
=======
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {COLORS, icons, SIZES} from './constants';
// extra screens
import Tabs from './navigation/tabs';
// screens
import {DestinationDetail, Onboarding} from './screens/';
>>>>>>> 49aa08bd64c3b17afb3653cda9ffa5fd0b7470e6

import {icons, COLORS, SIZES} from './constants';
import {NativeBaseProvider} from 'native-base';
const Stack = createStackNavigator();

const App = () => {
  return (
<<<<<<< HEAD
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Onboarding'}>
          {/* Screens */}
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              title: null,
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerLeft: null,
              headerRight: () => (
                <TouchableOpacity
                  style={{marginRight: SIZES.padding}}
                  onPress={() => console.log('Pressed')}>
                  <Image
                    source={icons.barMenu}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="DestinationDetail"
            component={DestinationDetail}
            options={{headerShown: false}}
          />

          {/* Tabs */}
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
=======
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Onboarding'}
        screenOptions={{headerShown: false}}>
        {/* Screens */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: SIZES.padding}}
                onPress={() => console.log('Pressed')}>
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="DestinationDetail"
          component={DestinationDetail}
          options={{headerShown: false}}
        />

        {/* 
  
        {/* Tabs */}
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: ({onPress}) => (
              <TouchableOpacity
                style={{marginLeft: SIZES.padding}}
                onPress={onPress}>
                <Image
                  source={icons.back}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: SIZES.padding}}
                onPress={() => console.log('Menu')}>
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
>>>>>>> 49aa08bd64c3b17afb3653cda9ffa5fd0b7470e6
  );
};

export default () => {
  return <App />;
};
