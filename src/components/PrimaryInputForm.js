import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {colors} from "../config/colors";

export default class PrimaryInputForm extends Component {
  render() {
    const {placeHolderText} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.fieldContainer}>
          <TextInput placeholder={placeHolderText} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1
  },
  fieldContainer:{
    backgroundColor:colors.gary2,
    borderWidth:1,
    borderColor:colors.gray1,
    borderRadius:5,
    height:50,
    width:'100%'

  }
});
