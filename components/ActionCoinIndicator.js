import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { dummyData } from '../constants';



const ActionCoinIndicator = ({type, percentage_change}) => {
  return (
    <View style={{flexDirection:'row', height:40, width:80,
    borderRadius:12, justifyContent:'center',
    alignItems:'center', backgroundColor:dummyData.coins.type=="I" ? '#13D131' : 'red',
    marginRight:12}}>
    <Text style={{color:'#fff'}}>{dummyData.coins.changes}</Text>
    <Icon name="chevron-circle-up" size={15} 
    color="#fff" />
</View>
  );
}

export default ActionCoinIndicator;

const styles = StyleSheet.create({})
