import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View ,FlatList} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Updates = () => {
 const Status=[
  {
    id:'1',
    name:'Dhoni',
    image :require('./images/id1.jpeg'),
    time: '10:30',
  },
  {
    id: '2',
    name: 'Sachin',
    image: require('./images/dd.jpg'),
    time :'11:30',
  },
  {
    id:'3',
    name: 'Sehwag',
    image: require('./images/id2.jpg'),
    time: '12:50',
  },
  {
    id:'4',
    name: 'smriti',
    image: require('./images/id2.jpg'),
    time: '12:50',
  },
  {
    id:'5',
    name: 'jay',
    image: require('./images/id2.jpg'),
    time: '12:51',
  },

 ];


  return (
    
    <View style={ {backgroundColor: '#FFFFFF'}}>
      
        <View style={ {backgroundColor: '#FFFFFF', flexDirection: 'row', padding:18}} >
        <View>
          <Image 
            source={require('./images/id1.jpeg')}
           style= {styles.picture}
            />
           
            <FontAwesome name='plus-circle'  size={25} color="green" style={{position: 'absolute', top: 25, left:30, backgroundColor: 'white', borderRadius: 50 }}></FontAwesome>
            </View>
            <View style={{ marginLeft: 15}}>
            <Text style={styles.read}>My Status</Text>
            <Text >Tap to add status update</Text>
      
            
            </View>
</View>

<View>
<Text style={{margin :10, justifyContent: 'space-around'}}>Recent Updates</Text>
</View>



<FlatList 
    data={Status} 
    keyExtractor={item => item.id}
    renderItem={({item})=>
  (
    
      <View style={{backgroundColor: '#FFFFFF',  flexDirection: 'row', padding:18}}>

      <View style={styles.circleContainer}>
        <Image
          style={styles.circleImage}
          source={
           item.image
          }
        />
    </View>
        
        <View style={{ marginLeft: 15}} >
          <Text style={styles.read}>{item.name}</Text>
          <Text>{item.time}</Text>
        </View>
        </View>
  )}
  
      


>
  
</FlatList>
</View>

)
};

const styles = StyleSheet.create({
    read:{
      fontWeight: 'bold', 
      fontSize: 20
    },
    picture:{
      width:50, 
      height:50, 
      borderRadius:25,
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

