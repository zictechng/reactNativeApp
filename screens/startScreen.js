import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Image, Dimensions,
    Button, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
    
const StartSCreen =({navigation}) => {
  return (
    <View style={styles.container}>
    {/* <Text style={styles.textColor}>
        Text Page hare...
    </Text> */}
    <StatusBar style="light" />
    <View style={styles.header}>
    <Animatable.Image 
    animation="bounceIn"
    source={require('../assets/raf_logo.png')}
    style={styles.logo}
    resizeMode='stretch'
    />
    </View>

    <Animatable.View  style={styles.footer}
     animation='fadeInUpBig'
    >
    <Text style={styles.title}>Digitized your finance</Text>
    <Text style={styles.text}>Sign in to discover more...</Text>
    <View style={styles.button}>
<TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
  <LinearGradient
  colors={['#08d4c4', '#01ab9d']}
  style={styles.signIn}
  >
    <Text style={styles.textSign}>Get Started</Text>
    <MaterialIcons
      name='navigate-next'
      color='#fff'
      size={20}
    />
  </LinearGradient>
</TouchableOpacity>
</View>
</Animatable.View>
</View>
  );
}

export default StartSCreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
container: {
    flex: 1, 
    backgroundColor: '#009387',
    justifyContent: 'center',
    alignItems: 'center',
    },

    textColor:{
    color: 'white',
    },

    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
   
    footer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
    },
    logo: {
    //   width: height_logo,
    //   height: height_logo
    borderRadius: 30,
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        fontSize:18,
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});