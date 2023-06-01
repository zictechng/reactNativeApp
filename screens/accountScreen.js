import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.constrainer}>
            <Text> Account Screen</Text>
                <Button title='Click here'
                onPress={() => alert('Account Screen')} />
            </View>
  );
}


const styles = StyleSheet.create({
    constrainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
    }
})