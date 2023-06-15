import React, { useState, createContext } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = props =>{
    // declare all properties you want to the DataContext here
    
    const [userDetails, setUserDetails] = useState([]);
    const [firstLoggedIn, setFirstLoggedIn] = useState('');
    const [userLoggedInState, setUserLoggedInState] = useState('');
    const [userIP, setUserIP] = useState([]);
    const [userLoggedInStatus, setUserLoggedInStatus] = useState(false);
    const [loggedOutStatus, setLoggedOutStatus] = useState('');
    const [userCountMessage, setUserCountMessage] = useState([]);
    const [userInitialLoginState, setUserInitialLoginState] = useState('');
    const [userTranToken, setUserTranToken] = useState([]);
    const [userLoggedToken, setUserLoggedToken] = useState([]);
    const [myDetails, setMyDetails] = useState('')



    return(
        <DataContext.Provider value={{
            // here you pass the value to the provider to be shared
            // across all components in the application
            userData:[userDetails, setUserDetails],
            myDetails:[myDetails, setMyDetails],
            authToken:[userLoggedToken, setUserLoggedToken],
            firstLoggedIn:[firstLoggedIn, setFirstLoggedIn],
            tranToken:[userTranToken, setUserTranToken],
            loggedInState: [userLoggedInState, setUserLoggedInState],
            loggedInStatus: [userLoggedInStatus, setUserLoggedInStatus],
            initialLoginState: [userInitialLoginState, setUserInitialLoginState]

        }}>
            {props.children}
        </DataContext.Provider>
    );

}
