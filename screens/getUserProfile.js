
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserLocalProfile = async () => {
    let currentUser = '';
     // get user information from local storage here
     try {
        const savedUser = await AsyncStorage.getItem("USER_LOCAL_INFO");
        const currentUser = JSON.parse(savedUser);
        //setUserData(currentUser);
        console.log("Local User Info from Function ", currentUser);
       
      } catch (error) {
        console.log(error);
      }
    
      
}

