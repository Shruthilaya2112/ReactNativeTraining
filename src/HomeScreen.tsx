/* eslint-disable prettier/prettier */
// screens/HomeScreen.tsx

import React from 'react';
import {
  View,
  Button,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Linking,
  StyleSheet,
  Platform,
} from 'react-native';
import {useLinkTo} from '@react-navigation/native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import DebugTag from './DebugTag';

const HomeScreen: React.FC = () => {
  const linkTo = useLinkTo();

  const openIEC = () => {
    Linking.openURL('com.deeplinking://IECActivityFormData');
  };

  const openCHM = () => {
    Linking.openURL('com.deeplinking://CHMFormData');
  };

  const openSurvey = () => {
    Linking.openURL('com.deeplinking://SurveyFormData');
  };

  const openInsta = () => {
    Linking.openURL('instagram://user?username=instagram').catch(() => {
      Linking.openURL('https://www.instagram.com/instagram');
    });
  };

  const openPhotos = () => {
    if (Platform.OS == 'ios') {
      Linking.openURL('photos-redirect://');
    } else if (Platform.OS == 'android') {
      Linking.openURL('content://media/internal/images/media');
    } else {
      console.log('Could not open Photos');
    }
  };

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <View>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View style={{margin: 8}}>
            <Button title="IEC" onPress={openIEC} />
          </View>
          <View style={{margin: 8}}>
            <Button title="CHM" onPress={openCHM} />
          </View>
          <View style={{margin: 8}}>
            <Button title="Survey" onPress={openSurvey} />
          </View>
          <View style={{margin: 8}}>
            <Button
              title="call"
              onPress={() => Linking.openURL(`tel:9542533030`)}
            />
          </View>
          <View style={{margin: 8}}>
            <Button title="Settings" onPress={() => Linking.openSettings()} />
          </View>
          <View style={{margin: 8}}>
            <Button
              title="Whats App"
              onPress={() =>
                Linking.openURL(`whatsapp://send?phone=$9542533030&text=$hello`)
              }
            />
          </View>

          <View style={{margin: 8}}>
            <Button
              title="Map"
              onPress={() =>
                Linking.openURL(
                  `https://www.google.com/maps/search/?api=1&query=india`,
                )
              }
            />
          </View>
          <View style={{margin: 8}}>
            <Button title="Gallery" onPress={openPhotos} />
          </View>
          <View style={{margin: 8}}>
            <Button
              title="Youtube"
              onPress={() => Linking.openURL(`https://www.youtube.com`)}
            />
          </View>
          <View style={{margin: 8}}>
            <Button title="Insta" onPress={openInsta} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  debugContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight || 0,
    right: 0,
    zIndex: 9999,
  },
  debugTag: {
    backgroundColor: 'red',
    padding: 1,
    transform: [{rotate: '45deg'}],
  },
  debugText: {
    color: 'white',
    fontSize: 12,
  },
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});
