import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image,
TouchableOpacity, Switch } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather'

const SECTIONS = [
    {
        header: 'Preferences',
        icon: 'settings',
        items: [
            {
                icon: 'globe', 
                color:'#fe9400', 
                label:'language', 
                type:'link'
            },
            {
                id:'darkMode',
                icon:'moon',
                color:'#007afe',
                label:'Dark Mode',
                type:'toggle',
            },
            {
                id: 'wifi',
                icon: 'wifi',
                color:'#007afe',
                label:'Use wifi',
                type:'toggle',
            },
            { icon: 'navigation', 
            color:'#32c759', 
            label:'Location', 
            type:'link'},
            {
                id: 'showCollaborators',
                icon: 'users',
                color:'#32c759',
                label:'Show Collaborators',
                type:'toggle',
            },
            {
                id: 'accessibilityMode',
                icon: 'airplay',
                color:'#fd2d54',
                label:'Accessibility mode',
                type:'toggle',
            },
        ],
    },

    {
        header:'help',
        icon: 'help-circle',
        items: [
                { icon: 'flag', 
                color:'#8e8d91', 
                label:'Report Bug',
                 type:'link'},
                { icon: 'mail', 
                color:'#007afe', 
                label:'Contact Us', 
                type:'link'},
               ],
    },

    {
        header:'Content',
        icon: 'align-center',
        items: [
                { icon: 'save', 
                color:'#32c759', 
                label:'Save', 
                type:'link'},
                { icon: 'download', 
                color:'#fd2d54', 
                label:'Downloads', 
                type:'link'},
               ],
    },
];

export default function ProfileSetting() {

    const [form, setForm] = React.useState({
        darkMode: true,
        wifi: false,
        showCollaborators: true,
        accessibilityMode: false,
    })

    //console.log(form)


  return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={styles.container}>
                
                {/* profile image and name */}
                <View style={styles.profile}>

                    <TouchableOpacity 
                    onPress={() =>{
                        // action goes here
                    }}>
                    <View style={styles.profileAvatarWrapper}>
                        <Image 
                        alt='profile picture'
                        source={require('../assets/images/avatar.jpg')}
                        style={styles.profileAvatar} />

                        <View style={styles.profileAction}>
                            <FeatherIcon name='edit-3' size={15} color='#fff' />
                        </View>
                    </View>
                    </TouchableOpacity>
                    
                    <Text style={styles.profileName}>Ken Developer</Text>
                    <Text style={styles.profileAddress}>35 Ipent5 Estate, Logokoma Area, Abuja</Text>
                </View>

                    {/* menu item list */}
                {SECTIONS.map(({header, items}) =>(
                    <View style={styles.section} key={header}>
                        <Text style={styles.sectionHeader}>{header}</Text>
                    
                    {items.map(({id, label, type, icon, color}) =>(
                        <TouchableOpacity 
                          key={icon}
                          onPress={() =>{
                            // action goes here...
                            if(label === 'language'){
                                alert('redirect to language link')
                                // navigation.navigate('language')
                            }
                            else{
                                alert('Invalid route name: ' + label)
                            }
                           
                         }}
                        >
                            <View style={styles.row}>
                                <View style={[styles.rowIcon, {backgroundColor: color}]}>
                                    <FeatherIcon name={icon} color='#fff' size={18} />
                                </View>
                                <Text style={styles.rowLabel}>{label}</Text>

                                {/* this will push the switch icon to left */}
                                <View style={{flex: 1}} />

                                {/* switch Icons */}
                                {type === 'toggle' && (
                                    <>
                                    {/* <Text>Check Here </Text> */}
                                     <Switch value={form[id]}
                                     onValueChange={value => setForm({...form, [id]: value})} />
                                    </>
                                )}

                                {type === 'link' && (
                                    <FeatherIcon name='chevron-right' color='#0c0c0c' size={22} />
                                )}
                            </View>
                        </TouchableOpacity>
                    ))}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
    },
    profile:{
        padding: 20,
        alignItems:'center',
        justifyContent:'center',
    },
    profileName:{
        marginTop: 20,
        fontSize: 19,
        fontWeight: 'bold',
        color:'#414d63',
        textAlign:'center',
    },
    profileAddress:{
        marginTop: 5,
        fontSize: 16,
        color: '#989898',
        textAlign: 'center'
    },
    profileAvatar:{
        width: 72,
        height: 72,
        borderRadius: 9999,
    },
    profileAvatarWrapper:{
        position: 'relative'
    },
    profileAction:{
        width: 28,
        height: 28,
        borderRadius: 9999,
        backgroundColor: '#007bff',
        position: 'absolute',
        right: -4,
        bottom: -10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    section:{
        paddingHorizontal: 24,
    },
    sectionHeader:{
        paddingVertical: 12,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#9e9e9e',
        textTransform: 'uppercase',
        letterSpacing: 1.1,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    rowLabel:{
        fontSize: 17,
        color: '#0c0c0c',
    },
    rowIcon:{
        width: 32,
        height: 32,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
})
