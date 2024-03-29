import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native';

const Status = ({navigation, route}:any) => {
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
    <Image
    // style={{width: 50, height: 100}}
    source={route.params.image}
  />
  )
}

export default Status;