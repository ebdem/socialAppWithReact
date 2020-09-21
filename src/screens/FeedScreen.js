import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {colors} from "../config/colors";

export default class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text>Header</Text>
                </View>
                <ScrollView>
                    <Text>Feed Content</Text>
                </ScrollView>


                <View style={styles.footer}>
                    <Text>Footer</Text>
                </View>
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

    },
    footer:{

    }
});
