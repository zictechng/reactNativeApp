import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, Pressable  } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) =>{
    let backgroundColor;
    backgroundColor = selected? "rgba(0,0,0, 0.8)" : "rgba(0,0,0, 0.3)";

    return (
        <View style={{
            width: 5,
            height:5,
            marginHorizontal: 3,
            backgroundColor
        }}>

        </View>
    )
}

const SkipButton = ({...props}) =>(
    <TouchableOpacity
        style={{...styles.appButtonContainer, marginLeft:5}}
        {...props}
    >
    <Text style={styles.appButtonText}>Skip</Text>
    </TouchableOpacity>
    

   
);

const NextButton = ({...props}) =>(
    <TouchableOpacity style={{...styles.appButtonContainer, marginRight:5}}
    {...props}
    >
    <Text style={styles.appButtonText}>Next</Text>
    </TouchableOpacity>
   
);

const DoneButton = ({...props}) =>(
    <TouchableOpacity
    style={{marginHorizontal: 8, marginRight:5}}
    {...props}
    ><Text style={{fontSize:16}}>Done</Text></TouchableOpacity>
    // <Button 
    // title="Done"
    // color="#000000"
    // {...props}
    // />
);


const OnboardingScreen = ({navigation}) =>{
  return (
    <Onboarding
        SkipButtonComponent={SkipButton}
        NextButtonComponent={NextButton}
        DoneButtonComponent={DoneButton}
        DotComponent = {Dots}
        //onSkip={() =>navigation.navigate('')}
        onSkip={() =>navigation.replace('Login')} // this "replace" will prevent navigation it from going back after
        // user have click on it and it has show the login page
        onDone={() =>navigation.navigate('Login')}
            pages={[
                {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../assets/slide6a.png')}
                />,
                title: 'Control your money',
                subtitle: 'Be in charge of your finance on the go with rugipo finance app',
                },
                {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../assets/slide11a.png')} />,
                title: 'Business loan',
                subtitle: 'Get business loan on the go without any collateral',
                },
                {
                backgroundColor: '#e9bcbe',
                image: <Image source={require('../assets/slide14.png')} />,
                title: 'Customer support',
                subtitle: 'We provide 24/7 reliable customer support',
                },
            ]}
        />
    );
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    appButtonContainer: {
        backgroundColor: "#000000",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 12,
      },
      appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
       }
})