import {Alert, Button, Image, ScrollView, Text, View} from 'native-base';
import React, {useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import DocumentPicker, {types} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import axiosClient, {BASE_URL_RESOURCE} from '../api/axiosClient';
import RenderDeadlineDone from '../component/DeadlineSubmitComponent/RenderDeadlineDone';
import RenderInfomation from '../component/DeadlineSubmitComponent/RenderInfomation';
import {COLORS} from '../constants';
import {fileIcons, imgIcon} from '../constants/icons';
import {getFileExtention} from '../utils/getFileExtendsion';
const DeadlineSubmit = ({route, navigation}) => {
  const [deadlineState, setDeadlineState] = useState(route.params);
  const {item: data, time, stringTime} = deadlineState;
  const url = `${BASE_URL_RESOURCE}/${data.attachment}`;
  const file_ext = '.' + getFileExtention(url);

  const [file, setFile] = useState(null);

  const checkPermission = async url => {
    if (Platform.OS === 'ios') {
      downloadFile();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          downloadFile(url);
          console.log('Storage Permission Granted.');
        } else {
          Alert.alert('Error', 'Storage Permission Not Granted');
        }
      } catch (err) {
        console.log('++++' + err);
      }
    }
  };

  const downloadFile = url => {
    let date = new Date();
    const file_ext = getFileExtention(url);
    let FILE_URL = url;

    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          '/file_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          '.' +
          file_ext,
        description: 'downloading file...',
        notification: true,

        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        alert('File Downloaded Successfully.');
      });
  };

  const handlePickFile = async () => {
    const response = await DocumentPicker.pick({
      presentationStyle: 'fullScreen',
      type: [types.pdf, types.images, types.doc, types.docx],
    });
    setFile(response[0]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      console.log(data);
      formData.append('file', file);
      formData.append('assigment_id', data.assigment_id);
      const res = await axiosClient.patch('/deadline-done', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      const {data: dataRes} = res.data;
      setFile(null);
      setDeadlineState({
        ...deadlineState,
        item: {
          ...deadlineState.item,
          deadline_done: [
            ...deadlineState.item.deadline_done,
            {
              deadline_id: dataRes.deadline_id,
              attachment: dataRes.attachment,
              created_at: dataRes.created_at,
              updated_at: dataRes.updated_at,
            },
          ],
        },
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 15,
            paddingVertical: 20,
          }}>
          <RenderInfomation
            checkPermission={checkPermission}
            data={data}
            file_ext={file_ext}
            stringTime={stringTime}
            time={time}
            url={url}
          />
          <View
            style={{
              marginTop: 15,
            }}>
            <Button small colorScheme="dark" onPress={handlePickFile}>
              <Text
                style={{
                  color: COLORS.white,
                }}>
                Add work
              </Text>
            </Button>
          </View>

          {file && (
            <View
              style={{
                marginTop: 15,
              }}>
              <View
                style={{
                  paddingVertical: 10,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 25, height: 25, marginRight: 5}}
                  source={fileIcons['.' + file.name.split('.')[1]] || imgIcon}
                />
                <Text
                  style={{
                    color: COLORS.primary,
                  }}>
                  {file.name}
                </Text>
              </View>

              <Button small onPress={handleSubmit}>
                <Text
                  style={{
                    color: COLORS.white,
                  }}>
                  Submit
                </Text>
              </Button>
            </View>
          )}

          <RenderDeadlineDone checkPermission={checkPermission} data={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default DeadlineSubmit;
