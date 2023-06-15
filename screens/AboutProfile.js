import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gs, colors } from '../styles'



export default function AboutProfile() {
  return (
    <View style={styles.container}>
     
     {/* <Text style={gs.sectionTitle}>Email</Text>
      <Text style={[styles.about, {marginBottom: 10}]}>Ken99@gmail.com</Text>

      <Text style={gs.sectionTitle}>Phone Number</Text>
      <Text style={[styles.about, {marginBottom: 10}]}>+2348037250238</Text>
      
      <Text style={gs.sectionTitle}>Account Number</Text>
      <Text style={[styles.about, {marginBottom: 10}]}>90998877654</Text>
      
      <Text style={gs.sectionTitle}>Account Status</Text>
      <Text style={[styles.about, {marginBottom: 10}]}>Active</Text>
    
      <Text style={gs.sectionTitle}>Date of Birth</Text>
      <Text style={[styles.about, {marginBottom: 10}]}>25/02/1990</Text>
    
      <Text style={gs.sectionTitle}>Account Type</Text>
      <Text style={[styles.about, {marginBottom: 10}]}>Saving Account</Text>

      <Text style={gs.sectionTitle}>Address</Text>
    
      <Text style={[styles.about, {marginBottom: 10}]}>Lorem ipsum dolor sit amet, consectetuer 
        adipiscing elit. Aenean commodo ligula 
        eget dolor. Aenean massa. Cum sociis 
        natoque penatibus et magnis dis.
       </Text> */}
       <View style={[styles.dataIfo, styles.divider, {marginBottom: 15}]}>
            <Text style={gs.sectionTitle}>Email</Text>
            <Text style={[styles.about, {marginBottom: 10}]}>Ken99@gmail.com</Text>
       </View>
       <View style={[styles.dataIfo, styles.divider, {marginBottom: 15}]}>
            <Text style={gs.sectionTitle}>Phone Number</Text>
            <Text style={[styles.about, {marginBottom: 10}]}>+2348037250238</Text>
       </View>
       <View style={[styles.dataIfo, styles.divider, {marginBottom: 15}]}>
            <Text style={gs.sectionTitle}>Account Number</Text>
            <Text style={[styles.about, {marginBottom: 10}]}>90998877654</Text>
       </View>

       <View style={[styles.dataIfo, styles.divider, {marginBottom: 15}]}>
            <Text style={gs.sectionTitle}>Account Status</Text>
            <Text style={[styles.about, {marginBottom: 10}]}>Active</Text>
       </View>

       <View style={[styles.dataIfo, styles.divider, {marginBottom: 15}]}>
            <Text style={gs.sectionTitle}>Date of Birth</Text>
            <Text style={[styles.about, {marginBottom: 10}]}>25/02/1990</Text>
       </View>

       <View style={[styles.dataIfo, styles.divider, {marginBottom: 15} ]}>
            <Text style={gs.sectionTitle}>Account Type</Text>
            <Text style={[styles.about, {marginBottom: 10}]}>Saving Account</Text>
       </View>

      
       <Text style={[gs.sectionTitle, {marginTop: 10}]}>Address</Text>
            
            <Text style={[styles.about, {marginBottom: 10}]}>Lorem ipsum dolor sit amet, consectetuer 
            adipiscing elit. Aenean commodo ligula 
            eget dolor. Aenean massa. Cum sociis 
            natoque penatibus et magnis dis.
            </Text>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
       margin: 25,
    //    flexDirection: 'row',
    //    alignItems: 'center',
    //    justifyContent: 'space-between'
    },
    dataIfo:{
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between'
    },
    about:{
        fontSize: 15,
        fontWeight: "500",
        color: colors.darkHl,
        marginTop: 8,
       
     },
     divider:{
       borderBottomWidth: 0.5,
       borderColor: colors.dividerColor,
       
     }
})