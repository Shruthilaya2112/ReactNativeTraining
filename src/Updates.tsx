import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Status from './Status';
import { T } from '@angular/cdk/keycodes';
import { ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Updates = ({navigation}: any) => {
  const Status = [
    {
      id: '1',
      name: 'Dhoni',
      image: require('./images/id1.jpeg'),
      time: '10:30',
    },
    {
      id: '2',
      name: 'Sachin',
      image: require('./images/id1.jpeg'),
      time: '11:30',
    },
    {
      id: '3',
      name: 'Sehwag',
      image: require('./images/id2.jpg'),
      time: '12:50',
    },
    {
      id: '4',
      name: 'smriti',
      image: require('./images/id2.jpg'),
      time: '12:50',
    },
    {
      id: '5',
      name: 'jay',
      image: require('./images/id2.jpg'),
      time: '12:51',
    },
  ];

  const press = (update: {
    id: string;
    name: string;
    image?: Image;
    time: string;
  }) => {
    console.log(update);
    navigation.navigate('StatusPage', {image: update.image, name: update.name});
    console.log('====================================');
    console.log('test');
    console.log('====================================');
  };

    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const Call=()=>{
    // const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
 
    const options: ImageLibraryOptions = {
      mediaType: 'photo', // Specify the media type (photo or video)
      includeBase64: true, // Set to true if you want to include base64 data
    };
 
   
      try {
              launchCamera(options, (response: any) => {
                console.log(`response : ${JSON.stringify(response)}`);
         
                if (
                  response?.assets &&
                   response.assets.length > 0 &&
                  response.assets[0].uri
                ) {
                  console.log(`Image URI: ${response.assets[0].uri}`);
                  setSelectedPhoto(response.assets[0].base64);

             
                }
                else
                if (response.didCancel) {
                  console.log('User cancelled image picker');
                } else if (response.errorMessage) {
                  console.log('ImagePicker Error: ', response.errorMessage);
                }
              });
            }
       catch (error) {
        console.error('error :', error);
       
      }

  };

  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
          <TouchableOpacity  onPress={Call}>
      <View
        style={{backgroundColor: '#FFFFFF', flexDirection: 'row', padding: 18}}>
        
          
        <View>
         
        <Image
  source={selectedPhoto ? {uri: `data:image/png;base64,${selectedPhoto}`} : require('./images/id1.jpeg')}
  style={styles.picture}
/>
          <FontAwesome
            name="plus-circle"
            size={25}
            color="green"
            style={{
              position: 'absolute',
              top: 25,
              left: 30,
              backgroundColor: 'white',
              borderRadius: 50,
            }}></FontAwesome>
        </View>
        <View  style={{marginLeft: 15}}>
       
          <Text  style={styles.read}>My Status</Text>
          <Text>Tap to add status update</Text>
       
        </View>
        
      </View>
      </TouchableOpacity>
     

      <View>
        <Text style={{margin: 10, justifyContent: 'space-around'}}>
          Recent Updates
        </Text>
      </View>

      <FlatList
        data={Status}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => press(item)}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                flexDirection: 'row',
                padding: 18,
              }}>
              <View style={styles.circleContainer}>
                <Image style={styles.circleImage} source={item.image} />
              </View>

              <View style={{marginLeft: 15}}>
                <Text style={styles.read}>{item.name}</Text>
                <Text>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  read: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#25D366',
    padding: 3,
  },
  circleImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});

export default Updates;
