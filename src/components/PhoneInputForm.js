import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from "../config/colors";


export default class PhoneInputForm extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.countryWrapper}>
              <Text style={styles.country}>IN +90</Text>
          </View>
          <View style={styles.inputNumber}>
              <TextInput value={'05365412382'} />
          </View>
          <View style={styles.closeBtnWrapper}>
              <Icon size={25} style={styles.icon} name={'times'} color={colors.gray1}/>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:2,
        padding:10,
        borderRadius:5,
        borderColor:colors.gray1,
        backgroundColor:colors.gary2
    },
    country:{
      fontWeight:'700',
        color:colors.gray1
    },
    countryWrapper:{
        display: 'flex',
        borderRightWidth:1,
        borderRightColor:colors.gray1,
        paddingRight:15,



    },
    inputNumber:{
        display: 'flex',
        flex:1,
        paddingLeft:15

    },
    closeBtnWrapper:{
        display: 'flex',
        flex:1

    },
    icon:{
        textAlign:'right'
    }
});
