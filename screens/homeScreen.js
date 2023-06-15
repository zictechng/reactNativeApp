import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, Alert, Button,View, StyleSheet, Text } from 'react-native';
import { getDataInLocalStorage } from '../components/localData';
import { UserContext } from '../components/UserContext';


const HomeScreen = ({navigation}) => {

const [userData, setUserData]= useState({});
const [userInfoData, setUserInfoData]= useState('');

const [userLoggedToken, setUserLoggedToken] = useContext(UserContext);

 // get user information from local storage here
      useEffect(() => {
        (async()=>{
            const savedUser = await AsyncStorage.getItem("USER_LOCAL_INFO");
            const currentUser = JSON.parse(savedUser);
            setUserData(currentUser);
             //console.log('useEffect', currentUser)
        })();
        setUserInfoData(getDataInLocalStorage('USER_DATA'));
    }, [])

    //console.log('Function Local Data ', userInfoData)

    logoutAction = async () => {
        let keys = []
        try {
           await AsyncStorage.removeItem('USER_TOKEN')
            setUserLoggedToken(null);
           } catch(e) {
         console.log(e)
        }
        console.log('Logout successful Done')
      }

    return (
        <View style={styles.constrainer}>

            <View>
            </View>
                <Text> Home Screen | My Name: {userData.surname +' ' + userData.first_name}</Text>
                    <Button title='Click here'
                    onPress={() => alert('Searching Screen')}
                 />

                <Text> Home Screen</Text>
                    <Button title='Logout'
                    onPress={ logoutAction}
                 />
        </View>
      );
    }
    
    
    const styles = StyleSheet.create({
        constrainer:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#8fcbbc',
        },
        footer: {
            flex: 2,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 30
        },
    })

export default HomeScreen;