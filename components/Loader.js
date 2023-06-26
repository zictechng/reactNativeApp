import React from 'react';
import { StyleSheet, View, Text, Modal, ActivityIndicator, Image} from 'react-native';


const Loader = (props) => {

    const {loading} = props;

  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
        <View style={styles.modalBackground}>

            <View style={styles.ActivityIndicatorWraper}>
                
                <ActivityIndicator animating={loading} size='large' color={'#F2688B'} />
                <Text style={{fontSize:15, alignItems:'center', justifyContent:'center'}}>Please Wait...</Text>
                
            </View>

        </View>
    
    </Modal>
  );
}



const styles = StyleSheet.create({
    modalBackground:{
        flex:1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#00000040',
    },
    ActivityIndicatorWraper:{
        backgroundColor:'#fff',
        height: 90,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        //justifyContent: 'space-around',
        justifyContent: 'center',
    }
});


export default Loader;
