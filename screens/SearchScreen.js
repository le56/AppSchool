import {Input} from 'native-base';
import React from 'react';
import {Animated, Image, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CategoryCard from '../component/CategoryCard';
import TextButton from '../component/TextButton';
import {COLORS, FONTS, icons, SIZES} from '../constants';

export default function SearchScreen({navigation}) {
  const scrollView = React.useRef();

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

  const categories = [
    {
      id: 0,
      title: 'Mobile Design',
      thumbnail: require('../assets/images/bg_1.png'),
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
      thumbnail: require('../assets/images/bg_4.png'),
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

  const renderTopSearches = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
            color: COLORS.black,
          }}>
          Top Searches
        </Text>
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
                backgroundColor: COLORS.lightGray,
              }}
              lableStyle={{
                color: COLORS.gray,
                ...FONTS.h3,
              }}
            />
          )}
        />
      </View>
    );
  };

  const renderBrowndCategories = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
            color: COLORS.black,
          }}>
          Brownse Category
        </Text>
        <FlatList
          data={categories}
          numColumns={2}
          scrollEnabled={false}
          listKey="BrowseCategory"
          keyExtractor={item => `BrownseCategories-${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => {
            return (
              <CategoryCard
                category={item}
                containerStyle={{
                  height: 130,
                  width: (SIZES.width - SIZES.padding * 2 - SIZES.radius) / 2,
                  marginTop: SIZES.radius,
                  marginLeft:
                    (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding,
                }}
                navigation={navigation}
              />
            );
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Animated.ScrollView
        ref={scrollView}
        contentContainerStyle={{
          marginTop: 5,
          paddingBottom: 200,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag">
        <View style={{marginHorizontal: SIZES.padding}}>
          <Input
            placeholder="Search for Topics, Coureses, Lecture..."
            width="100%"
            variant="outline"
            borderRadius="4"
            py="3"
            px="1"
            fontSize="14"
            mt={5}
            InputLeftElement={
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  tintColor: COLORS.gray,
                  width: 30,
                  height: 30,
                  margin: 10,
                }}
              />
            }
          />
        </View>
        {renderTopSearches()}
        {renderBrowndCategories()}
      </Animated.ScrollView>
    </View>
  );
}
