import React from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native';
import Header from '../screens/Header'
import Stats from '../screens/Stats';
import AboutProfile from '../screens/AboutProfile';

import { gs, colors } from '../styles'




export default function ProfilePageTwo() {
  return (
    <View style={styles.container}>
       <StatusBar barStyle='light-content' translucent={true}
      backgroundColor='transparent' />
    
      <Header/>
    
        <Stats />
        <ScrollView>
            <AboutProfile />
        </ScrollView>
     
     </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.darkBg,
    }
})