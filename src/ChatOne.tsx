import React, {useEffect, useState} from 'react';
import {Button, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatOne = ({navigation, route}: any) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: boolean }>>([]);


  const sendMessage = () => {
    setMessages(prevMessages => [...prevMessages, { text: message, sender: true }]);
    setMessage('');
  };

  // checkmark-done
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
    <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.container}>
    <ScrollView style={styles.chatContainer}>
      {messages.map((msg, index) => (
        <View key={index} style={msg.sender ? styles.senderMsg : styles.receiverMsg}>
          <Text>{msg.text} </Text>
          
          <Ionicons name="checkmark-done" size={20} color="black" style={{display:'flex',alignSelf:'flex-end' }}/>
        </View>
      ))}
    </ScrollView>
    <View style={styles.inputContainer}>
      <View style={styles.input}>
      <Fontisto name='smiley' size={20} color='grey'/>
      <TextInput
        placeholder="Type a message"
        value={message}
        onChangeText={setMessage}
        onSubmitEditing={sendMessage} 
        style={{width : '60%'}}
      ></TextInput>
       <Entypo name='attachment' size={20} color='grey'/>
       <FontAwesome name='rupee' size={20} color='grey'/>
       <FontAwesome name='camera' size={20} color='grey'/>
       </View>
      <TouchableOpacity  onPress={sendMessage}>
        <MaterialCommunityIcons name="send-circle" size={44} color="green" />
        
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
);
};
    // <View>
    //send-circle
    //   <Text>{route.params.name}</Text>
    //   <TextInput placeholder='Message' style={styles.message}></TextInput>
    //  <Ionicons name="mic-circle" size={60} color="green" style={{ position: 'absolute', left: 400, top: 810 }}/>
    
      
    // </View>



const styles = StyleSheet.create({
  message:{
    backgroundColor: '#FFFFFF',
    top: 800,
    borderRadius: 25,
    width: 400
   
  },
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    textAlign: 'right'
    // Add padding and other styles as needed
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#FFFFFF',
  },
  input: {
  // flex: 1,
  //   borderWidth: 1,
  //   borderColor: '#ddd',
  //   borderRadius: 25,
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,
  //   marginRight: 10,
  flex : 1,
  flexDirection : 'row',
  justifyContent : 'space-around',
  alignItems : 'center'
  },
  sendButton: {
    backgroundColor: '#0af',
    padding: 10,
    borderRadius: 25,
  },
  senderMsg: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  receiverMsg: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
});

export default ChatOne;
