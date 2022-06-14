import axios from 'axios';
import {
  AlertDialog,
  Avatar,
  Button,
  Center,
  Divider,
  ScrollView,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {timeTableApi} from '../api';
import {BASE_URL_IMAGE} from '../api/axiosClient';
import DeadlineWrapper from '../component/DeadlineWrapper';
import Loading from '../component/Loading';
import {COLORS, FONTS, images, SIZES} from '../constants';
import {changeLoading, setUser} from '../redux/reducers/currentUser';
import {setToken} from '../utils/setToken';
import {timeLesstion} from '../utils/time';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.currentUser.loading);
  const userCurrent = useSelector(state => state.currentUser?.user?.data?.user);
  const tokenID = useSelector(state => state.currentUser.tokenID);
  const [isOpen, setIsOpen] = React.useState(false);
  const [absents, setAbsents] = useState(null);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  React.useEffect(() => {
    const getUser = async () => {
      dispatch(changeLoading(true));
      try {
        const res = await axios.post(
          'https://nguyenngockhanh.xyz/api/auth/google/login',
          {
            tokenId: tokenID,
          },
        );

        setToken(res.data.data.access_token);
        dispatch(setUser(res.data));
        dispatch(changeLoading(false));
      } catch (error) {
        console.log(error);
        dispatch(changeLoading(false));
      }
    };
    getUser();
  }, []);

  const [data, setdata] = React.useState([]);

  const getTodayTimetable = async () => {
    const res = await timeTableApi.getTodayTimetable();
    // console.warn('res timetable ', res.data);
    setdata(res.data.data);
  };

  useEffect(() => {
    userCurrent && getTodayTimetable();
  }, [userCurrent]);

  const renderBanner = () => {
    return (
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 220,
        }}
        imageStyle={{
          width: '100%',
          height: '100%',
          borderBottomLeftRadius: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
          <Text style={{...FONTS.h4, fontSize: 10}}>Mon, 31-2-2021</Text>
        </View>
        <View style={{position: 'absolute', top: 100, left: SIZES.padding}}>
          <Text style={{color: COLORS.white, ...FONTS.body1, fontSize: 15}}>
            Good Mornning !
          </Text>
          <Text style={{color: COLORS.white, ...FONTS.h2, fontSize: 25}}>
            {userCurrent?.firstName + ' ' + userCurrent?.lastName}
          </Text>
          <Text style={{color: COLORS.white, ...FONTS.body1, fontSize: 15}}>
            Here is a list of schedule you need check...
          </Text>
        </View>
      </ImageBackground>
    );
  };

  function renderClasses(item, index) {
    let classes = {};
    if (item.id == 0) {
      classes = {marginTop: SIZES.padding - 5};
    }
    return (
      <TouchableOpacity
        style={[
          {
            marginHorizontal: SIZES.padding,
            marginBottom: SIZES.padding - 5,
            borderRadius: SIZES.radius,
            width: SIZES.width - SIZES.padding * 2,
            height: 120,
            backgroundColor: '#F9F9FC',
            flexDirection: 'row',
          },
          styles.shadow,
          classes,
        ]}
        onPress={() => {
          setAbsents(item.attendance);
          setIsOpen(true);
        }}>
        <View
          style={{
            width: '25%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.black, ...FONTS.h3}}>
            {timeLesstion[item.lession.split('-')[0]]}
          </Text>
          {/* <Text style={{...FONTS.body4}}>AM</Text> */}
        </View>
        <Divider orientation="vertical" />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginTop: SIZES.padding / 2,
            marginLeft: SIZES.padding / 2,
          }}>
          <Text style={{...FONTS.h3, color: COLORS.black, marginLeft: 0}}>
            {item.subject_class_name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
            }}>
            <View
              style={{
                width: 32,
                height: 32,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <IconEntypo name="location" size={18} />
            </View>
            <Text
              style={{...FONTS.h4, flex: 1, marginLeft: SIZES.padding / 3}}
              numberOfLines={1}>
              {item.classroom}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Avatar
              bg="lightBlue.400"
              source={{
                uri: `${BASE_URL_IMAGE}/${item.lecturer.leturer_avatar}`,
              }}
              size="6">
              <Avatar.Badge bg="green.500" />
            </Avatar>
            <Text
              style={{
                overflow: 'hidden',
                marginLeft: SIZES.padding / 3,
                ...FONTS.h4,
                fontSize: 12,
              }}>
              {/* Ts. Lê Khánh Dương */}
              {item.lecturer.leturer_level.level_name + ' '}
              {item.lecturer.leturer_firstName +
                ' ' +
                item.lecturer.leturer_lastName}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  if (loading == false) {
    return (
      <ScrollView style={styles.container}>
        <Center>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen}
            onClose={() => {}}>
            <AlertDialog.Content>
              <AlertDialog.Header>Students are absent.</AlertDialog.Header>
              <AlertDialog.Body>
                {absents &&
                  absents.attendance_students_absent.map(s => {
                    return (
                      <Text key={s.student_id}>
                        {s.student_fisrtName + ' ' + s.student_lastName}
                      </Text>
                    );
                  })}
                {!absents && (
                  <Text
                    style={{...FONTS.h3, color: COLORS.black, marginLeft: 0}}>
                    Not checked
                  </Text>
                )}
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="unstyled"
                    colorScheme="coolGray"
                    onPress={onClose}
                    ref={cancelRef}>
                    Cancel
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </Center>
        {/* Banner */}
        {renderBanner()}
        {/* Class */}
        <View>
          <FlatList
            ListHeaderComponent={
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  marginBottom: 15,
                }}>
                <Text
                  style={{
                    marginTop: SIZES.base,
                    marginHorizontal: SIZES.padding,
                    color: COLORS.black,
                    ...FONTS.h2,
                  }}>
                  Classes
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SchoolCarlendar')}>
                  <Text
                    style={{
                      marginRight: SIZES.padding,
                      ...FONTS.h4,
                      backgroundColor: COLORS.primary,
                      color: COLORS.white,
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      borderRadius: 15,
                    }}>
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
            }
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.timetable_id.toString()}
            renderItem={({item, index}) => renderClasses(item, index)}
          />
        </View>
        {/* Deadline */}
        <DeadlineWrapper />
      </ScrollView>
    );
  }
  return <Loading />;
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
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Home;
