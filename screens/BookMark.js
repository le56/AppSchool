import React from 'react';
import {FlatList, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Divider, Button} from 'native-base';
import CourseCard from '../component/CourseCard';
import {COLORS, FONTS, SIZES} from '../constants';
import TextButton from '../component/TextButton';
import CategoryCard from '../component/CategoryCard';
import HorizontalCard from '../component/HorizontalCard';

export default function BookMark() {
  const courses_list_1 = [
    {
      id: 0,
      title: 'Canava Graphic Design Course - Beginner',
      duration: '2h 30m',
      thumbnail: require('../assets/images/thumbnail_1.png'),
    },
    {
      id: 1,
      title: 'The Complete Presentation and speech',
      duration: '1h 30m',
      thumbnail: require('../assets/images/thumbnail_2.png'),
    },
  ];

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

  const courses_list_2 = [
    {
      id: 0,
      title: 'The Ultimate Ui/Ux Course Beginner to Advanced',
      duration: '2h 30m',
      instructor: 'Lê Khánh Dương',
      ratings: 4.9,
      price: 75,
      is_favourite: true,
      thumbnail: require('../assets/images/thumbnail_1.png'),
    },
    {
      id: 1,
      title: 'The Ultimate Ui/Ux Course Beginner to Advanced',
      duration: '2h 30m',
      instructor: 'Lê Khánh Dương',
      ratings: 4.9,
      price: 75,
      is_favourite: false,
      thumbnail: require('../assets/images/thumbnail_2.png'),
    },
    {
      id: 2,
      title: 'The Ultimate Ui/Ux Course Beginner to Advanced',
      duration: '2h 30m',
      instructor: 'Lê Khánh Dương',
      ratings: 4.9,
      price: 75,
      is_favourite: true,
      thumbnail: require('../assets/images/thumbnail_3.png'),
    },
    {
      id: 3,
      title: 'The Ultimate Ui/Ux Course Beginner to Advanced',
      duration: '2h 30m',
      instructor: 'Lê Khánh Dương',
      ratings: 4.9,
      price: 75,
      is_favourite: false,
      thumbnail: require('../assets/images/thumbnail_4.png'),
    },
    {
      id: 4,
      title: 'The Ultimate Ui/Ux Course Beginner to Advanced',
      duration: '2h 30m',
      instructor: 'Lê Khánh Dương',
      ratings: 4.9,
      price: 75,
      is_favourite: false,
      thumbnail: require('../assets/images/thumbnail_4.png'),
    },
    {
      id: 5,
      title: 'The Ultimate Ui/Ux Course Beginner to Advanced',
      duration: '2h 30m',
      instructor: 'Lê Khánh Dương',
      ratings: 4.9,
      price: 75,
      is_favourite: false,
      thumbnail: require('../assets/images/thumbnail_4.png'),
    },
  ];

  const Section = ({containerStyle, title, onPress, children}) => {
    return (
      <View style={{...containerStyle}}>
        <View style={{flexDirection: 'row', paddingHorizontal: SIZES.padding}}>
          <Text style={{flex: 1, ...FONTS.h2, color: COLORS.black}}>
            {title}
          </Text>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
              width: 80,
              borderRadius: 30,
            }}
            onPress={onPress}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>See all</Text>
          </TouchableOpacity>
        </View>
        {children}
      </View>
    );
  };

  const renderCourse = () => {
    return (
      <FlatList
        horizontal
        data={courses_list_1}
        listKey="Course"
        keyExtractor={item => `Course-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        renderItem={({item, index}) => (
          <CourseCard
            containerStyle={{
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index == courses_list_1.length - 1 ? SIZES.padding : 0,
            }}
            course={item}></CourseCard>
        )}
      />
    );
  };

  const renderCategory = () => {
    return (
      <Section title="Categorys">
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

  const renderPopularCourse = () => {
    return (
      <Section
        title="Popular Course"
        containerStyle={{
          marginTop: 20,
        }}>
        <FlatList
          data={courses_list_2}
          listKey="PopularCourses"
          scrollEnabled={false}
          keyExtractor={item => `PopularCourses-${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.padding,
          }}
          renderItem={({item, index}) => {
            return (
              <HorizontalCard
                course={item}
                containerStyle={{
                  marginVertical: SIZES.padding,
                  marginTop: index === 0 ? SIZES.radius : SIZES.padding,
                }}
              />
            );
          }}
        />
      </Section>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderCourse()}
      <Divider my="3" h={0.5} />
      {renderCategory()}
      {renderPopularCourse()}
    </ScrollView>
  );
}
