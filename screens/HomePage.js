import React, {useState, useCallback, useMemo, useRef, useEffect} from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { widthPercentageToDP as wp, 
    heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView, View, Text, StyleSheet, Image, Alert, Modal, ActivityIndicator,
  TextInput, TouchableOpacity, StatusBar, Dimensions, Pressable, ImageBackground} from 'react-native';

import { Ionicons, Entypo, SimpleLineIcons, FontAwesome, FontAwesome5} from '@expo/vector-icons'
import FeatherIcon from 'react-native-vector-icons/Feather'

import { gs, colors } from '../styles'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

import RBSheet from 'react-native-raw-bottom-sheet'
import { SimpleModal } from '../components/SimpleModal';

import ActionSheet from '@alessiocancian/react-native-actionsheet';

import ProgressBar from 'react-native-progress-bar-horizontal';


import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import CircularProgress, { CircularProgressBase } from 'react-native-circular-progress-indicator';

import Loader from '../components/Loader';

const screenWidth = Dimensions.get("window").width;

const MyBarChart = () => {
    return (
      <>
        <BarChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [500, 1500, 2500, 3500, 4500, 5500],
              },
            ],
          }}
          width={Dimensions.get('window').width -40}
          height={220}
          yAxisLabel={'\u20A6'}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#F2688B',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            // style: {
            //   borderRadius: 16,
            //   justifyContent:"center"
            // },
          }}
          style={{
            marginHorizontal:10,
            borderRadius: 10,
          }}
        />
      </>
    );
  };

