import {Divider} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {newsApi} from '../api';
import CategoryCard from '../component/CategoryCard';
import CourseCard from '../component/CourseCard';
import HorizontalCard from '../component/HorizontalCard';
import {COLORS, FONTS, icons, SIZES} from '../constants';

export default function BookMark() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadingNews, setIsLoadingNews] = useState(true);
  // loading more news
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const limit = 5;
  const totalRef = useRef(0);

  const getNews = async () => {
    const res = await newsApi.getAll({page, limit});
    const {
      data: {news, total},
    } = res.data;
    totalRef.current = total;
    setIsLoadingMore(false);
    setIsLoadingNews && setIsLoadingNews(false);
    setNews(prev => [...prev, ...news]);
  };

  useEffect(() => {
    getNews();
  }, [page]);

  const categoriesThumbs = [
    require('../assets/images/bg_4.png'),
    require('../assets/images/bg_2.png'),
    require('../assets/images/bg_3.png'),
    require('../assets/images/bg_1.png'),
    require('../assets/images/bg_5.png'),
    require('../assets/images/bg_6.png'),
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
      <View>
        <FlatList
          horizontal
          data={news.slice(0, 2)}
          listKey="Course"
          keyExtractor={item => `Course-${item.news_id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.padding / 2,
          }}
          renderItem={({item, index}) => (
            <CourseCard
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                marginRight: index == 1 ? SIZES.padding : 0,
              }}
              isLoadingNews={isLoadingNews}
              _news={item}></CourseCard>
          )}
        />
        {isLoadingNews && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 50,
            }}>
            <Image
              source={require('../assets/Loading.gif')}
              style={{width: 50, height: 50}}
            />
          </View>
        )}
      </View>
    );
  };

  const renderCategory = () => {
    const [categories, setCategories] = useState([]);
    const [isLoadingCate, setIsLoadingCate] = useState(true);
    const getCategories = async () => {
      const res = await newsApi.getNewsCategory();
      const {data} = res.data;
      setIsLoadingCate(false);
      setCategories(data);
    };
    useEffect(() => {
      getCategories();
    }, []);

    return (
      <Section title="Categorys news">
        <FlatList
          horizontal
          data={categories}
          listKey="Categorys"
          keyExtractor={item => `Categories-${item.news_category_id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => {
            return (
              <CategoryCard
                category={{
                  ...item,
                  thumbnail: categoriesThumbs[index],
                }}
                isLoading={isLoadingCate}
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : SIZES.base,
                  marginRight:
                    index == categories.length - 1 ? SIZES.padding : 0,
                }}
              />
            );
          }}
        />
        {isLoadingCate && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 50,
            }}>
            <Image
              source={require('../assets/Loading.gif')}
              style={{width: 50, height: 50}}
            />
          </View>
        )}
      </Section>
    );
  };

  const renderPopularCourse = () => {
    const handleLoadMore = async () => {
      if ((page - 1) * limit < totalRef.current && totalRef.current !== 0) {
        setIsLoadingMore(true);
        setTimeout(() => {
          setPage(page + 1);
        }, 10000);
      }
    };

    return (
      <Section
        title="Popular news"
        containerStyle={{
          marginTop: 20,
        }}>
        <FlatList
          data={news}
          listKey="PopularCourses"
          scrollEnabled={false}
          keyExtractor={item => `PopularCourses-${item.news_id}`}
          contentContainerStyle={{
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.padding,
          }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
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
          ItemSeparatorComponent={() => {
            return <Divider h={0.5} />;
          }}
        />
        {(isLoadingMore || isLoadingNews) && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 50,
            }}>
            <Image
              source={require('../assets/Loading.gif')}
              style={{width: 50, height: 50}}
            />
          </View>
        )}
      </Section>
    );
  };
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text style={{...FONTS.h2, color: COLORS.black}}>News</Text>
          <Text>Saturday, 28th May 2022</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.notification}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCourse()}
        <View style={{marginHorizontal: SIZES.padding}}>
          <Divider my="3" h={0.5} />
        </View>
        {renderCategory()}
        {renderPopularCourse()}
      </ScrollView>
    </View>
  );
}
