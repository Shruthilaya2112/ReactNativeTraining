import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, ScrollView} from 'react-native';
import ChatOne from './ChatOne';

const ChatList = ({navigation}:any)=> {
  // Local data
  const chats = [
    {
      id: '1',
      name: 'Shruthi',
      image: require('./images/id1.jpeg'),
      lastMessage: 'Hello!',
    },
    {
      id: '2',
      name: 'Laya',
      image: require('./images/id1.jpeg'),
      lastMessage: 'How are you?',
    },
    {
      id: '3',
      name: 'Varshi',
      image: require('./images/id1.jpeg'),
      lastMessage: 'How are you?',
    },
    {
      id: '4',
      name: 'Sai',
      image: require('./images/id1.jpeg'),
      lastMessage: 'How are you?',
    },
    {
      id: '5',
      name: 'Sravani',
      image: require('./images/id1.jpeg'),
      lastMessage: 'How are you?',
    },
    {
      id: '6',
      name: 'Gita',
      image: require('./images/id1.jpeg'),
      lastMessage: 'How are you?',
    },
    {
      id: '7',
      name: 'choti',
      image: require('./images/id1.jpeg'),
      lastMessage: 'How are you?',
    },
    {
      id: '8',
      name: 'Laya',
      image: require('./images/id1.jpeg'),
      lastMessage: 'How are you?',
    },
    {
      id: '9',
      name: 'Laya',
      image: require('./images/id1.jpeg'),
      lastMessage: 'How are you?',
    },
    {
      id: '10',
      name: 'Laya',
      image: require('./images/id1.jpeg'),
      lastMessage: 'How are you?',
    },
    {
      id: '11',
      name: 'Laya',
      image: require('./images/id1.jpeg'),
      lastMessage: 'How are you?',
    },
    {
      id: '12',
      name: 'Laya',
      image: require('./images/id1.jpeg'),
      lastMessage: 'How are you?',
    },
    {
      id: '13',
      name: 'Laya',
      image: require('./images/id2.jpg'),
      lastMessage: 'How are you?',
    },
    // Add more chats here...
  ];

  const handlePress = (chat: {
    id: string;
    name: string;
    image?: Image;
    lastMessage: string;
  }) => {
    console.log('Selected chat: ', chat);
    // Navigate to the chat screen..
    navigation.navigate('ChatOne',{name:chat.name, image: chat.image});

  };

  return (
    <FlatList
      data={chats}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
           <ScrollView>
          <View style={{flexDirection: 'row', padding: 18, backgroundColor: '#FFFFFF'}}>
            {/* <Image
              source={{ uri: item.image }}
              
            /> */}
            <Image
             style={{ width: 50, height: 50, borderRadius: 25 }}
              source={item.image}
            />
            <View style={{marginLeft: 15}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {item.name}
              </Text>
              <Text>{item.lastMessage}</Text>
            </View>
          </View>
          </ScrollView>
        </TouchableOpacity>
      )}
    />
  );
};

export default ChatList;
