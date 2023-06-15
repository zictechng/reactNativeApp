import React, { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { Ionicons, Entypo} from '@expo/vector-icons'

import { gs, colors } from '../styles'


export default class Header extends Component {
  render() {
    return (
        <LinearGradient colors={[colors.orange, colors.pink]} start={[0,0]} end={[1,1]}>
            <View style={{marginHorizontal: 20, paddingVertical: 40}}>
                <View style={gs.rowBetween}>
                    <Ionicons name="md-arrow-back" color={colors.text} size={32} />
                    <Entypo name='dots-three-vertical' color={colors.text} size={24} />
                    
                </View>
                {/* <Ionicons name='person-outline' color={colors.text} size={24} style={{alignSelf:'flex-end'}} /> */}
                {/* 
                <View style={styles.imageContainer}>
                    <View>
                        <View style={styles.check}>
                            <Ionicons name='md-checkmark' size={20} color={colors.pink} />
                        </View>

                        <Image source={require('../assets/images/avatar.jpg')} style={{width: 100, height: 100, borderRadius: 32}} />

                    </View>
                </View>  */}
                {/* This one will align the image left */}
               

                <View style={styles.imageContainer}>
                    <View>
                        <View style={styles.check}>
                            <Ionicons name='md-checkmark' size={20} color={colors.pink} />
                        </View>

                        <Image source={require('../assets/images/avatar.jpg')} style={{width: 100, height: 100, borderRadius: 32}} />

                    </View>
                </View>

                <View style={[gs.center, {marginVertical: 12}]}>
                    <Text style={gs.title}> Ken Uwadia</Text>
                    <Text style={[gs.subTitle, {marginTop: 6}]}> Web developer/Trainer</Text>

                    <TouchableOpacity style={styles.follow}>
                        <Entypo name='plus' size={20} color="rgba(255,255,255, 0.6)" />
                        <Text style={styles.followText}>Follow</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
    imageContainer:{
    ...gs.center,
    marginTop: 8,
    shadowColor: colors.darkBg,
    shadowOffset: { height: 3, width: 1},
    shadowOpacity: 0.5
    },
    check:{
       ...gs.center,
       backgroundColor: colors.text,
       borderRadius: 100,
       width: 28,
       height: 28,
       shadowColor: colors.darkBg,
       shadowOffset: { height: 3, width: 1},
       shadowOpacity: 0.3,
       position: 'absolute',
       zIndex: 1,
       right: -16,
       bottom: 16, 
    },
    follow:{
        ...gs.button,
        ...gs.rowCenter,
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginTop: 16,
        borderColor: "rgba(255,255,255,0.5)",
        borderWidth: 2,
    },
    followText:{
        fontSize: 16,
        color: colors.text,
        fontWeight: "600",
        marginLeft: 4,
    }
})