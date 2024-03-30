import React, {useEffect} from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import {
  Image,
  StatusBar,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';



const Status = ({navigation, route}: any) => {
  const headerHeight = useHeaderHeight();
  const {params} = route;
  useEffect(() => {
    if (params && params.name) {
      navigation.setOptions({
        headerTitle: () => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 25}}
              source={require('./images/id1.jpeg')}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {params.name}
            </Text>
          </View>
        ),
      });
    }
  });
  return (
    <>
      <StatusBar hidden />
      <KeyboardAvoidingView
  behavior={Platform.OS === "android" ? "height" : "padding"}
  keyboardVerticalOffset={headerHeight}
  style={{ flex: 1 }}
>
        <Image style={{flex: 1}} source={route.params.image} />
        <View style={{position: 'absolute', bottom: 10, left: 10, right: 10}}>
          <TextInput
            placeholder="Reply"
            style={{
              borderRadius: 25,
              backgroundColor: 'grey',
              color: '#FFFFFF',
              height: 40,
              width: '100%',
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Status;
