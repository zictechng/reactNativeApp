import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import navigation routes here...
import GeneralRootScreen from './navigation/generalRootScreen';
import BottomTab from './navigation/bottomTabs';
// screen imports goes here
import OnboardingScreen from './screens/onboardingScreen';
import LoginScreen from './screens/loginScreen';
import SignUpScreen from './screens/signUpScreen';
import StartSCreen from './screens/startScreen';



const App = () => {

const [isLoading, setIsLoading]= useState(true);
const initialLoginState = {
  userName: null,
  userToken: null,
}
// connect to backend testing here...
const fetchApi = async () => {
  try {
    //const res = await axios.get('http://192.168.43.228:3500/');
    const res = await axios.get('http://172.20.10.9:3500/'); 
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
}


useEffect(() =>{
  fetchApi();
}, [])


useEffect(() =>{
  setTimeout(async() =>{
    let userToken;
    userToken = null;
    try{
      userToken = await AsyncStorage.getItem('userToken')
    }catch (e){
      console.log(e);
    }
    setIsLoading(false);
  }, 1000)
}, []);


// show loading effect why application is launched
if(isLoading){
  return <View style={{flex:1, justifyContent: 'center', alignContent:'center'}}>
    <ActivityIndicator size='large' color="#00ff00" />
    </View>
}
  return (

    <NavigationContainer>
      { initialLoginState.userToken !== null ?(
        <BottomTab />
      ): 
      <GeneralRootScreen /> 
      }
    </NavigationContainer>
    // <StartSCreen /> 

    // <View style={styles.container}>
    //   <Text>First React Native Mobile Application!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

export default App;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
