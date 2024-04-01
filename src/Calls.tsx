import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import ChatOne from './ChatOne';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Calls = ({navigation}: any) => {
  // Local data
  const calls = [
    {
      id: '1',
      name: 'Shruthi',
      image: require('./images/id1.jpeg'),
      icon: 'arrow-bottom-left',
      symbol: 'phone',
      time: '23 minutes ago',
    },
    {
      id: '2',
      name: 'Laya',
      image: require('./images/id1.jpeg'),
      icon: 'arrow-top-right',
      symbol: 'phone',
      time: 'Today, 08:44',
    },
    {
      id: '3',
      name: 'Varshi',
      image: require('./images/id1.jpeg'),
      icon: 'arrow-bottom-left',
      symbol: 'video-camera',
      time: 'Yesterday, 08:44',
    },
    {
      id: '4',
      name: 'Sai',
      image: require('./images/id1.jpeg'),
      icon: 'arrow-bottom-left',
      symbol: 'video-camera',
      time: 'Yesterday, 08:12',
    },
    {
      id: '5',
      name: 'Sravani',
      image: require('./images/id1.jpeg'),
      icon: 'arrow-top-right',
      symbol: 'phone',
      time: 'Today, 08:44',
    },
    {
      id: '6',
      name: 'Gita',
      image: require('./images/id1.jpeg'),
      icon: 'arrow-bottom-left',
      symbol: 'phone',
      time: '25 March, 08:24',
    },
    {
      id: '7',
      name: 'choti',
      image: require('./images/id1.jpeg'),
      icon: 'arrow-top-right',
      symbol: 'video-camera',
      time: '25 March, 07:24',
    },
    {
      id: '8',
      name: 'Laya',
      image: require('./images/id1.jpeg'),
      icon: 'arrow-bottom-left',
      symbol: 'phone',
      time: '21 March, 19:24',
    },
    {
      id: '9',
      name: 'Laya',
      image: require('./images/id1.jpeg'),
      icon: 'arrow-top-right',
      symbol: 'video-camera',
      time: '12 February, 16:24',
    },
    {
      id: '10',
      name: 'Laya',
      image: require('./images/id1.jpeg'),
      icon: 'arrow-top-right',
      symbol: 'video-camera',
      time: '12 February, 16:24',
    },

    // Add more chats here...
  ];

  const handlePress = (chat: {
    id: string;
    name: string;
    image?: Image;
    icon: string;
    symbol: string;
    time: string;
  }) => {
    console.log('Selected chat: ', chat);
    // Navigate to the chat screen..
  };

  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <View
        style={{flexDirection: 'row', padding: 18, backgroundColor: '#FFFFFF'}}>
        {/* <Image
     source={{ uri: item.image }}
     
   /> */}

        <MaterialCommunityIcons
          name="link"
          size={50}
          color="white"
          style={{backgroundColor: 'green', borderRadius: 50}}
        />
        <View style={{marginLeft: 15}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Create call link
          </Text>
          <Text>Share a link for your WhatsApp call</Text>
        </View>
      </View>
      <View style={{margin: 10, justifyContent: 'space-around'}}>
        <Text style={{fontSize: 15}}>Recent</Text>
      </View>

      <FlatList
        data={calls}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          // <ScrollView>
          <ScrollView>
            {/* <Image
                  source={{ uri: item.image }}
                  
                /> */}
            <View
              style={{
                marginLeft: 15,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 50, height: 50, borderRadius: 25}}
                  source={item.image}
                />
                
              </View>
              <View style={{flex:1, justifyContent:'flex-start' ,padding: 20}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {item.name}
              </Text>
              <Text>{item.time}</Text>
            </View>
            
             <FontAwesome name={item.symbol} color='green' size={25} style={{padding: 15}}/>
          
            </View>
          </ScrollView>
        )}
      />
    </View>
  );
};

export default Calls;
