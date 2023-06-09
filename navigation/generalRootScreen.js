import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// screens import goes here....
import OnboardingScreen from '../screens/onboardingScreen';
import StartSCreen from '../screens/startScreen';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/signUpScreen';

const GeneralStack = createStackNavigator();

const GeneralRootScreen = ({navigation}) =>{

    return (
        <GeneralStack.Navigator headerMode='none'>
        <GeneralStack.Screen name="StartPage" component={StartSCreen} />
        <GeneralStack.Screen name="Login" component={LoginScreen}/>
        <GeneralStack.Screen name="Register" component={SignUpScreen}/>
      </GeneralStack.Navigator>
    )
}

export default GeneralRootScreen;