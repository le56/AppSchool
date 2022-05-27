import {ScrollView} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Divider} from 'native-base';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RenderHtml from 'react-native-render-html';

import {newsApi} from '../api';
import {BASE_URL_IMAGE} from '../api/axiosClient';

import {images, icons, COLORS, FONTS, SIZES} from '../constants';

const DestinationDetail = ({navigation, route}) => {
  const {news_id} = route.params;
  const [news, setNews] = useState(null);

  const windowWidth = Dimensions.get('window').width;

  const getNews = async () => {
    const res = await newsApi.getOne(news_id);
    const {data} = res.data;
    setNews(data);
  };

  const getHtml = content => {
    const style = `
        
    `;
    return `<div>

      </div>`;
  };

  useEffect(() => {
    getNews();
  }, []);
  // Render
  return (
    <ScrollView style={styles.container}>
      {/* Header
      <View style={{flex: 2}}>
        <Image
          source={{
            uri: `${BASE_URL_IMAGE}/${news?.news_image}`,
          }}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '60%',
          }}
        />
       
      </View> */}

      <View
        style={[
          {
            borderRadius: 15,
            padding: SIZES.body3,
            backgroundColor: COLORS.white,
          },
          // styles.shadow,
        ]}>
        <View>
          <View
            style={{
              marginBottom: 30,
            }}>
            {/* <Image
              source={{
                uri: `${BASE_URL_IMAGE}/${news?.news_image}`,
              }}
              resizeMode="cover"
              style={{
                width: '100%',
                height: 200,
                borderRadius: 15,
              }}
            /> */}
            {/* Header Buttons */}
            <View
              style={{
                position: 'absolute',
                top: -10,
                left: 0,
                right: 0,
                //height: 50,
                flexDirection: 'row',
              }}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{justifyContent: 'center'}}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: COLORS.primary,
                      marginTop: 5,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('Menu on pressed');
                  }}>
                  <Image
                    source={icons.menu}
                    resizeMode="cover"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: COLORS.primary,
                      marginTop: 5,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Divider h={0.5} />
          <View
            style={{
              marginTop: 5,
            }}>
            <Text style={{...FONTS.h3}}>{news?.news_title}</Text>
            {/* <Text style={{color: COLORS.gray, ...FONTS.body3}}>France</Text> */}

            {/* <StarReview
                                rate={4.5}
                            /> */}
          </View>
        </View>

        <View style={{marginTop: SIZES.radius}}>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>
            {news?.news_desc}
          </Text>
        </View>
      </View>

      {/* Body */}
      <View>
        {news?.news_content && (
          <RenderHtml
            contentWidth={windowWidth}
            baseStyle={{
              paddingHorizontal: SIZES.body3,
            }}
            source={{
              html: news?.news_content,
            }}
          />
        )}
        {/* Icons */}
        {/* <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            paddingHorizontal: SIZES.padding * 2,
            justifyContent: 'space-between',
          }}>
          <IconLabel icon={icons.villa} label="Villa" />

          <IconLabel icon={icons.parking} label="Parking" />

          <IconLabel icon={icons.wind} label="4 °C" />
        </View> */}

        {/* About */}
        {/* <View
          style={{marginTop: SIZES.padding, paddingHorizontal: SIZES.padding}}>
          <Text style={{...FONTS.h2}}>About</Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            Located at the Alps with an altitude of 1,702 meters. The ski area
            is the largest ski area in the world and is known as the best place
            to ski. Many other facilities, such as fitness center, sauna, steam
            room to star-rated restaurants.
          </Text>
        </View> */}
      </View>

      {/* Footer */}
      {/* <View style={{flex: 0.5, paddingHorizontal: SIZES.padding}}>
        <LinearGradient
          style={[{height: 70, width: '100%', borderRadius: 15}]}
          colors={['#edf0fc', '#d6dfff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                flex: 1,
                marginHorizontal: SIZES.padding,
                justifyContent: 'center',
              }}>
              <Text style={{...FONTS.h1}}>$1000</Text>
            </View>

            <TouchableOpacity
              style={{
                width: 130,
                height: '80%',
                marginHorizontal: SIZES.radius,
              }}
              onPress={() => {
                console.log('Booking on pressed');
              }}>
              <LinearGradient
                style={[
                  {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  },
                ]}
                colors={['#46aeff', '#5884ff']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={{color: COLORS.white, ...FONTS.h2}}>BOOKING</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View> */}
    </ScrollView>
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

export default DestinationDetail;

const StarReview = ({rate}) => {
  var starComponents = [];
  var fullStar = Math.floor(rate);
  var noStar = Math.floor(5 - rate);
  var halfStar = 5 - fullStar - noStar;
  // Full Star
  for (var i = 0; i < fullStar; i++) {
    starComponents.push(
      <Image
        key={`full-${i}`}
        source={icons.starFull}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />,
    );
  }
  // Half Star
  for (var i = 0; i < halfStar; i++) {
    starComponents.push(
      <Image
        key={`half-${i}`}
        source={icons.starHalf}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />,
    );
  }

  // No Star
  for (var i = 0; i < noStar; i++) {
    starComponents.push(
      <Image
        key={`empty-${i}`}
        source={icons.starEmpty}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />,
    );
  }
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {starComponents}
      <Text
        style={{marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>
        {rate}
      </Text>
    </View>
  );
};

const IconLabel = ({icon, label}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{
          width: 50,
          height: 50,
        }}
      />
      <Text style={{marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h3}}>
        {label}
      </Text>
    </View>
  );
};
