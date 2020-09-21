import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {colors} from "../config/colors";

export default class PrimaryButton extends Component {
    constructor(props) {
        super(props);
    }
  render() {

        const {buttonLabel,buttonBgColor,textColor1} = this.props
        const buttonText = buttonLabel
        const buttonBg=buttonBgColor
        const textColor = textColor1

    return (
      <View style={styles.container}>
         <TouchableOpacity style={[styles.button,{backgroundColor: buttonBg}]}>
             <Text style={[styles.text,{color: textColor}]}>{buttonText}</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding: 15

    },
    button:{
        backgroundColor:colors.primary,
        padding:15,
        borderRadius:9

    },
    text:{
        textAlign:'center',
        fontSize:16
    }
});
