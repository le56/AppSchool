import {Image, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {BASE_URL_RESOURCE} from '../../api/axiosClient';
import {COLORS, SIZES} from '../../constants';
import {fileIcons, imgIcon} from '../../constants/icons';
import {getDeadlineTime} from '../../utils/getDeadlineTime';
import {getFileExtention} from '../../utils/getFileExtendsion';

const RenderDeadlineDone = ({data, checkPermission}) => {
  return (
    <View
      style={{
        marginVertical: 20,
      }}>
      <Text
        style={{
          fontSize: SIZES.h2,
        }}>
        Works submitted ({data?.deadline_done?.length || 0})
      </Text>
      <View
        style={{
          marginTop: 20,
        }}></View>
      {data?.deadline_done?.map(d => {
        const _url = `${BASE_URL_RESOURCE}/${d.attachment}`;
        const _file_ext = getFileExtention(_url);

        let {time, stringTime} = getDeadlineTime(data.deadline, d.created_at);
        if (time > 0) {
          stringTime = 'Early ' + stringTime;
        } else {
          stringTime = 'Later ' + stringTime;
        }

        return (
          <TouchableOpacity onPress={() => checkPermission(_url)}>
            <View
              style={{
                paddingVertical: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                borderColor: time > 0 ? 'green' : 'red',
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 3,
                marginBottom: 15,
              }}>
              <Image
                style={{width: 25, height: 25, marginRight: 5}}
                source={fileIcons['.' + _file_ext] || imgIcon}
              />
              <Text
                style={{
                  color: COLORS.primary,
                }}>
                {d.attachment}
              </Text>

              <Text
                style={{
                  color: time > 0 ? 'green' : 'red',
                  marginTop: 10,
                  paddingLeft: 30,
                }}>
                {stringTime}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default React.memo(RenderDeadlineDone);
