import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import deadlineApi from '../api/deadlineApi';
import {COLORS, FONTS, SIZES} from '../constants';
import {getDeadlineTime} from '../utils/getDeadlineTime';

function renderDeadline(item, index, navigation) {
  var deadline = {};

  if (index == 0) {
    deadline = {marginLeft: SIZES.padding};
  }

  let {time, stringTime} = getDeadlineTime(item.deadline);
  if (time < 0) {
    stringTime = stringTime + ' ago';
  }
  return (
    <TouchableOpacity
      style={[
        {
          justifyContent: 'center',
          marginHorizontal: SIZES.base,

          ...deadline,
        },
      ]}
      onPress={() => {
        navigation.navigate('Deadline_submit', {item, time, stringTime});
      }}>
      <View
        style={[
          {
            width: 200,
            height: 150,
            marginVertical: 10,
            backgroundColor: item.color,
            borderRadius: SIZES.radius,
            borderColor: time > 0 ? 'green' : 'red',
            borderWidth: 1,
            paddingHorizontal: 10,
          },
        ]}>
        <Text
          style={{
            marginTop: SIZES.padding / 2,
            // marginLeft: SIZES.padding,
            color: COLORS.gray,
          }}>
          Deadline
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // marginLeft: SIZES.padding,
            marginTop: SIZES.padding / 3,
          }}>
          <View
            style={{
              backgroundColor: time < 0 ? 'red' : 'green',
              width: 10,
              height: 10,
              marginRight: 5,
              borderRadius: 30,
            }}></View>

          <Text> {stringTime}</Text>
        </View>
        <View style={{flex: 1, marginBottom: 10, justifyContent: 'center'}}>
          <Text
            style={{
              // marginLeft: SIZES.padding,
              ...FONTS.h2,
            }}>
            {item.subject_class_name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const DeadlineWrapper = () => {
  const [deadline, setdeadline] = React.useState([]);
  const navigation = useNavigation();
  const userCurrent = useSelector(state => state.currentUser?.user?.data?.user);
  const getDeadline = async () => {
    const res = await deadlineApi.getAll();
    // console.warn(res);
    const {data} = res.data;
    setdeadline(data);
  };

  useEffect(() => {
    userCurrent && getDeadline();
  }, [userCurrent]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
            color: COLORS.black,
            ...FONTS.h2,
          }}>
          Deadline
        </Text>
        <TouchableOpacity>
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
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={deadline}
        keyExtractor={item => item.assigment_id.toString()}
        renderItem={({item, index}) => renderDeadline(item, index, navigation)}
      />
    </View>
  );
};

export default DeadlineWrapper;
