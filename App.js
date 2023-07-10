import React, { useContext, useEffect, useState, useCallback } from 'react'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { UserContext } from './components/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';

import { AppLoading} from 'expo'
// import navigation routes here...
import GeneralRootScreen from './navigation/generalRootScreen';
import BottomTab from './navigation/bottomTabs';
// screen imports goes here
import OnboardingScreen from './screens/onboardingScreen';
import LoginScreen from './screens/loginScreen';
import SignUpScreen from './screens/signUpScreen';
import StartSCreen from './screens/startScreen';
import {Welcome, Home} from './screens/';
import PageSetting from './screens/PageSetting';
import ProfilePage from './screens/ProfilePage';
import ProfilePageTwo from './screens/ProfilePageTwo';
import FundTransferPage from './screens/FundTransferPage';
import FundSend from './screens/FundSend';
import HomePage from './screens/HomePage';
import ProfileSetting from './screens/ProfileSetting';
import VerifyPhone from './screens/VerifyPhone';

const AppStack = createStackNavigator();

//SplashScreen.preventAutoHideAsync();

const App = () => {
  
  // const [fontsLoaded] = useFonts({
  //   'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  //   'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
  //   'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
  //   'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  //   'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
  //   'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
  //   'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
  // });

  // const handleOnLayout = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync(); //hide the splashscreen
  //   }
  // }, [fontsLoaded]);

  
  // declare all properties you want to the DataContext here
  
  const [userDetails, setUserDetails] = useState([]);
  const [firstLoggedIn, setFirstLoggedIn] = useState('');
  const [userLoggedInState, setUserLoggedInState] = useState('');
  const [userIP, setUserIP] = useState([]);
  const [userLoggedInStatus, setUserLoggedInStatus] = useState(false);
  const [loggedOutStatus, setLoggedOutStatus] = useState('');
  const [userCountMessage, setUserCountMessage] = useState([]);
  const [userInitialLoginState, setUserInitialLoginState] = useState('');
  const [userTranToken, setUserTranToken] = useState([]);
  const [userLoggedToken, setUserLoggedToken] = useState(null);
  const [myDetails, setMyDetails] = useState('')
  
  const [myToken, setMyToken] = useState({});
  const [fontsState, setFontsState] = useState(false)
  
  //console.log("User Token from APP Page ", userLoggedToken);

  console.log("My Access Token: ", userLoggedToken );
  const [isLoading, setIsLoading]= useState(true);
  const initialLoginState = {
    userName: null,
    userToken: null,
}

const [userData, setUserData]= useState('');

//const [loggedInState, setLoggedInState] = userLoggedInState;
const [userLogToken, setUserLogToken] = useState(null);

// create function to determine if the user has opened the app before
// then stop to show onboarding screen

const [isFirstLaunch, setIsLastLaunch] = React.useState(false);

// connect to backend testing here...
// const fetchApi = async () => {
//   try {
//     const res = await axios.get('http://192.168.43.228:3500/');
//     //const res = await axios.get('http://172.20.10.9:3500/'); 
//     console.log(res.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// get user information from local storage here
 _getUserLocalInfo = async () =>{
  try {
    const UserInfo = await AsyncStorage.getItem('USER_LOCAL_INFO');
    if (UserInfo !== null) {
      setUserData(UserInfo);
     //console.log("Local User Info from App ", userData);
    }
  } catch (error) {
    // Error retrieving data
    //console.log("Local error here ", error.message);
  }
 }
 _getUserTokenInfo = async () =>{
  try {
    const userToken = await AsyncStorage.getItem('USER_TOKEN');
    if (userToken !== null) {
      setUserLogToken(userToken);
      console.log("User Token in App ", userToken);
    }
  } catch (error) {
    // Error retrieving data
    //console.log("Local error here ", error.message);
  }
 }

useEffect(() =>{
  setTimeout(async() =>{
      AsyncStorage.getItem('alreadyLaunch').then(value =>{
        if(value == null){
          AsyncStorage.setItem('alreadyLaunch', 'true');
          setIsLastLaunch(true);
        } else{
          setIsLastLaunch(false);
        }
      });
    
 }, 1000)
    setIsLoading(false);
    _getUserLocalInfo();
    _getUserTokenInfo()
}, []);

// // do a check here to see if loaded
// if (!fontsLoaded) {
//   return null;
// }
// if(!fontsState){
//   return (
//     <AppLoading startAsync={useFonts()}
//     onFinish={() => setFontsState(true)}/>
//   ) 
// }
  //console.log("My Local Token ", userLogToken);
// show loading effect why application is launched
// if(isFirstLaunch){
//   return <View style={{flex:1, justifyContent: 'center', alignContent:'center'}}>
//     <ActivityIndicator size='large' color="#00ff00"
//     />
//     </View>
// }

// use the function to display according
// if(isFirstLaunch == null){
//   return null;
// } else if(isFirstLaunch == true){
//   return (
    
//     <UserContext.Provider value={[userLoggedToken, setUserLoggedToken]}>
     
//         <NavigationContainer>
//           <AppStack.Navigator
//           headerMode='none'>
//             <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
//             <AppStack.Screen name="StartPage" component={StartSCreen} />
//             <AppStack.Screen name="Login" component={LoginScreen} />
//             <AppStack.Screen name="Register" component={SignUpScreen} />
//           </AppStack.Navigator>
//       </NavigationContainer>
    
//       </UserContext.Provider>
 
//   );
// } else 
  return (
      <AlertNotificationRoot>
       
          <UserContext.Provider value={[userLoggedToken, setUserLoggedToken]}>
                <NavigationContainer>
                  <VerifyPhone />
                  {/* <AppStack.Navigator screenOptions={{
                        headerShown: false
                      }}>
                      <AppStack.Screen name='Home' component={Home} />
                      <AppStack.Screen name='Welcome' component={Welcome} />
                  </AppStack.Navigator> */}
                
                </NavigationContainer>
                
            </UserContext.Provider>
       
      </AlertNotificationRoot>


          // <AlertNotificationRoot>
          // <UserContext.Provider value={[userLoggedToken, setUserLoggedToken]}>
          //      <NavigationContainer>
          //           {userLoggedToken !== null || userLogToken !== null ? (
          //           <BottomTab />
          //          ) : 
          //          <GeneralRootScreen />
          //           }
          //       </NavigationContainer>
              
          // </UserContext.Provider>
          // </AlertNotificationRoot>
    )



  // return (
  //   <AlertNotificationRoot>
  //   <NavigationContainer>
  //     { initialLoginState.userToken !== null ?(
  //       <BottomTab />
  //     ): 
  //     <GeneralRootScreen /> 
  //     }
  //   </NavigationContainer>
  //   </AlertNotificationRoot>
  //   // <StartSCreen /> 

  //   // <View style={styles.container}>
  //   //   <Text>First React Native Mobile Application!</Text>
  //   //   <StatusBar style="auto" />
  //   // </View>
  // );
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
