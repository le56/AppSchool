import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {COLORS, FONTS, images, SIZES} from '../constants';
import currentUser from '../redux/reducers/currentUser';
const Onboarding = ({navigation}) => {
  // Render
  const dispatch = useDispatch();
  const [tokenID, setTokenID] = useState('');

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '595078339994-uteuhhb7o0961q6funtmgb2n0jp39p90.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const GoogleSingUp = async () => {
    try {
      await GoogleSignin.signIn().then(({idToken}) => {
        dispatch(currentUser.actions.addTokenID(idToken));
        navigation.navigate('Home');
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={images.onboardingImage}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/*  <View style={{alignItems: 'center', marginHorizontal: SIZES.padding}}>
          <Text style={{...FONTS.h2}}>Digital Ticket</Text>
          <Text
            style={{
              color: COLORS.gray,
              marginTop: SIZES.padding,
              textAlign: 'center',
              ...FONTS.body3,
            }}>
            Easy solution to buy tickets for your travel, business trips,
            transportation, lodging and culinary.
          </Text>
        </View> */}

        <TouchableOpacity
          style={[
            styles.shadow,
            {
              marginTop: SIZES.padding * 2,
              width: '70%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
          onPress={GoogleSingUp}>
          <LinearGradient
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}
            colors={['#46aeff', '#5884ff']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              Login with google
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Onboarding;
