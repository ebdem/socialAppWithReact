import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {colors} from "../config/colors";

const Feed = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <View style={styles.headerLeftWrapper}>
                    <Image style={styles.profileThumb} source={require('../assets/images/ebu.png')} />
                    <Text style={styles.headerTitle}>    Ebubekir</Text>
                </View>
                <Image style={styles.icon} source={require('../assets/images/dots.jpg')} />
            </View>
            <View>
                <Image style={styles.feedImage} source={require('../assets/images/ebu.png')} />
            </View>
            <View style={styles.feedImageFooter}>
                <View style={styles.imageLeftWrapper}>
                    <TouchableOpacity>
                        <Image style={styles.iconFooter} source={require('../assets/images/heartfeed.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconFooter} source={require('../assets/images/comment.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconFooter} source={require('../assets/images/messagefeed.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image style={styles.iconFooter} source={require('../assets/images/bookmarkfeed.png')} />
                    </TouchableOpacity>
                </View>


            </View>
            <View style={styles.underLineWrapper}>
                <View style={styles.underLine}/>
            </View>
            <View style={styles.likesAndCommentsWrapper}>
                <Image style={styles.likesImage} source={require('../assets/images/heart.png')} />
                <Text style={styles.likesTitle}>  999 Mn++</Text>
            </View>
            <Text style={styles.headerTitle}>    Ebubekir <Text style={styles.commentText}>Buralardan bir  atlı geçti</Text> </Text>

        </View>
    )
}

export default Feed;

const styles = StyleSheet.create({
    container:{
        display:'flex'
    },
    profileThumb:{
        width:50,
        height:50,
        borderRadius:50
    },
    headerWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    icon:{
        width: 30,
        height: 30,
        opacity:0.2
    },
    headerLeftWrapper:{
        flexDirection: 'row',
        alignItems:'center'
    },
    headerTitle:{
        fontSize:20,
        fontWeight:'600'
    },
    feedImage:{
        width:'100%',
        height:400
    },
    iconFooter:{
        width: 30,
        height: 30,
        opacity:0.5

    },
    imageLeftWrapper:{
        flexDirection:'row',


    },
    feedImageFooter:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10
    },
    underLine:{
        height:1,
        backgroundColor:colors.gary2
    },
    underLineWrapper:{
        marginLeft:10,
        marginRight:10
    },
    likesImage:{
        width:25,
        height:25
    },
    likesAndCommentsWrapper:{
        flexDirection:'row',
        padding:15
    },
    likesTitle:{
        fontSize: 17,
        fontWeight: '600'
    },
    commentText:{
        fontSize:12,
        fontWeight:'300'
    }
});
