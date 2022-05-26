import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {images, COLORS, FONTS, SIZES, icons} from '../constants';
import {Avatar, Divider} from 'native-base';
import TextButton from '../component/TextButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconButton from '../component/IconButton';
import CategoryCard from '../component/CategoryCard';
import {useSelector} from 'react-redux';
import {BASE_URL_IMAGE} from '../api/axiosClient';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';

export default function ProfileScreen() {
  const userCurrent = useSelector(state => state.currentUser?.user?.data?.user);
  const navigation = useNavigation();

  const top_searches = [
    {
      id: 0,
      label: 'Sketch',
    },
    {
      id: 1,
      label: 'Modeling',
    },
    {
      id: 2,
      label: 'UI/UX',
    },
    {
      id: 3,
      label: 'Web',
    },
    {
      id: 4,
      label: 'Mobile',
    },
    {
      id: 5,
      label: 'Animation',
    },
  ];

  const TagNotice = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
        }}>
        <FlatList
          horizontal
          data={top_searches}
          keyExtractor={item => `TopSearches-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => (
            <TextButton
              lable={item.label}
              contentContainerStyle={{
                paddingVertical: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                marginRight:
                  index == top_searches.length - 1 ? SIZES.padding : 0,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
              }}
              lableStyle={{
                color: COLORS.black,
                ...FONTS.h4,
              }}
            />
          )}
        />
      </View>
    );
  };

  const Section = ({containerStyle, title, onPress, children}) => {
    return (
      <View style={{...containerStyle}}>
        <Divider my="2" background="muted.300" />
        <View style={{flexDirection: 'row', paddingHorizontal: SIZES.padding}}>
          <Text style={{flex: 1, ...FONTS.h2, color: COLORS.black}}>
            Classes
          </Text>
        </View>
        {children}
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={{position: 'absolute'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: SIZES.padding,
          }}>
          <Image
            source={images.logo}
            resizeMode="cover"
            style={{
              width: 250,
              height: 30,
            }}
          />
        </View>
      </View>
    );
  };
  const renderBanner = () => {
    const renderAvartar = () => {
      return (
        <View
          style={{
            width: 135,
            height: 135,
            backgroundColor: COLORS.white,
            borderRadius: 150,
            marginLeft: SIZES.padding,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Avatar
              bg="amber.500"
              source={{
                uri: `${BASE_URL_IMAGE}/${userCurrent.avatar}`,
              }}
              size="2xl"></Avatar>
            <View
              style={{
                position: 'absolute',
                width: 35,
                height: 35,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 35,
                bottom: 0,
                right: 8,
              }}>
              <Image
                source={icons.camera}
                resizeMode="contain"
                style={{
                  padding: 5,
                  width: 20,
                  height: 20,
                  tintColor: COLORS.black,
                }}
              />
            </View>
          </View>
        </View>
      );
    };

    const categories = [
      {
        id: 0,
        title: 'Mobile Design',
        thumbnail: require('../assets/images/bg_4.png'),
      },
      {
        id: 1,
        title: '3D Modeling',
        thumbnail: require('../assets/images/bg_2.png'),
      },
      {
        id: 2,
        title: 'Web Designing',
        thumbnail: require('../assets/images/bg_3.png'),
      },
      {
        id: 3,
        title: 'Illustrations',
        thumbnail: require('../assets/images/bg_1.png'),
      },
      {
        id: 4,
        title: 'Drawing',
        thumbnail: require('../assets/images/bg_5.png'),
      },
      {
        id: 5,
        title: 'Animation',
        thumbnail: require('../assets/images/bg_6.png'),
      },
    ];

    const renderSomeeInfor = () => {
      return (
        <Section title="Categorys" containerStyle={{marginTop: 10}}>
          <FlatList
            horizontal
            data={categories}
            listKey="Categorys"
            keyExtractor={item => `Categories-${item.id}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: SIZES.radius,
            }}
            renderItem={({item, index}) => {
              return (
                <CategoryCard
                  category={item}
                  containerStyle={{
                    marginLeft: index == 0 ? SIZES.padding : SIZES.base,
                    marginRight:
                      index == categories.length - 1 ? SIZES.padding : 0,
                  }}
                />
              );
            }}
          />
        </Section>
      );
    };

    return (
      <View style={{width: SIZES.width, height: 200}}>
        <Image
          source={images.background}
          resizeMode="cover"
          style={{
            width: SIZES.width,
            height: '100%',
            borderBottomRightRadius: SIZES.padding * 3,
          }}
        />
        {renderHeader()}
        {/* Avatar */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            bottom: -SIZES.padding * 1.5,
          }}>
          {renderAvartar()}
          <View style={{flexDirection: 'column', marginBottom: SIZES.padding}}>
            <Text
              style={{
                marginLeft: SIZES.padding,
                ...FONTS.h2,
                color: COLORS.white,
                fontSize: 18,
              }}>
              {userCurrent.firstName + ' ' + userCurrent.lastName}
            </Text>
            <Text
              style={{
                marginLeft: SIZES.padding,
                ...FONTS.body4,
                color: COLORS.black,
              }}>
              ID: 20IT{userCurrent.id}
            </Text>
            <View style={{marginLeft: SIZES.padding, flexDirection: 'row'}}>
              {/*        <IconButton icon={icons.facebook}/>
              <IconButton icon={icons.instagram}/> */}
              <IconButton
                icon={icons.back}
                onPress={() => {
                  try {
                    GoogleSignin.signOut();
                    GoogleSignin.revokeAccess();
                    navigation.navigate('Onboarding');
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </View>
          </View>
        </View>
        {TagNotice()}
        {renderSomeeInfor()}
      </View>
    );
  };

  return <View style={{flex: 1}}>{renderBanner()}</View>;
}
