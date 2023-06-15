import React from 'react';
import {
    StyleSheet, 
    View, 
    Text, 
    StatusBar, 
    Image, 
    TouchableOpacity 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, 
    heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Welcome = () =>{
  return (
    <View style = {{flex:1, flexDirection:'column'}}>
        <StatusBar barStyle ='light-content' translucent={true} backgroundColor="transparent" />
        <LinearGradient start={{x:0.0,y:0.4}} end={{x:0.5,y:1.0}} locations={[0,1]}
        colors={['#2D97DA', '#2249D6']} style={{flex:1}}>
        
        {/* top section of the screen */}

            <View style={{flex:2.5, flexDirection:'row', justifyContent:'center',
        alignItems:'flex-start'}}>
            <Image resizeMode='contain' style={{width:wp('90%'), height:hp('60%')}}
            source={require('../assets/images/crypto_bank.png')} />
            </View>


        {/* button and text section of the screen */}
        
            <View style={{flex:2, justifyContent:'center',paddingHorizontal:wp('5%')}}>
            
                <View style={{position:'relative', flexDirection:'column',
            backgroundColor:'rgba(255,255,255,0.3)', height:hp('35%'),
            borderRadius:15, paddingTop:10, paddingHorizontal:wp('5%')}}>

               <Text style={{fontSize:25,fontFamily:'Roboto-Black',alignSelf:'center',
            textAlign:'center', paddingTop:10, color:'#fff'}}>
                Buy Bitcoin and Trade Top Cryptocurrency
               </Text>
                

                <Text style={{fontSize:15, fontFamily:'Roboto-Regular',
            alignSelf:'center', paddingTop:20, color:'#fff',
            textAlign:'center'}}>
                you can trade and buy and sell crypto coin here very easily and reliably
                 </Text>


                 <TouchableOpacity style={{position:'relative', width:'100%',
                backgroundColor:'#fff', height:50, borderRadius:10,
                justifyContent:'center', alignItems:'center',
                marginTop:30}}>
                    <Text style={{fontWeight:'Bold',
                fontSize:15, color:'#2D97DA'}}>Get Started</Text>
                 </TouchableOpacity>
                </View>

            </View>
        
        </LinearGradient>     
    </View>
  );
}


export default Welcome

const styles = StyleSheet.create({

})
