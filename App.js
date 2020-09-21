
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import  SplashScreen  from "./src/screens/SplashScreen";
import InitialLaunch from './src/screens/InitialLaunch';
import SignUpScreen from "./src/screens/SignUpScreen";
import VerifyScreen from "./src/screens/VerifyScreen";
import FeedScreen from "./src/screens/FeedScreen";





const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <FeedScreen />
    </View>
  );
};

const styles = StyleSheet.create({
 container:{
   display:'flex',
   flex:1
 }
});

export default App;
