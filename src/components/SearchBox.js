import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from "../config/colors";

export default class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchText:''
        }
    }
    textChanged=(text)=>{
        this.setState({searchText:text})
    }
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.iconWrapper}>
             <Icon style={styles.icon} name="search" size={20} color={colors.gray1}/>
         </View>
          <View style={styles.inputWrapper}>
               <TextInput placeholder={'SEARCH'} onChangeText={(text) => this.textChanged(text)} style={styles.inputBox}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10
    },
    iconWrapper:{
        display:'flex',
        flex:1
    },
    inputWrapper:{
        display: 'flex',
        flex: 7
    },
    inputBox:{
        height:40
    },
    icon:{
        padding: 5,

    }
});
