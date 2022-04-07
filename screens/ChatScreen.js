import React from 'react';
import {FlatList, Text, View} from 'react-native';
import CourseCard from '../component/CourseCard';
import {SIZES} from '../constants'
export default function ChatScreen() {
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
                index == courses_list_1.length - 1
                  ? SIZES.padding
                  : 0,
            }}
            course={item}></CourseCard>
        )}
      />
    );
  };

  return <View style={{flex: 1}}>{renderCourse()}</View>;
}
