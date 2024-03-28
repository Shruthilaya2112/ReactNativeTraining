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
  Text,
} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import MyTabs from './Sii';
// import { Header } from 'react-native/Libraries/NewAppScreen';

function Art(){ 
  return (
    <><View style={styles.container}>
     
      <View>
      </View>
      < MyTabs/>
    </View></>
  );
};





export default Art;  

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  debugContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight || 0,
    right: 0,
    zIndex: 9999,
  },
  debugTag: {
    backgroundColor: 'White',
    padding: 1,
    transform: [{rotate: '45deg'}],
  },
  debugText: {
    color: 'Black',
    fontSize: 20,
    textAlign:'left',
    fontWeight: 'bold',
    marginTop:25,
    marginLeft:40,
  },
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});



