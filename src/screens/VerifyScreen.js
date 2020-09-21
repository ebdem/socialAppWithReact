import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryInputForm from "../components/PrimaryInputForm";
import PrimaryButton from "../components/PrimaryButton";
import {colors} from "../config/colors";

export default class VerifyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.headingContainer}>
              <Text style={styles.heading}>ENTER CONFIRMATION CODE</Text>
          </View>
          <View style={styles.subHeadingContainer}>
              <Text><Text style={styles.infoText}>Enter the 6 digit code we send to +90 5365412382.</Text><Text style={styles.requestText}>Request a new code</Text> </Text>
          </View>
          <View style={styles.inputContainer}>
              <PrimaryInputForm placeHolderText={'Confirm Code'}/>
          </View>
          <View style={styles.buttonContainer}>
              <PrimaryButton buttonLabel={'Next'} buttonBgColor={colors.primary} textColor1={colors.white}/>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:colors.black
    },
    headingContainer:{
        marginTop:'20%',
        marginBottom:20

    },
    subHeadingContainer:{
        marginRight:'20%',
        marginLeft:'20%',
        marginBottom: 20

    },
    inputContainer:{
        marginRight:'10%',
        marginLeft:'10%',
        marginBottom: 40,
        marginTop: 40

    },
    buttonContainer:{
        marginRight:'5%',
        marginLeft:'5%',
        marginTop: 40

    },
    heading:{
        textAlign:'center',
        fontWeight:'700'
    },
    infoText:{
        color:colors.white
    },
    requestText:{
        color:colors.primary,
        fontWeight: '700'
    }
});
