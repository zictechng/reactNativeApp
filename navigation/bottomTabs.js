import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// screen imports goes here
import HomeScreen from '../screens/homeScreen';
import HistoryScreen from '../screens/historyScreen';
import ProfileScreen from '../screens/profileScreen';
import Setting from '../screens/settingScreen';
import AccountScreen from '../screens/accountScreen';
import SendMoneyScreen from '../screens/sendMoneyScreen';
import StartSCreen from '../screens/startScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) =>(
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 60,
            height: 60,
            borderRadius: 35,
            backgroundColor: '#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

const BottomTab = () => {
  return (
    <Tab.Navigator 
            tabBarOptions={{
                showLabel: false,
                //showIcon: true,
            style:{
                position: 'absolute',
                bottom: 15,
                left: 15,
                right: 15,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 70,
                ...styles.shadow
            }
            }}>

            <Tab.Screen name="Home" component={HomeScreen}
             options = {{
                tabBarIcon: ({ focused }) =>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image source={require('../assets/icons/home.png')}
                            resizeMode='contain'
                           style={{
                            width: 20, 
                            height: 20, 
                            tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        {/* <Ionicons
                            name="md-home"
                            size={20}
                            color={focused ? '#e32f45' : '#748c94'}
                        /> */}
                        <Text 
                        style={{color: focused ? '#e32f45' : '#748c94', 
                        fontSize: 12, 
                        marginBottom: 15}}>
                        Home
                        </Text>
                    </View>
                )
            }} />

            <Tab.Screen name="Account" component={AccountScreen}
            options = {{
                tabBarIcon: ({ focused }) =>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        {/* <Image source={require('../assets/icons/magnifying-glass.png')}
                            resizeMode='contain'
                           style={{
                            width: 20, 
                            height: 20, 
                            tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        /> */}
                        <Ionicons
                            name="contract-outline"
                            size={25}
                            color={focused ? '#e32f45' : '#748c94'}
                        />
                        <Text 
                        style={{color: focused ? '#e32f45' : '#748c94', 
                        fontSize: 12, 
                        marginBottom: 15}}>
                        Statements
                        </Text>
                    </View>
                )
            }}
            />
            <Tab.Screen name="SendMoney" component={SendMoneyScreen} 
            options = {{
                tabBarIcon: ({ focused }) =>(
                    //  <Image source={require('../assets/icons/add.png')}
                    //         resizeMode='contain'
                    //        style={{
                    //         width: 30, 
                    //         height: 30, 
                    //         tintColor: focused ? '#748c94' : '#fff'
                    //         }}
                    //     />
                        <Ionicons
                            name="send-outline"
                            size={25}
                            color={focused ? '#fff' : '#748c94'}
                        /> 
                     ),
                    tabBarButton: (props) =>(
                    <CustomTabBarButton {...props} />
                    )
            }}
            />
            <Tab.Screen name="History" component={HistoryScreen} options = {{
                tabBarIcon: ({ focused }) =>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        {/* <Image source={require('../assets/icons/setting.png')}
                            resizeMode='contain'
                           style={{
                            width: 20, 
                            height: 20, 
                            tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        /> */}
                        <Ionicons
                            name="bar-chart-outline"
                            size={25}
                            color={focused ? '#e32f45' : '#748c94'}
                        />
                        <Text 
                        style={{color: focused ? '#e32f45' : '#748c94', 
                        fontSize: 12, 
                        marginBottom: 15}}>
                        History
                        </Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options = {{
                tabBarIcon: ({ focused }) =>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        {/* <Image source={require('../assets/icons/messenger.png')}
                            resizeMode='contain'
                           style={{
                            width: 20, 
                            height: 20, 
                            tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        /> */}
                        <Ionicons
                            name="stats-chart-outline"
                            size={25}
                            color={focused ? '#e32f45' : '#748c94'}
                        />
                        <Text 
                        style={{color: focused ? '#e32f45' : '#748c94', 
                        fontSize: 12, 
                        marginBottom: 15}}>
                        Account
                        </Text>
                    </View>
                )
            }}/>
            
        </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7f5df0',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default BottomTab;