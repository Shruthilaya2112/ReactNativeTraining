import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ChatOne = ({navigation, route}: any) => {
  const {params} = route;
  useEffect(() => {
    if (params && params.name) {
      navigation.setOptions({
        headerTitle: () => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
        style={{width: 50, height: 50, borderRadius: 25}}
        source={route.params.image}
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
    <View>
      <Text>{route.params.name}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatOne;
