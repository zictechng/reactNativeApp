import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, View, Image, ScrollView, Dimensions,
    Button, TouchableOpacity,
Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

import client from '../api/client'; 


const SignUpScreen = ({navigation}) =>
{
    const [data, setData] = useState({
        email: '',
        password: '',
        confirm_password: '',
        first_name: '',
        phone: '',
        username: '',
        check_textInputChange: false,
        check_textUsernameInputChange: false,
        check_nameTextInputChange: false,
        check_phoneTextInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,

    })

    // function to determine when to show the check icon in the input field
    const textInputChange = (val) => {
        if(val.length > 0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        }else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }
    const textUsernameInputChange = (val) => {
        if(val.length > 0){
            setData({
                ...data,
                username: val,
                check_textUsernameInputChange: true
            });
        }else{
            setData({
                ...data,
                username: val,
                check_textUsernameInputChange: false
            });
        }
    }
    // name icon showing
    const nameTextInputChange = (val) => {
        if(val.length > 0){
            setData({
                ...data,
                first_name: val,
                check_nameTextInputChange: true
            });
        }else{
            setData({
                ...data,
                first_name: val,
                check_nameTextInputChange: false
            });
        }
    }

    // phone icon showing
    const phoneTextInputChange = (val) => {
        if(val.length > 0){
            setData({
                ...data,
                phone: val,
                check_phoneTextInputChange: true
            });
        }else{
            setData({
                ...data,
                phone: val,
                check_phoneTextInputChange: false
            });
        }
    }

     // function to toggle password visibility
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    // create function for the toggle button
    const updateSecureTextEntry = (val) => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    // function to toggle confirm password visibility
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

     // create function for the toggle button for confirm password
     const updateConfirmSecureTextEntry = (val) => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }

    
    // sign up function here....
    const signUp = async ()=>{
        const newData = {
            first_name: data.first_name,
            email: data.email,
            phone: data.phone,
            password: data.password,
        }
        try {
            //console.log('Signup Data ', newData);
            
            const res = await client.post('/api/register', {
            first_name: data.first_name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            username: data.username
            })
            .then(res => {
               // console.log('result from backend ', res)
                if(res.data.msg =='201'){
                    Dialog.show({
                        type: ALERT_TYPE.SUCCESS,
                        title: 'Success',
                        textBody: 'Congrats! Account created successfully',
                        button: 'close',
                      })
                    // Alert.alert("Successful", "Account created successfully!",[
                    //     {text: "Okay"}
                    // ]);
                } else if(res.data.status == '400') {
                    Toast.show({
                        type: ALERT_TYPE.DANGER,
                        title: 'Error',
                        textBody: 'All fields required',
                         })
                    // Alert.alert("Failed", "All fields required",[
                    //     {text: "Okay"}
                    // ]);
                }
                else if(res.data.status == '409'){
                    Toast.show({
                        type: ALERT_TYPE.DANGER,
                        title: 'Error',
                        textBody: 'Username already taken',
                       })
                    // Alert.alert("Failed", "Username already taken",[
                    //     borderRadius =50,
                    //     {text: "Okay"}
                    // ]);
                } else if(res.data.status == '401') {
                    Toast.show({
                        type: ALERT_TYPE.DANGER,
                        title: 'Failed',
                        textBody: 'Invalid user details',
                      })
                    // Alert.alert("Failed", "Invalid user details",[
                    //     {text: "Okay"}
                    // ]);
                }
                else {
                    Toast.show({
                        type: ALERT_TYPE.DANGER,
                        title: 'Error',
                        textBody: 'Sorry, Something went wrong',
                       })
                    }
            });
        } catch (error) {
            console.log(error.message)
        }

     }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" style="light" />

            <View style={styles.header}>
                <Text style={styles.text_header}>Open An Account</Text>
            </View>
            
            <Animatable.View 
            animation='fadeInUpBig'
            style={styles.footer}>
                 <ScrollView showsVerticalScrollIndicator={false}>
                 <Text style={styles.text_footer}>Full Name</Text>
                <View style={styles.action}>
                    <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                    />
                    <TextInput 
                    placeholder="Enter Full Name"
                    style={styles.textInput}
                    autoCapitalize="none"

                    onChangeText= {(val) => 
                        nameTextInputChange(val)
                        }

                    // onChangeText={(val) => nameTextInputChange(val); setData({...data, first_name: val})}
                    />
                    {/* now use iteration to determine the display of the icon */}
                    {data.check_nameTextInputChange ?
                    <Animatable.View
                    animation="bounce"
                    >
                    <Feather 
                    name="user"
                    color="green"
                    size={15}
                    />
                    
                    </Animatable.View>
                    : null }
                </View>
                
                <Text style={[styles.text_footer, {marginTop: 35}]}>Phone Number</Text>
                <View style={styles.action}>
                    <Feather 
                    name="phone"
                    color="#05375a"
                    size={20}
                    />
                    <TextInput 
                    placeholder="Enter Phone Number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => 
                        phoneTextInputChange(val)}
                    />
                    {/* now use iteration to determine the display of the icon */}
                    {data.check_phoneTextInputChange ?
                    <Animatable.View
                    animation="bounce"
                    >
                    <Feather 
                    name="phone"
                    color="green"
                    size={15}
                    />
                    
                    </Animatable.View>
                    : null }
                </View>
                
                <Text style={[styles.text_footer, {marginTop: 35}]}>Username</Text>
                <View style={styles.action}>
                    <Feather 
                    name="user"
                    color="#05375a"
                    size={20}
                    />
                    <TextInput 
                    placeholder="Enter Username"
                    style={styles.textInput}
                    autoCapitalize="none"

                    onChangeText={(val) => 
                        textUsernameInputChange(val)
                    }
                    />
                    {/* now use iteration to determine the display of the icon */}
                    {data.check_textUsernameInputChange ?
                    <Animatable.View
                    animation="bounce"
                    >
                    <Feather 
                    name="check-circle"
                    color="green"
                    size={15}
                    />
                    
                    </Animatable.View>
                    : null }
                </View>

                <Text style={[styles.text_footer, {marginTop: 35}]}>Email</Text>
                <View style={styles.action}>
                    <Feather 
                    name="mail"
                    color="#05375a"
                    size={20}
                    />
                    <TextInput 
                    placeholder="Enter Email"
                    style={styles.textInput}
                    autoCapitalize="none"

                    onChangeText={(val) => 
                        textInputChange(val)
                    }
                    />
                    {/* now use iteration to determine the display of the icon */}
                    {data.check_textInputChange ?
                    <Animatable.View
                    animation="bounce"
                    >
                    <Feather 
                    name="check-circle"
                    color="green"
                    size={15}
                    />
                    
                    </Animatable.View>
                    : null }
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                    />
                    <TextInput 
                    placeholder="Enter Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"

                    onChangeText={(val) => 
                         handlePasswordChange(val)
                        }
                    />
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    >
                    {data.secureTextEntry ?
                    <Feather 
                    name="eye-off"
                    color="gray"
                    size={15}
                    />
                    :
                    <Feather 
                    name="eye"
                    color="gray"
                    size={15}
                    /> 
                    }
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                    />
                    <TextInput 
                    placeholder="Enter Confirm Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"

                    onChangeText={(val) => 
                        handleConfirmPasswordChange(val)
                    }
                    />
                    <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                    >
                    {data.confirm_secureTextEntry ?
                    <Feather 
                    name="eye-off"
                    color="gray"
                    size={15}
                    />
                    :
                    <Feather 
                    name="eye"
                    color="gray"
                    size={15}
                    /> 
                    }
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn}
                     onPress={signUp}
                    >
                    <LinearGradient
                    colors={['#08d4c4','#01ab9d']}
                    style={styles.signIn}
                    
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Sign Up</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    

                    <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 20
                    }]}
                    >
                        <Text style={[styles.textSign, {
                            color:'#009387',
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                 </ScrollView>
               
            </Animatable.View>
    </View>
    )

};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });