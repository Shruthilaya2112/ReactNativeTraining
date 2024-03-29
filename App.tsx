import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';
 
import HomeScreen from './src/HomeScreen';
import {View,StatusBar, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Chats from './src/Chats';
import { UpdateProject } from '@angular/cdk/schematics';
import Updates from './src/Updates';
import Calls from './src/Calls';
import Communities from './src/Communities';
 
const Stack = createNativeStackNavigator();
import MyTabs from './src/Sii';
import ChatOne from './src/ChatOne';
import Icon from 'react-native-vector-icons/FontAwesome';
import Status from './src/Status';
 
const App: React.ComponentType<any> | React.JSX.IntrinsicAttributes=({route}:any) =>{
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
      <StatusBar backgroundColor="green" barStyle="light-content" />
        <Stack.Navigator initialRouteName={'WhatsApp'}>
          <Stack.Screen name="WhatsApp"  options={{
      headerStyle: { backgroundColor: 'green' },
      headerTintColor: 'white',
      headerTitle: () => <Text style={{fontSize: 25, color: 'white'}}>WhatsApp</Text>,
      headerRight: () => (
        <View style={{ flexDirection: 'row'}}>
                  
                  <FontAwesome name="camera" size={25} color="white" style={{ marginRight: 30}} />
                  <FontAwesome name="search" size={25} color="white" style={{ marginRight: 20 }} />
                  <MaterialCommunityIcons name="dots-vertical" size={30} color="white" style={{ marginLeft: 5 }}/>
                  
                </View>
      ),
    }} component={HomeScreen} />

  <Stack.Screen name="ChatOne"  options={
    {
      headerStyle: { backgroundColor: 'green' },
      headerTintColor: 'white',
      headerTitle: () => <Text style={{fontSize: 25, color: 'white'}}>WhatsApp</Text>,
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
                  
                  <FontAwesome name="video-camera" size={25} color="white" style={{ marginRight: 30}} />
                  <FontAwesome name="phone" size={25} color="white" style={{ marginRight: 20 }} />
                  <MaterialCommunityIcons name="dots-vertical" size={30} color="white" style={{ marginLeft: 5 }}/>
                </View>
      ),
    }
    
  }   component={ChatOne} />


  <Stack.Screen name="Status"  options={
    {
      headerStyle: { backgroundColor: 'green' },
      headerTintColor: 'white',
      headerTitle: () => <Text style={{fontSize: 25, color: 'white'}}>WhatsApp</Text>,
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons name="dots-vertical" size={30} color="white" style={{ marginLeft: 5 }}/>
                </View>
      ),
    }
    
  }   component={Status} />


          </Stack.Navigator>

          
         
      </NavigationContainer>
      
      </View>
    
  );
  
};



 
export default App;





    