import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Tabs from './navigation/tabs';
import {DestinationDetail, Onboarding} from './screens/';
import {icons, COLORS, SIZES} from './constants';
import {NativeBaseProvider} from 'native-base';
import 'firebase/firestore';
//import ConnectyCube from 'react-native-connectycube';
import {Provider} from 'react-redux';
import store from './redux/store';
const Stack = createStackNavigator();

const App = () => {
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

          {/* <Stack.Screen
            name="DestinationDetail"
            component={DestinationDetail}
            options={{headerShown: false}}
          /> */}

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
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
