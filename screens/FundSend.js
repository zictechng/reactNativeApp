import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView, View, Text, StyleSheet, Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons, Entypo} from '@expo/vector-icons'
import { gs, colors } from '../styles'
import { ScrollView } from 'react-native-gesture-handler';


export default function FundSend() {
    
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
  
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#eBecf4"}}>
            
            <StatusBar barStyle='light-content' translucent={true}
                backgroundColor='transparent' />

            <LinearGradient colors={[colors.orange, colors.pink]} start={[0,0]} end={[1,1]}>
                <View style={[gs.rowBetween, {marginTop: 25, marginHorizontal: 10}]}>
                    
                    <View style = {styles.circleIconLeft}>
                        <Ionicons name="md-arrow-back" color={colors.text} size={25} />
                    </View>
          
                    <View style = {styles.circleIcon}>
                        <Text style={styles.circleText}>Go</Text>
                    </View>
                </View>

                <View style={[styles.headerSendUp, {padding:13}]}>
                    <Text style={[styles.titleSend, {color: "#fff"}]}>Open an account</Text>
                    <Text style={[styles.subTitleSend, {color:"#333"}]}>To open an account, kindly fill the details below correctly and ensure to use valid email address and phone number.</Text>
                </View>
            </LinearGradient>
            
            <ScrollView>
            <View style={styles.container}>
             {/* <View style={styles.header}>
              <Text style={styles.titleSend}>Open an Account</Text>
              <Text style={styles.subTitleSend}>To open an account, kindly fill the details below correctly and ensure to use valid email address and phone number.</Text>
              </View> */}
              
              <View style={styles.form}>
                    <View style={styles.input}>
                      <Text style={styles.inputLabel}>
                          Surname
                      </Text>
                      <TextInput 
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={styles.inputControl}
                      placeholder='Surname'
                      placeholderTextColor="#6b7288"
                          value={form.email}
                          onChangeText={email => setForm({...form, email})}
                      />
                  </View>
                  <View style={styles.input}>
                      <Text style={styles.inputLabel}>
                          Other Name
                      </Text>
                      <TextInput 
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={styles.inputControl}
                      placeholder='Other Name'
                      placeholderTextColor="#6b7288"
                          value={form.email}
                          onChangeText={email => setForm({...form, email})}
                      />
                  </View>

                  <View style={styles.input}>
                      <Text style={styles.inputLabel}>
                          Sex
                      </Text>
                      <TextInput 
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={styles.inputControl}
                      placeholder='Sex'
                      placeholderTextColor="#6b7288"
                          value={form.email}
                          onChangeText={email => setForm({...form, email})}
                      />
                  </View>

                  <View style={styles.input}>
                      <Text style={styles.inputLabel}>
                          Phone Number
                      </Text>
                      <TextInput 
                      autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='numeric'
                      style={styles.inputControl}
                      placeholder='Phone Number'
                      placeholderTextColor="#6b7288"
                          value={form.email}
                          onChangeText={email => setForm({...form, email})}
                      />
                  </View>

                  <View style={styles.input}>
                      <Text style={styles.inputLabel}>
                          Date of Birth
                      </Text>
                      <TextInput 
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={styles.inputControl}
                      placeholder='dd/mm/yyyy'
                      placeholderTextColor="#6b7288"
                          value={form.email}
                          onChangeText={email => setForm({...form, email})}
                      />
                  </View>
                  <View style={styles.input}></View>
                  <View style={styles.input}>
                      <Text style={styles.inputLabel}>
                          Email address
                      </Text>
                      <TextInput 
                      autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='email-address'
                      style={styles.inputControl}
                      placeholder='jon@gmail.com'
                      placeholderTextColor="#6b7288"
                          value={form.email}
                          onChangeText={email => setForm({...form, email})}
                      />
                  </View>

                  <View style={styles.input}>
                      <Text style={styles.inputLabel}>
                          Password
                      </Text>
                      <TextInput 
                      secureTextEntry={true}
                      style={styles.inputControl}
                      placeholder='*******'
                      placeholderTextColor="#6b7288"
                          value={form.password}
                          onChangeText={password => setForm({...form, password})}
                      />
                  </View>

                  <View style={styles.formAction}>
                      <TouchableOpacity 
                          onPress={() =>{
                              Alert.alert("Login success, thank you!");
                          }}
                      >
                      <View style={styles.btn}>
                          <Text style={styles.btnText}>Sign in</Text>
                      </View>
                      </TouchableOpacity>
                  </View>

                  <TouchableOpacity 
                  style={{marginTop: "auto"}}
                  onPress={() =>{
                     
                      /// action navigation goes here
                  }}>
                      <Text style={styles.formFooter}>Don't have an account? <Text style={{textDecorationLine: "underline", color: '#F04B73'}}>Sign up</Text></Text>
                  </TouchableOpacity>
              </View>

          </View>
            </ScrollView>
            
        </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container:{
        padding: 24,
        flex: 1,
    },
    header:{
        marginVertical: 36,
    },
    headerSendUp:{
        marginVertical: 20,
    },
    headerImg1:{
        width: 80,
        height: 80,
    },
    headerImg:{
        width: 80,
        height: 80,
        alignSelf: "center",
        borderRadius: 15,
        marginBottom: 35,
    },
    title:{
        fontSize: 27,
        fontWeight: "700",
        color: "#1e1e1e",
        marginBottom: 6,
        textAlign: "center",
    },
    titleSend:{
        fontSize: 27,
        fontWeight: "700",
        color: "#1e1e1e",
        marginBottom: 6,
        textAlign: "justify"
    },
    subTitleSend:{
        fontSize: 15,
        fontWeight: "400",
        color: "#929292",
        textAlign: "justify"
    },
    subTitle:{
        fontSize: 15,
        fontWeight: "500",
        color: "#929292",
        textAlign: "center",
    },
    
    input:{
        marginBottom: 16
    },
    inputLabel:{
        fontSize: 17,
        fontWeight: "600",
        color: "#222",
        marginBottom: 8,
     },
     inputControl:{
        height: 44,
        backgroundColor: "#fff",
        fontSize: 15,
        fontWeight: "500",
        color: "#222",
        paddingHorizontal: 16,
        borderRadius: 12,
     },
     formAction:{
        marginVertical: 24,
     },
     form:{
        marginBottom: 24,
        flex: 1,
     },
     formFooter:{
        fontSize: 17,
        fontWeight: "600",
        color: "#222",
        textAlign: "center",
        letterSpacing: 0.15
     },
     btn:{
        backgroundColor: "#F04B73",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#F04B73",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
     },
     btnText:{
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
     },
     circleIcon:{
        borderRadius: 9999, 
        overflow: 'hidden', 
        borderColor: '#fff', 
        width: 30, 
        height: 30, 
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
     },
     circleIconLeft:{
        borderRadius: 100, 
        overflow: 'hidden', 
        borderColor: '#F04B73', 
        width: 35, 
        height: 35, 
        backgroundColor: '#F04B73',
        alignItems: "center",
        justifyContent: "center",
     },
     circleText:{
       
        fontSize: 18,
        fontWeight: "900",
        color: "#F04B73",
        
     }
})
