import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  StatusBar
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTIONS = [
  {
    header: 'Preferences',
    items: [
      { id: 'language', icon: 'globe', label: 'Language', type: 'select' },
      { id: 'darkMode', icon: 'moon', label: 'Dark Mode', type: 'toggle' },
      { id: 'wifi', icon: 'wifi', label: 'Use Wi-Fi', type: 'toggle' },
    ],
  },
  {
    header: 'Help',
    items: [
      { id: 'bug', icon: 'flag', label: 'Report Bug', type: 'link' },
      { id: 'contact', icon: 'mail', label: 'Contact Us', type: 'link' },
    ],
  },
  {
    header: 'Content',
    items: [
      { id: 'save', icon: 'save', label: 'Saved', type: 'link' },
      { id: 'download', icon: 'download', label: 'Downloads', type: 'link' },
    ],
  },
];

export default function PageSetting() {
  const [form, setForm] = useState({
    language: 'English',
    darkMode: true,
    wifi: false,
  });

  return (
    <View style={{flex: 1}}>
        
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6', }}>
      
      <View style={styles.headerNav}>
        <View style={styles.headerAction}>
                <TouchableOpacity 
                    onPress={() =>{
                        // go back navigation goes here
                    }}
                    >
                    <FeatherIcon 
                    color="#616161"
                    name='arrow-left'
                    size={24}
                    
                    />
            </TouchableOpacity>
        </View>
       
      </View>
      <ScrollView contentContainerStyle={styles.container}>
       
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>

          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur.
          </Text>
        </View>

        <View style={styles.profile}>
          <Image
            alt=""
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }}
            style={styles.profileAvatar}
          />

          <Text style={styles.profileName}>John Doe</Text>

          <Text style={styles.profileEmail}>john.doe@mail.com</Text>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Profile</Text>

              <FeatherIcon color="#fff" name="edit" size={16} />
            </View>
          </TouchableOpacity>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>


                <View style={styles.sectionBody}>
                    {items.map(({label, id, type, icon}, index) =>{
                         return (
                        <View style={[styles.rowWrapper, index ===0 && {borderTopWidth:0}, ]} key={id}>
                            <TouchableOpacity onPress={() =>{
                                // navigation goes here
                            }}>
                                <View style={styles.row}>
                                    <FeatherIcon 
                                    color="#616161"
                                    name={icon}
                                    style={styles.rowIcon}
                                    size={22}
                                    
                                    />
                                     <Text style={styles.rowLabel}>{label}</Text>
                                    <View style={styles.rowSpacer} />
                                    {type === 'select' && (
                                        <Text style={styles.rowValue}>{form[id]}</Text>
                                    )}

                                    {type === 'toggle' && (
                                        <Switch
                                         value={form[id]}
                                         onValueChange={value => setForm({...form, [id]: value})}
                                         />
                                    )}

                                    {['select', 'link'].includes(type) &&(
                                        <FeatherIcon name='chevron-right' color='#ababab'
                                        size={22} />
                                    )}
                                </View>
                            </TouchableOpacity>
                        </View>
                         );
                    })}

                </View>
          </View>
        ))}
      </ScrollView>
       
    </SafeAreaView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  headerNav:{
    flexDirection:'row',
    alignItems:'center',
    },
  headerAction:{
    width:40,
    height:40,
    marginLeft:10,
    alignItems:'flex-start',
    justifyContent:'center',
    
    },
  headerTitle:{
    fontSize:18,
    fontWeight:'600',
    color:'#000',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
    height: 50,
  },
  rowWrapper: {
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowIcon: {
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  rowValue: {
    fontSize: 17,
    color: '#616161',
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});