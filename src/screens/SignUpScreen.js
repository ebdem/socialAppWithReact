import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text,ScrollView } from 'react-native';
import { colors } from "../config/colors";
import PhoneInputForm from "../components/PhoneInputForm";
import PrimaryButton from "../components/PrimaryButton";



export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            isPhoneEnabled:true
        }
    }

    switchButton(val){
        this.setState({isPhoneEnabled: val})
    }
  render() {
        const {isPhoneEnabled}=this.state
    return (
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
            <View style={styles.avatarWrapper}>
                <Image style={styles.avatar} source={require('../assets/images/avatar.jpg')}/>
            </View>
            <View style={styles.switchTitle}>
                <TouchableOpacity onPress={()=>this.switchButton(true)} style={[styles.titleSwitch,{borderBottomColor:isPhoneEnabled ? colors.black : colors.gary2}]}>
                    <Text style={[styles.title,{color:isPhoneEnabled?colors.black:colors.gray1}]}>PHONE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.switchButton(false)} style={[styles.titleSwitch,{borderBottomColor:isPhoneEnabled ? colors.gary2 : colors.black}]}>
                    <Text style={[styles.title,{color:isPhoneEnabled?colors.gray1:colors.black}]}>EMAIL</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.phoneNumberInputWrapper}>
                <PhoneInputForm/>
            </View>

            <View style={styles.notificationWrapper}>
                <Text style={styles.notificationText}>Bu Uygulama Ebubekir Demiray Tarafından Gelişririlmiştir..</Text>

            </View>
            <View style={styles.signUpButton}>
                <PrimaryButton buttonLabel={'NEXT'} textColor1={colors.secondary} buttonBgColor={colors.primary}  />
            </View>
        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.login}><Text style={styles.alreadyAccount}>Already have account ?</Text> Log in...</Text>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
      backgroundColor:colors.white
  },
  avatar:{
    width:150,
    height:150,
      opacity:0.1


  },
  avatarWrapper:{
    display: 'flex',
    alignItems:'center',
    marginTop:'10%'

  },
  switchTitle:{
    display:'flex',
    flexDirection:'row',
    margin:30,
    marginTop: 30,

  },
  titleSwitch:{
    display:'flex',
    flex: 1,

    borderBottomWidth:2
  },
  title:{
    textAlign:'center',
    padding:15,
      fontWeight: '700'

  },
  phoneNumberInputWrapper:{
      display:'flex',
      margin: 20
  },
  notificationWrapper:{
      padding: 25,
      paddingTop:10
    },
  notificationText:{
      color:colors.gray1,
      textAlign: 'center'
    },
    signUpButton:{
      marginLeft:15,
        marginRight:15,


    },
    topContainer:{
      display:'flex',
        flex:1

    },
    bottomContainer:{

      borderTopWidth: 1,
        borderColor:colors.gray1,


        padding:10


    },
    login:{
      textAlign:'center',
       fontWeight:'700',
        padding:25
    },
    alreadyAccount:{
      color:colors.gray1
    }
});
