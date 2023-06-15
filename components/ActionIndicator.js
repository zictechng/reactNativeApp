import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { dummyData } from '../constants';



const ActionIndicator = () => {
  return (
    <View style={{flexDirection:'row', height:40, width:80,
    borderRadius:12, justifyContent:'center',
    alignItems:'center', backgroundColor:dummyData.portfolio.type=="I" ? '#13D131' : 'red',
    marginRight:12}}>
    <Text style={{color:'#fff'}}>{dummyData.portfolio.changes}</Text>
    <Icon name="chevron-circle-up" size={15} 
    color="#fff" />
</View>
  );
}

export default ActionIndicator;

const styles = StyleSheet.create({})
