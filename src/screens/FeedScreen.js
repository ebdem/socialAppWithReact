import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView, Image, TouchableOpacity } from 'react-native';
import {colors} from "../config/colors";
import Feed from "../components/Feed";


export default class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image style={styles.iconCamera} source={require('../assets/images/camera.jpg')}/>
                    </TouchableOpacity>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logoNeredeium} source={require('../assets/images/isimm.png')}/>
                    </View>
                    <View style={styles.headerRightWrap}>
                        <TouchableOpacity>
                            <Image style={styles.iconCamera} source={require('../assets/images/igtv.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.iconCamera} source={require('../assets/images/message.jpg')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.storiesWrapper}>

                </View>





                <ScrollView style={styles.feedContainer}>
                    <Feed/>
                </ScrollView>


                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Image style={styles.iconCamera} source={require('../assets/images/home.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconCamera} source={require('../assets/images/search.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconCamera} source={require('../assets/images/plus.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconCamera} source={require('../assets/images/heart.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconCamera} source={require('../assets/images/profile.png')}/>
                    </TouchableOpacity>

                </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        //backgroundColor:colors.black
    },
    header:{
        display:'flex',
        flexDirection:'row',
        padding: 10,
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:colors.gary2

    },
    footer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderTopWidth:1,
        borderTopColor:colors.gary2


    },
    feedContainer:{
        display: 'flex',

    },
    iconCamera:{
        width:40,
        height:40
    },
    logoNeredeium:{
        width:150,
        height: '50%',
        marginTop:10

    },
    logoContainer:{
        display:'flex',
        flexDirection: 'row',


    },
    headerRightWrap:{
        display:'flex',
        flexDirection:'row'
    },
    storiesWrapper:{

    }
});
