import Updates from './Updates';
import Calls from './Calls';
import Communities from './Communities';
import Chats from './Chats';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';



const Tab = createBottomTabNavigator();


const MyTabs=()=> {
    return (
      <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          tabBarActiveTintColor: 'green',
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' }
         
        }}
      >
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            headerShown:false,
            tabBarLabel: 'Chats',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="comments" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Status"
          component={Updates}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="sync" color={color} size={size} />
            ),
           
          }}
        />
        
        <Tab.Screen
          name="Communties"
          component={Communities}
          options={{
            tabBarLabel: 'Communities',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="users" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Calls"
          component={Calls}
          options={{
            tabBarLabel: 'Calls',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="phone" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
  export default MyTabs;