export default function HomePage() {

  const [isModalVisible, setisModalVisible] = useState(false);

  const [chooseData, setchooseData] = useState();

  const [showModal, setshowModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [btn1Loading, setBtn1Loading] = useState(false);

  const [btn2Loading, setBtn2Loading] = useState(true);

  const [btn3Loading, setBtn3Loading] = useState(false);

  const changeModalVisible = (bool) =>{
    setisModalVisible(bool);
  }

  const setData = (data) =>{
    setchooseData(data);
  };

 //const  bgImage = {require('../assets/bg4.jpg')};
 //const bgImage = {uri: '../assets/bg4.jpg'};

  const sheet = useRef();
  // React.useEffect(() =>{
  //   sheet.current.open();
  // }, [])

   // ref
   const sheetRef = useRef();
  

   let actionSheet = useRef();
   
   var optionArray = [
    'Option1', 'Option2', 'Option3', 'Option4', 'Option5', 'Option6', 'Option7', 'Option8', 'cancel', 
   ];
   
   var icons = [
    <Image
      source={{
        uri: "https://www.chevychasesection3.org/sites/g/files/vyhlif406/f/styles/news_image/public/pages/trash-278x300.jpg?itok=fK7hIbG-",
      }}
      style={{ width: "50", height: "50" }}
    />,
    <Image
      source={{
        uri: "https://img-new.cgtrader.com/items/73665/floppy_disk_3_5_3d_model_3ds_fbx_blend_dae_fc20cd23-1906-47a6-b94e-643026bac619.jpg",
      }}
      style={{ width: "50", height: "50" }}
    />,
    <Image
      source={{
        uri: "https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg",
      }}
      style={{ width: "50", height: "50" }}
    />,
  ];

   const showActionSheet = () => {
     actionSheet.current.show();
   };


   useEffect(() =>{
    setTimeout(async() =>{
      setIsLoading(false);
   }, 3000)
     
  }, []);
  
//  componentDidMount = async () => {
//     setTimeout(() =>{
//       setIsLoading(false);
//     }, 3000)
//  }
const props = {
  activeStrokeWidth: 20,
  inActiveStrokeWidth: 25,
  inActiveStrokeOpacity: 0.1,
  activeStrokeSecondaryColor: '#C25AFF', // this act as gradient but not important
  
};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#eBecf4"}}>
            
            <StatusBar barStyle='light-content' translucent={true}
                backgroundColor='transparent' />

                {/* header of the screen */}
            <LinearGradient colors={[colors.orange, colors.pink]} start={[0,0]} end={[1,1]}
            style={{ elevation: 30, shadowColor: '#930D2F'}}>
              

                <View style={[gs.rowBetween, {marginTop: 25, marginHorizontal: 10}]}>
                   {/* <View style = {styles.circleIconLeft}>
                        
                    </View> */}
                    {/* <View>
                        <Text style={[styles.titleSend, {color: "#BFB9B5"}]}>Rugipo Finance</Text>
                    </View> */}
                    <View style={styles.nameView}>
                    <Text style={styles.nameTitle}>Hi <Text style={{fontSize: 23, fontWeight:"bold"}}>Ken,</Text></Text>
                    </View>

                    {/* <Text style = {styles.text}>{new Date().toString().slice(0,11)}</Text> */}
                   
                    <TouchableOpacity style = {styles.circleIconLeft}
                    onPress={() =>{ Alert.alert('Notification Message')}}>
                     <Ionicons name="notifications-outline" color={colors.text} size={20}
                     />
                    </TouchableOpacity>
                   
                </View>

                {/* <View style={styles.nameView}>
                    <Text style={styles.nameTitle}>Hello <Text style={{fontSize: 23, fontWeight:"600"}}>Ken Developer,</Text> </Text>
                </View> */}
                {/* <View style={[styles.headerSendUp, {padding:13}]}>
                    <Text style={[styles.titleSend, {color: "#fff"}]}>Open an account</Text>
                    <Text style={[styles.subTitleSend, {color:"#333"}]}>To open an account, kindly fill the details below correctly and ensure to use valid email address and phone number.</Text>
                </View> */}

                
                <View style={styles.balanceRow}>
                    <Text style={styles.balanceTitle}>{'\u20A6'}29,000.00 <View style={styles.balanceIcon}>
                    <FontAwesome name="line-chart" color={{color:"#00CC00"}} size={20} />
                     </View>
                     </Text>
                    <Text style={styles.balanceSubTitle}>Current Balance</Text>
                </View>
            </LinearGradient>


            {/* loader indicator here */}
            <Loader loading={isLoading} />

            {/* body of the screen */}
            <ScrollView style={{marginBottom: 50}}>
              {/* This show a dash round line */}
                {/* <View style={styles.placeholder}>
                  <View style={styles.placeholderInset}>

                  </View>
                </View> */}

                <View style={{
                      justifyContent:'space-between', 
                      flexDirection:'row', 
                      marginHorizontal: 10, 
                      marginTop: 10, 
                      marginBottom: 10}}>
                  <View>
                    <Text>Menu 1</Text>
                   
                 </View>
                    <View style={{
                      justifyContent:'space-between', 
                      flexDirection:'row', 
                      width: '35%'}}>
                        <Text>Icon1 </Text>
                        <Text>Icn2 </Text>
                        <Text>Icon3 </Text>
                    </View>
                  </View>
                  
                    <View style={styles.middlePage}>
                      <Text style={styles.chatHeader}>Transaction Overview</Text>
                      <MyBarChart />
                    </View>
                    
                    {/* <Text style={styles.chatHeader2}>Account Overview</Text>
                        <View style={styles.middlePage2}>
                           <MyBarChart />
                        </View> */}
                        
                        
                        <TouchableOpacity style={[styles.middleSection, {marginTop: 10, overflow: 'hidden'}]}
                        onPress={() =>{ Alert.alert('You click to apply for loan') }}>
                          <Image style={styles.bgImage} source={require('../assets/bg11.png')}/> 
                          
                         
                            {/* icon or symbol */}
                            <View style={{flexDirection:'row', alignItems:'center'}}>

                              {/* Coin image */}
                              <View style={{borderRadius: 10, borderColor:"#ea3372", backgroundColor:"#ea3372", height: 55, width: 55, marginLeft: 5}}>
                              <FontAwesome5 name="hand-holding-usd"
                                 size={34} color="#fff" marginLeft={10} marginTop={8}
                                  />
                              </View>
                                 
                              {/* Coin symbol */}
                              <View style={{flexDirection:'column',
                                justifyContent:'flex-start', marginLeft: 10}}>
                              <Text style={{fontWeight:'bold',
                                  color:'#fff', fontSize:18, marginTop: 5}}>Quick Loans</Text>
                                <Text style={{color:'#001f00', fontSize:15, flexShrink:1, flexWrap: 'wrap', maxWidth:300, marginBottom: 10}}>Apply for a quick loan to uplift your business need swiftly</Text>
                              </View>
                            </View>

                            {/* coin price and indicator */}
                            <View style={{flexDirection:'column',
                               alignItems:'center',
                                justifyContent:'center'}}>
                              {/* price */}
                              <FontAwesome name="angle-right"
                                size={25} color="#fff" 
                              />
                              {/* indicator */}
                                {/* <View style={{flexDirection:'row', alignItems:'center',
                                  justifyContent:'center'}}>
                                  <Text style={{fontWeight:'Bold', fontSize:12}}>Text</Text>
                                <Icon name='chevron-circle-up'
                                color='gree' />
                                </View> */}
                           
                            </View>
                            
                        </TouchableOpacity>
                          
                          {/* Indicators types here */}
                          <Text style={{fontWeight:'bold',color:'#aaa', fontSize:18, marginTop: 5,
                                        marginHorizontal: 10}}>
                                  Indicator Type here
                                  </Text>
                        <DotIndicator color='#F2688B' size={8} />
                        <BarIndicator color='#F2688B' size={20} />
                        <MaterialIndicator color='#F2688B' size={20} />
                        <BallIndicator color='#F2688B' size={20} />
                        <PacmanIndicator color='#F2688B' size={20} />
                        <PulseIndicator color='#F2688B' size={20} />
                        <SkypeIndicator color='#F2688B' size={20} />
                        <UIActivityIndicator color='#F2688B' size={20} />
                        <WaveIndicator color='#F2688B' size={20} />

                          
                          {/* circle progress bar here */}
                          <View style={{marginHorizontal: 10, marginTop: 10, marginBottom: 10}}>
                              <View style={{flexDirection: 'column', alignItems:'center', justifyContent:'center', marginVertical: 5}}>

                              <CircularProgressBase
                                {...props}
                                value={80}
                                radius={125}
                                activeStrokeColor={'#e84118'}
                                inActiveStrokeColor={'#e84118'}
                                
                              >
                                <CircularProgressBase
                                  {...props}
                                  value={87}
                                  radius={100}
                                  activeStrokeColor={'#badc58'}
                                  inActiveStrokeColor={'#badc58'}
                                  
                                >
                                  <CircularProgressBase
                                    {...props}
                                    value={62}
                                    radius={75}
                                    activeStrokeColor={'#18dcff'}
                                    inActiveStrokeColor={'#18dcff'}
                                    
                                  />
                                </CircularProgressBase>
                              </CircularProgressBase>

                                <CircularProgress
                                  value={60}
                                  radius={120}
                                  duration={1000}
                                  progressValueColor={'#aaa'}
                                  maxValue={200}
                                  title={'KM/H'}
                                  titleColor={'#F2688B'}
                                  titleStyle={{fontWeight: 'bold'}}
                                />
                                <CircularProgress
                                  value={60}
                                  activeStrokeWidth={8}
                                  progressValueColor={'#aaa'}
                                />

                              <CircularProgress
                                value={60}
                                valuePrefix={'$'}
                                inActiveStrokeColor={'#2ecc71'}
                                inActiveStrokeOpacity={0.2}
                              />

                              <CircularProgress
                                value={75}
                                inActiveStrokeColor={'#2ecc71'}
                                inActiveStrokeOpacity={0.2}
                                progressValueColor={'#aaa'}
                                valueSuffix={'%'}
                              />
                              </View>
                          </View>
                                <Text style={{fontWeight:'bold',
                                              color:'#aaa', fontSize:18, marginTop: 5,
                                              marginHorizontal: 10}}>
                                              Transfer Limit
                                  </Text>
                        <View style={{marginHorizontal: 15, backgroundColor: '#F2688B',
                            borderWidth:1, borderColor:'#ddd', borderRadius: 10,
                            marginBottom:10,}}>
                        
                                  <View style={{marginHorizontal: 5, flexDirection: 'row',
                                alignItems: 'center', justifyContent:'center'}}>
                                      <View style={{borderRadius: 8, borderColor:"#aaa", backgroundColor:"#aaa", height: 30, width: 30, marginHorizontal: 5,
                                    marginBottom: 5, marginTop: 5}}>
                                        <FontAwesome5 name="exchange-alt"
                                          size={15} color="#fff" marginLeft={10} marginTop={8}
                                            />
                                      </View>
                                    
                                  <ProgressBar 
                                    progress={0.5}
                                    animated={true}
                                    borderRadius={10}
                                    borderWidth={1}
                                    fillColor="#aaa"
                                    unfilledColor="#fff"
                                    height={20}
                                    width={320}
                                    borderColor="#aaa"
                                    duration={100}
                                    percentage={35}
                                    progressColor={"green"}

                                  />
                                  </View>
                                
                        </View>
                        <TouchableOpacity style={[styles.middleSection, {marginTop: 10, backgroundColor:'#90ccde'}]}
                        onPress={() =>{ Alert.alert('You click to transfer limit') }}>

                            {/* icon or symbol */}
                            <View style={{flexDirection:'row', alignItems:'center'}}>

                              {/* Coin image */}
                              <View style={{borderRadius: 10, borderColor:"#aaa", backgroundColor:"#aaa", height: 40, width: 40, marginLeft: 5}}>
                              <FontAwesome5 name="exchange-alt"
                                 size={25} color="#fff" marginLeft={10} marginTop={8}
                                  />
                              </View>
                                 
                              {/* progress bar transfer limit */}
                              <View style={{flexDirection:'column',
                                justifyContent:'flex-start', marginLeft: 10, width: 300, marginBottom: 5}}>
                              
                                  <Text style={{fontWeight:'bold',
                                      color:'#fff', fontSize:18, marginTop: 5}}>
                                  Transfer Limit
                                  </Text>
                                <ProgressBar 
                                  progress={0.5}
                                  animated={true}
                                  borderWidth={1}
                                  fillColor="#F2688B"
                                  unfilledColor="#fff"
                                  height={20}
                                  borderColor="#F2688B"
                                  duration={100}
                                  borderRadius={10}
                                />
                               
                              </View>
                            </View>
                            
                            {/* coin price and indicator */}
                            
                        </TouchableOpacity>
                    
                    {/* loading buttons */}
                    <Text style={{fontSize: 15, fontWeight:'bold', paddingHorizontal: 20, marginTop: 20}}>Loading Buttons</Text>
                    <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems:'center', marginHorizontal: 10, marginBottom: 10, marginTop: 20}}>
                    
                        <TouchableOpacity style={styles.button} activeOpacity={0.8}
                        onPress={() => setBtn1Loading(!btn1Loading)} >
                            {!btn1Loading ? (
                              <Text style={{color:"#fff", fontSize: 15}}>Button 1 Click</Text>) :(
                                <ActivityIndicator color='#fff' size={20}/>
                              )}
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button} activeOpacity={0.8}
                        // onPress={() => setBtn2Loading(true)} OR
                          onPress={() => setBtn2Loading(!btn2Loading)}  // demo purpose
                        >
                            {btn2Loading ? (
                              <Text style={{color:"#fff", fontSize: 15}}>Button 2  Click</Text>
                                ):(
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color:"#fff", fontSize: 15, fontWeight:'600'}}>Loading... {' '}</Text>
                                    <ActivityIndicator color='#fff' size={20}/>
                                </View>
                              )}
                        

                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button2} activeOpacity={0.8}
                        // onPress={() => setBtn2Loading(true)} OR
                          onPress={() => setBtn3Loading(!btn3Loading)}  // demo purpose
                        >
                          <Text style={{color:"#fff", fontSize: 15}}>Button 3</Text>
                          {btn3Loading && <ActivityIndicator color='#fff' size={20}/>}
                        </TouchableOpacity>
  
                    </View>


                  {/* Modal action */}
                    <Text style={styles.text}>
                      {chooseData}
                    </Text>
                    <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems:'center', marginHorizontal: 10, marginBottom: 10, marginTop: 20}}>
                    
                    <TouchableOpacity
                    onPress={() =>changeModalVisible(true)}
                    >
                    <Text style={{color:"#aaa", fontSize: 15}}>Modal </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    onPress={() =>{
                      setshowModal(!showModal);
                    }}
                    >
                    <Text style={{color:"#aaa", fontSize: 15}}>Popup </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() =>{
                      sheet.current.open();
                    }}
                    >
                    <Text style={{color:"#aaa", fontSize: 15}}>Bottom Sheet </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={showActionSheet}
                    >
                    <Text style={{color:"#a00110", fontSize: 15}}>Bottom Sheet2 </Text>
                    </TouchableOpacity>
                    
                  </View>

                  {/* Recent transaction */}

                  <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems:'center', marginHorizontal: 10, marginBottom: 10, marginTop: 20}}>
                    <Text style={{color:"#aaa", fontSize: 15, fontWeight: 'bold'}}>Recent transaction</Text>
                    
                    <TouchableOpacity
                    onPress={() =>{
                      Alert.alert("You click to View all transactions")
                    }}
                    >
                    <Text style={{color:"#aaa", fontSize: 15}}>View </Text>
                    </TouchableOpacity>
                    
                  </View>
                        
                        {/* list view here */}
                        <Pressable style={styles.recentTransaction}
                          onPress={() =>{
                            Alert.alert("You click to View all transactions")
                          }}
                        >
                        
                            {/* icon or symbol */}
                            <View style={{flexDirection:'row', alignItems:'center'}}
                            onTap={() =>{
                              Alert.alert("You click to View More...")
                            }}
                            >

                              {/* Coin image */}
                              <View>
                                
                              <Ionicons name="ios-arrow-down-circle-sharp"
                                 size={30} color="#ea3372" marginLeft={8}
                                  />
                              </View>
                                 
                              {/* Icon and text */}
                              <View style={{flexDirection:'column',
                                justifyContent:'flex-start', marginLeft: 10}}>
                              <Text style={{fontWeight:'bold',
                                  color:'#aaa', fontSize:15, marginTop: 5}}>Transfer | Debit</Text>
                                <Text style={{fontWeight:'bold', fontSize:15, marginBottom: 5}}>{'\u20A6'}30,000.00</Text>
                              </View>
                            </View>

                            {/* price Send and indicator */}
                            <View style={{flexDirection:'column',
                               backgroundColor:'#fff', alignItems:'center',
                                justifyContent:'center'}}>
                              {/* navigation Icon */}
                              {/* <FontAwesome name="angle-right"
                                size={30} color="#aaa" 
                              /> */}
                              {/* date and indicator */}
                                <View style={{flexDirection:'row', alignItems:'center',
                                  justifyContent:'center'}}>
                                  <Text style={{fontWeight:'bold', fontSize:10, color:"#aaa"}}>02/05/23</Text>
                                  <FontAwesome name="angle-right"
                                size={25} color="#aaa" style={{marginLeft:10}} />
                                </View>

                            </View>
                        </Pressable>

                        <TouchableOpacity style={styles.recentTransaction}
                        onPress={() => {
                          Alert.alert("You click to View more transactions")
                        }}>
                            {/* icon or symbol */}
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                              {/* Coin image */}
                              <View>
                              <Ionicons name="ios-arrow-down-circle-sharp"
                                 size={30} color="#ea3372" marginLeft={8}
                                  />
                              </View>
                                 
                              {/* Icon text */}
                              <View style={{flexDirection:'column',
                                justifyContent:'flex-start', marginLeft: 10}}>
                              <Text style={{fontWeight:'bold',
                                  color:'#aaa', fontSize:15, marginTop: 5}}>Debit</Text>
                                <Text style={{fontWeight:'bold', fontSize:15, marginBottom: 5}}>{'\u20A6'}15,000.00</Text>
                              </View>
                            </View>

                            {/* price Send and indicator */}
                            <View style={{flexDirection:'column',
                               backgroundColor:'#fff', alignItems:'center',
                                justifyContent:'center'}}>
                             
                              {/* <FontAwesome name="angle-right"
                                size={30} color="#aaa" 
                              /> */}
                              {/* date and indicator */}
                                <View style={{flexDirection:'row', alignItems:'center',
                                  justifyContent:'center'}}>
                                  <Text style={{fontWeight:'bold', fontSize:10, color:"#aaa"}}>02/06/23</Text>
                                  <FontAwesome name="angle-right"
                                size={25} color="#aaa" style={{marginLeft:10}} />
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.recentTransaction}
                          onPress={() =>{
                            Alert.alert("You click to View more transactions")
                          }}>

                            {/* icon or symbol */}
                            <View style={{flexDirection:'row', alignItems:'center'}}>

                              {/* Icon image */}
                              <Ionicons name="arrow-up-circle-outline"
                                 size={30} color="green" marginLeft={8}
                                  />
                               {/* Coin symbol */}
                              <View style={{flexDirection:'column',
                                justifyContent:'flex-start', marginLeft: 10}}>
                              <Text style={{fontWeight:'bold',
                                  color:'#aaa', fontSize:15, marginTop: 5}}>Credit</Text>
                                <Text style={{fontWeight:'bold', fontSize: 15, marginBottom: 5}}>{'\u20A6'}10,000.00</Text>
                              </View>
                            </View>

                            {/* price Send and indicator */}
                            <View style={{flexDirection:'column',
                               backgroundColor:'#fff', alignItems:'center',
                                justifyContent:'center'}}>
                              {/* price */}
                              {/* <FontAwesome name="angle-right"
                                size={25} color="#aaa" 
                              /> */}
                              {/* indicator */}
                                <View style={{flexDirection:'row', alignItems:'center',
                                  justifyContent:'center'}}>
                                  <Text style={{fontWeight:'bold', fontSize:10, color:"#aaa"}}>02/06/23</Text>
                                  <FontAwesome name="angle-right"
                                size={25} color="#aaa" style={{marginLeft:10}} />
                                </View>

                            </View>
                        </TouchableOpacity>

                        {/* <ActionSheet 
                      ref={actionSheet}
                      title={'Which do you like ?'}
                      options={optionArray}
                      cancelButtonIndex={8}
                      destructiveButtonIndex={2}
                      onPress={(index) => {
                         alert(optionArray[index])
                      }}
                    /> */}
                
            </ScrollView>
            

            {/* Modal alert here */}
                <Modal
                  transparent={true}
                  animationType="fade"
                  visible={isModalVisible}
                  nRequestClose={() => changeModalVisible(false)}
                >
                  <SimpleModal
                    changeModalVisible = {changeModalVisible}
                    setData={setData}
                  />
                </Modal>

                 {/* Modal full popup here */}
                 <Modal
                 animationType={"slide"}
                  transparent={false}
                  visible={showModal}
                  onRequestClose={() => {
                    console.log('Popup closed')
                  }}
                >
                  <View style={styles.modal}>
                    <Text style={styles.textPopup}> 
                    Modal is open
                    </Text>

                      <TouchableOpacity 
                        onPress={() =>{
                          setshowModal(!showModal);
                        }}
                      >
                        <Text style={styles.textPopup}>Close</Text>
                      </TouchableOpacity>
                  </View>
                </Modal>

                {/* bottom sheet1 here */}
                    <RBSheet
                     ref={sheet}
                      customStyles={{container: styles.sheet,
                        // wrapper: {
                        //   backgroundColor: "transparent"
                        // },
                        }}
                      height={350}
                      openDuration={250}
                      dragFromTopOnly={true}
                      closeOnDragDown={true}
                      animationType="fade"  
                    >
                        <View style={styles.sheetContent}>
                          <FeatherIcon name="shield" color="#F2688B" size={48} style={{alignSelf:'center'}}></FeatherIcon>
                          <Text style={styles.sheetTitle}>Secure your account</Text>
                          <Text style={styles.message}> enabling 2FA adds an extra layer to your security of your account by requiring you to enter a one-time code in addition to your password when you sign in.</Text>
                        
                          
                          <TouchableOpacity onPress={() =>{

                          }}>
                            <View style={styles.btn}>
                              <Text style={styles.btnText}>Confirm</Text>
                            </View>
                          </TouchableOpacity>

                            
                          <TouchableOpacity onPress={() =>{
                              sheet.current.close();
                              }}>
                                <View style={[styles.btn, {marginTop: 12, backgroundColor:'transparent',
                              borderColor:'transparent'}]}>
                                  <Text style={[styles.btnText, {color:'#F2688B'}]}>Cancel</Text>
                                </View>
                              </TouchableOpacity>
                        </View>
                    </RBSheet>


                    <ActionSheet
                      ref={actionSheet}
                      tintColor='#aaa'
                      styles={styles}
                      // Title of the Bottom Sheet
                      title={<Text style={{color: '#aaa', fontSize:18, fontWeight:'bold', alignItems:"center"}}>Transfer Type ?</Text>}
                      message={'Choose any of the menu items below to carry out your action as requested, thank you.'}
                      // Options Array to show in bottom sheet
                      options={optionArray}
                      //theme='ios'
                      cancelButtonIndex={8}
                      destructiveButtonIndex={4}
                      onPress={(index) => {
                        // Clicking on the option will give you alert
                        //alert(optionArray[index]);
                      }}
                    />
                   
                   
                   
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

    container:{
        padding: 24,
        flex: 1,
    },
    bgImage:{
      position: 'absolute',
      bottom: -6,
      right: 20,
     },
    button:{
      width: '30%',
      height: 40, 
      backgroundColor: '#75c31e',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 5,
    },
    button2:{
      width: '30%',
      height: 40, 
      backgroundColor: '#75c31e',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 10,
      flexDirection: 'row',
    },
   
      titleBox: {
        background: 'pink'
      },
      titleText: {
        fontSize: 16,
        color: '#000'
      },

    balanceRow:{
        flexDirection: "column",
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems:"center"
        
    },
    balanceRow1:{
        flexDirection: "row",
        justifyContent:"space-evenly"
     },
    balanceTitle:{
        fontSize: 30,
        fontWeight: "700",
        color: "#E1E1E1",
        justifyContent:"flex-end",
        textAlign: "center",
        

    },
    balanceSubTitle:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#E0E0E0",
        textAlign: "center",
        opacity: 0.5
    },
    balanceIcon:{
        borderRadius: 5, 
        overflow: 'hidden', 
        borderColor: '#E0E0E0',
        borderWidth: 1.5,
        width: 60,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.5
       
     },
     middlePage:{
        flexDirection: "column",
        borderRadius: 15, 
        borderColor: '#E0E0E0',
        borderWidth: 1.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
        height: 270,
        width: screenWidth - 16,
        marginTop: 40,
     },
     middlePage2:{
        alignItems: "center",
        marginHorizontal: 10,
        padding: 10,
        height: 270,
        width: screenWidth - 16,
       
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
    nameTitle:{
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        marginBottom: 6,
        textAlign: "justify",
        opacity: 0.8,
    },
    nameView:{
        flexDirection: "column",
        marginVertical: 10,
        marginHorizontal: 10,
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
        marginVertical: 10,
        backgroundColor: '#F2688B',
        alignItems: "center",
        justifyContent: "center",
     },
     circleText:{
        fontSize: 18,
        fontWeight: "900",
        color: "#F04B73",
        
     },
     chatHeader: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 8,
        opacity: 0.3
      },
      chatHeader2: {
        justifyContent:"flex-start",
        fontSize: 18,
        fontWeight:"300",
        marginTop: 10,
        opacity: 0.3,
        marginLeft: 16,
      },

      middleSection:{
        flexDirection:'row',
        borderWidth:1, borderColor:'#ddd',
        borderRadius:15, justifyContent:'space-between',
        marginHorizontal: 10,
        backgroundColor: "#F2688B",
        paddingRight:10, 
        marginBottom:10,
        height: "auto",
      },
      recentTransaction:{
        flexDirection:'row',
        borderWidth:1, borderColor:'#ddd',
        borderRadius:15, justifyContent:'space-between',
        marginHorizontal: 10,
        backgroundColor: "#fff",
        paddingRight:10, 
        marginBottom:10,
        height: "auto",
      },
      modal:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F2688B",
        padding: 5,
      },
      textPopup:{
        marginTop: 10,
        fontWeight: 'bold'
      },

      sheet:{
        borderTopLeftRadius: 14,
        borderTopRightRadius: 16,
      },
      sheetContent:{
        padding: 24,
        alignItems: 'stretch',
      },
      sheetTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#181818',
        marginTop: 16,
        textAlign: 'center',
      },
      message:{
        fontSize: 14,
        color: '#555',
        marginTop: 16,
        marginBottom: 32,
        textAlign: 'center',
      },

      btn:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#F2688B",
        borderColor: "#F2688B",
        borderWidth: 1,
      },
      btnText:{
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
      },
      placeholder:{
        flex: 1,
        height: 500,
        padding: 24,
      },
      placeholderInset:{
        borderWidth: 4,
        borderColor: "#F2688B",
        borderStyle: 'dashed',
        borderRadius: 9,
        flex: 1
      },
    })
