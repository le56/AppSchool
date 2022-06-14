import {Image, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {BASE_URL_RESOURCE} from '../../api/axiosClient';
import {COLORS, FONTS, SIZES} from '../../constants';
import {fileIcons, imgIcon} from '../../constants/icons';

const RenderInfomation = ({
  data,
  checkPermission,
  file_ext,
  stringTime,
  time,
  url,
}) => {
  return (
    <View>
      <Text
        style={{
          ...FONTS.h2,
        }}>
        Subject class : {data.subject_class_name}
      </Text>
      <Text
        style={{
          ...FONTS.body2,

          marginTop: 5,
        }}>
        {data.desc}
      </Text>
      <Text
        style={{
          marginTop: 15,
          fontSize: 18,
          color: '#555',
        }}>
        Required : {data.content}
      </Text>
      <Text
        style={{
          marginTop: 10,
          color: '#555',
          fontSize: 18,
        }}>
        Time remaining :{'   '}
        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            color: time > 0 ? 'green' : 'red',
          }}>
          {stringTime}
        </Text>
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 18,
        }}>
        Click file to download
      </Text>
      <TouchableOpacity onPress={() => checkPermission(url)}>
        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 25, height: 25, marginRight: 5}}
            source={fileIcons[file_ext] || imgIcon}
          />
          <Text
            style={{
              color: COLORS.primary,
            }}>
            {data.attachment}
          </Text>
        </View>
      </TouchableOpacity>
      {['.jpg', '.jpeg', '.png'].includes(file_ext) && (
        <Image
          source={{
            uri: `${BASE_URL_RESOURCE}/${data.attachment}`,
          }}
          resizeMode="cover"
          width="100%"
          style={{
            borderRadius: SIZES.body4,
          }}
          height={300}
        />
      )}
    </View>
  );
};

export default React.memo(RenderInfomation);
