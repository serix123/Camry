import React, {useEffect, useState} from 'react';
import Navigation from './navigations/Navigation';
import { InitializeFirebase } from './database/firebase';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const  getFonts =()=> Font.loadAsync({
  'OpenSans-bold' : require('./assets/fonts/open-sans/OpenSans-Bold.ttf'),
  'OpenSans-extra-bold' : require('./assets/fonts/open-sans/OpenSans-ExtraBold.ttf'),
  'OpenSans-semi-bold' : require('./assets/fonts/open-sans/OpenSans-SemiBold.ttf'),
  'OpenSans-light' : require('./assets/fonts/open-sans/OpenSans-Light.ttf'),
  'OpenSans-regular' : require('./assets/fonts/open-sans/OpenSans-Regular.ttf'),
  'Ambit-bold' : require('./assets/fonts/ambit/Ambit-Bold.otf'),
  'Ambit-light' : require('./assets/fonts/ambit/Ambit-Light.otf'),
  'Ambit-regular' : require('./assets/fonts/ambit/Ambit-Regular.otf'),
  'Ambit-semi-bold' : require('./assets/fonts/ambit/Ambit-SemiBold.ttf'),
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  axios.defaults.baseURL = 'http://192.168.1.15:3001';

  if(fontsLoaded){
    return(
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  } else {
    
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontsLoaded(true)}
      />
    );
  }
}