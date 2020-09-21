import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image} from 'react-native'
import {colors} from "../config/colors";

export class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/images/iconn.png')}/>

                </View>
                <View style={styles.logoContainer}>
                    <Text style={styles.from}>from</Text>
                    <View style={styles.logoText}>
                        <Image style={styles.logo} source={require('../assets/images/isimm.png')}/>
                    </View>

                </View>
            </View>
        )
    }
}

export default SplashScreen;
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:colors.black
    },
    iconContainer:{
        display:'flex',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'

    },
    logoContainer:{
        display:'flex',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:30

    },
    logoText:{
        width:'30%',
        height:20
    },
    icon:{
        width:100,
        height:100,
        borderRadius:7

    },
    logo:{
        flex:1,
        width:undefined
    },
    from:{
        color:'gray',
        marginBottom:15
    }

})
