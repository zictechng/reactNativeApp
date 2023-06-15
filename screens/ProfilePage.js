import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView,
    Image,
    ScrollView
  } from 'react-native';
  import Icons from 'react-native-vector-icons/FontAwesome';
  import {Ionicons, MaterialIcons} from '@expo/vector-icons';



export default function ProfilePage() {
  return (
    <SafeAreaView style={styles.container}>
      
            <View style={styles.titleBar}>
                <Icons name="arrow-circle-left" size={24} color="#52575D"></Icons>
                <Icons name="ellipsis-v" size={24} color="#52575D"></Icons>
            </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* <View style={styles.titleBar}>
                <Icons name="arrow-circle-left" size={24} color="#52575D"></Icons>
                <Icons name="ellipsis-v" size={24} color="#52575D"></Icons>
            </View> */}

            <View style={{alignSelf:"center"}}>
                <View style={styles.ProfilePage}>
                    <Image source={require("../assets/user-profile.png")}
                    style={styles.image} resizeMode="center" />
                </View>
                    <View style={styles.dm}>
                        <MaterialIcons name='chat' size={10} color="#DFD8C8"></MaterialIcons>
                    </View> 
                    <View style={styles.active}></View>
                    <View style={styles.add}>
                        <Ionicons name='ios-add' size={23} color="#dfd8c8"
                        style={{marginTop: 6, marginLeft: 2}}></Ionicons>
                    </View>
            </View>

            
            <View style={styles.infoContainer}>
                <Text style={[styles.text, {fontWeight: '200', fontSize: 35}]}>Kenneth</Text>
                <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>Software Engineer</Text>
            </View>
            
            <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, {fontSize: 24}]}>409</Text>
                    <Text style={[styles.text, styles.subText]}>Post</Text>
                </View>
                <View style={[styles.statsBox, {borderLeftWidth: 1, borderRightWidth: 1}]}>
                    <Text style={[styles.text, {fontSize: 24}]}>5,006</Text>
                    <Text style={[styles.text, styles.subText]}>Followers</Text>
                </View>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, {fontSize: 24}]}>1,000</Text>
                    <Text style={[styles.text, styles.subText]}>Following</Text>
                </View>
            </View>

            <View style={{marginTop: 32}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.mediaImageContainer}>
                        <Image source={require("../assets/slide11a.png")}
                        style={styles.image} resizeMode="cover" ></Image>
                    </View>
                    <View style={styles.mediaImageContainer}>
                        <Image source={require("../assets/images/crypto_bank.png")}
                        style={styles.image} resizeMode="cover" ></Image>
                    </View>
                    <View style={styles.mediaImageContainer}>
                        <Image source={require("../assets/slide14.png")}
                        style={styles.image} resizeMode="cover" ></Image>
                    </View>
                </ScrollView>

                <View style={styles.mediaCount}>
                    <Text style={[styles.text, {fontSize: 24, color: "#DFD8C8", fontWeight: "300"}]}>70</Text>
                    <Text style={[styles.text, { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase"}]}>Media</Text>
                </View>
            </View>

            <Text style={[styles.subText, styles.recent]}>Recent Activities</Text>

            <View style={styles.recent}>
                <View style={styles.recentItem}>
                    <View style={styles.recentItemIndicator}></View>
                        <View style={{width: 250}}>
                            <Text style={[styles.text, {color: "#41444B", fontWeight: '300'}]}>
                                Started following{" "}
                                <Text style={{fontWeight: '400'}}>
                                    Kenneth Developer and 
                                    <Text style={{fontWeight: '400'}}>
                                     Software analysis</Text>
                                </Text>
                            </Text>
                        </View>
                </View>

                <View style={styles.recentItem}>
                    <View style={styles.recentItemIndicator}></View>
                        <View style={{width: 250}}>
                            <Text style={[styles.text, {color: "#41444B", fontWeight: '300'}]}>
                                Started following
                                <Text style={{fontWeight: '400'}}>
                                    John web</Text>
                            </Text>
                        </View>
                </View>

                <View style={[styles.recentItem, {marginBottom: 35}]}>
                    <View style={styles.recentItemIndicator}></View>
                        <View style={{width: 250}}>
                            <Text style={[styles.text, {color: "#41444B", fontWeight: '300'}]}>
                                Started following
                                <Text style={{fontWeight: '400'}}>
                                    Perter Moore</Text>
                            </Text>
                        </View>
                </View>
            </View>
        
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    text:{
        fontFamily: "HelveticaNeue",
        color:'#52575D',
    },
    subText:{
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500",
    },
    image:{
        flex:1,
        width: undefined,
        height: undefined,
    },
    titleBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 24,
        marginHorizontal: 16,
        marginBottom: 10
    },
    ProfilePage:{
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: "hidden",
    },
    dm:{
        backgroundColor:"#414448",
        position: "absolute",
        top: 20,
        width: 30,
        height: 30,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    active:{
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 23,
        left: 10,
        padding: 4,
        height: 15,
        width: 15,
        borderRadius: 10,
    },
    add:{
        backgroundColor: "#414448",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    infoContainer:{
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16,
    },
    statsContainer:{
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32,
    },
    statsBox:{
        alignItems: "center",
        flex: 1,
    },
    mediaImageContainer:{
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10,
        backgroundColor: "#AEB5BC"
    },
    mediaCount:{
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0,0,0,0.38)",
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 20,
        shadowOpacity: 1,
    },
    recent:{
        marginLeft: 20,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10,
    },
    recentItem:{
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16,
    },
    recentItemIndicator:{
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
})
