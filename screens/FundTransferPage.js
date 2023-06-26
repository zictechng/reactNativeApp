import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';



export default function FundTransferPage() {
    
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
  
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#eBecf4"}}>
            <View style={styles.container}>
                 {/* This will align left side */}
                {/* <View style={styles.header}>
                    <Image source ={require("../assets/raf_logo.png")}
                    style={styles.headerImg1} alt="Logo" />
                </View> */}
                {/* <Text> Sign in to continue...</Text> */}
               
               {/* this iwll align to middle of the screen */}
                <View style={styles.header}>
                    <Image source ={require("../assets/raf_logo.png")}
                    style={styles.headerImg} alt="Logo" />

                    <Text style={styles.title}> Sign in to continue...</Text>
                    <Text style={styles.subTitle}> Get access to your account and more...</Text>
                </View>
              
                <View style={styles.form}>
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
                        <Text style={styles.formFooter}>Don't have an account? <Text style={{textDecorationLine: "underline", color: 'orange'}}>Sign up</Text></Text>
                    </TouchableOpacity>
                </View>

            </View>
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
        backgroundColor: "#D1A407",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#D1A407",
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
     }
})
