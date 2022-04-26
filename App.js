import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Tabs from './navigation/tabs';
import {DestinationDetail, Onboarding} from './screens/';
import {icons, COLORS, SIZES} from './constants';
import {NativeBaseProvider} from 'native-base';
import 'firebase/firestore';
import ConnectyCube from 'react-native-connectycube';
import {Provider} from 'react-redux';
import store from './redux/store';
const Stack = createStackNavigator();

const App = () => {
  const CREDENTIALS = {
    appId: 6178,
    authKey: 'TZne3rsOxy9vPym',
    authSecret: 'ymLf5xxUU8ZnJr4',
  };
  ConnectyCube.init(CREDENTIALS);

  const userProfile = {
    login: 'maqwqrvin18',
    password: 'swqupersecurepwd',
    email: 'duong@gmail.com',
    full_name: 'Marvin Simon',
    phone: '47802323143',
    website: 'https://dozensofdreams.com',
    tag_list: ['iphone', 'apple'],
    custom_data: JSON.stringify({middle_name: 'Bartoleo'}),
  };

  const signUp = async params => {
    await ConnectyCube.createSession();
    await ConnectyCube.users.signup(params);
    return this.signIn(params);
  };
  signUp(userProfile);

  return (
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
    /*  */
  );
};

export default () => {
  return   <Provider store={store}><App/></Provider>;
};
