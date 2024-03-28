import React from 'react'
import { Image, Text, View } from 'react-native'

const Communities = () => {
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
    <Image
    source={require("./images/ss.jpg")}
    style={{alignSelf: 'center',display :'flex'}}
    />
    <View style={{display:'flex',alignItems: 'center'}}>
    <Text style={{ fontWeight:'bold', fontSize:25}} >Stay connected with a community</Text>

    <Text style={{display:'flex',textAlign:'center'}}> {'\n'}Communities bring members together in {'\n'}
    topic-based groups, and make it easy to get admin {'\n'}
    announcements. Any community you're added to will {'\n'}appear here.
    </Text>

    <Text style={{ color: 'green'}}>{'\n'}See example communities</Text>

    <Text style={{ backgroundColor: 'green', borderRadius: 20,width:400, textAlign:'center',padding:10, marginTop: 20, color:'white'}}>Start your community</Text>
    </View>
    </View>
  )
}

export default Communities