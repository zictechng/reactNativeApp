import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search, Dashboard } from '../screens';
import Icon from 'react-native-vector-icons/Ionicons'



const Tab = createBottomTabNavigator();

const Home = () => {
  return (
          <Tab.Navigator tabBarOptions={{
            headerShow: false,
            showLabel: false,
            //showIcon: true,
            style:{
              position: 'absolute',
              marginBottom:'2%',
              marginTop:'2%',
              marginHorizontal:'2%',
              borderRadius:10,
              height:50,
              ...styles.shadow
            }
          }}>
            <Tab.Screen options={{
              tabBarIcon:({focused})=>(
                <View style={{alignItems:'center'}}>
                  <Icon name={focused ? 'home': 'home-outline'} size={20}
                  color={focused ? '#fff' : 'grey'}/>
                  <Text style={{color: focused ? '#fff' : 'grey',
                fontFamily:'RobotoBold', fontSize:10}}>Dashboard</Text>
                </View>
              )
            }}
             name="Dashboard" component={Dashboard} />
            <Tab.Screen
            options={{
              tabBarIcon:({focused})=>(
                <View style={{alignItems:'center'}}>
                  <Icon name={focused ? 'search': 'search-outline'} size={20}
                  color={focused ? '#fff' : 'grey'}/>
                  <Text style={{color: focused ? '#fff' : 'grey',
                fontFamily:'RobotoBold', fontSize:10}}>Search</Text>
                </View>
              )
            }}
            name="Search" component={Search} />

          </Tab.Navigator>
  );
}

export default Home;

const styles = StyleSheet.create({
  shadow:{
    elevation:5,
    shadowColor:'#000',
    backgroundColor:'#00003f',
    borderWidth:1,
    borderColor:'transparent',
  }
})
