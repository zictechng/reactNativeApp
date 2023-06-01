import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.constrainer}>
            <Text> Profile Screen</Text>
                <Button title='Click here'
                onPress={() => alert('Searching Screen')} />
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