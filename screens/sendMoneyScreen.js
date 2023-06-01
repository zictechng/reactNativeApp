import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default function SendMoneyScreen() {
  return (
    <View style={styles.constrainer}>
            <Text> Start Transfer Screen</Text>
                <Button title='Click here'
                onPress={() => alert('Sending money Screen')} />
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