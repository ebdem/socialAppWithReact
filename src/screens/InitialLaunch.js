import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity, Image, Modal,FlatList  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from "../config/colors";
import PrimaryButton from "../components/PrimaryButton";
import SearchBox from "../components/SearchBox";


//Modal and select language is ready but not use!!!!!!!!!!

const DATA = [
    {
        id:1,
        title:'Language 1',
        subTitle:'Language 1'
    },
    {
        id:2,
        title:'Language 2',
        subTitle:'Language 2'
    },
    {
        id:3,
        title:'Language 3',
        subTitle:'Language 3'
    },
    {
        id:4,
        title:'Language 4',
        subTitle:'Language 4'
    }
]

export class InitialLaunch extends Component {
    constructor(props) {
        super(props);
        this.state={
            languageVisibleModal:false

        }
    }

    handleClick = () =>{
        this.setState({languageVisibleModal:!this.state.languageVisibleModal})

    }
    render() {
        const {languageVisibleModal} = this.state
        return (
            <View style={styles.container}>
                <View style={styles.languageWrapper}>

                        <Text style={styles.language}>
                            <Text>Türkçe (Türkiye)  </Text>
                            <Icon name="angle-down" size={20} color={colors.gray1} />
                        </Text>

                </View>
                <View style={styles.buttonWrapper}>
                    <Image style={styles.neredeiumLogo} source={require('../assets/images/isimm.png')}/>
                    <PrimaryButton buttonLabel='Yeni Hesap Oluştur' buttonBgColor={colors.primary} textColor1={colors.white}/>
                    <PrimaryButton buttonLabel='Giriş Yap' buttonBgColor={colors.white} textColor1={colors.primary}/>
                </View>
                <View style={styles.footerWrapper}>
                   <View style={styles.footerContent}>
                       <Text style={styles.fromItem}>From</Text>
                       <Text style={styles.demiray}>DEMIRAY</Text>
                   </View>
                </View>
                <Modal visible={languageVisibleModal} transparent={true}>
                    <View style={[styles.modalContainer, languageVisibleModal? {backgroundColor: 'rgba(0,0,0,0.5)'}:null]}>
                        <View style={styles.modalContentContainer}>
                            <View style={styles.titleWrapper}>
                                <Text style={styles.title}>
                                    SELECT YOUR LANGUAGE
                                </Text>
                            </View>
                            <View style={styles.underLine}/>
                            <View style={styles.searchBoxWrapper}>
                                <SearchBox/>
                            </View>
                            <View style={styles.underLine}/>
                            <FlatList
                                data={DATA}
                                keyExtractor={item=>item.id}
                                renderItem={({item}) => <View style={styles.languageWrapper2}>
                                    <Text>{item.title}</Text>
                                    <Text style={styles.subLanguage}>{item.subTitle}</Text>

                                </View>}/>




                        </View>

                    </View>


                </Modal>
            </View>
        )
    }
}

export default InitialLaunch;

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    },
    languageWrapper:{
        display: 'flex',
        flex: 1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    buttonWrapper:{
        display: 'flex',
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    footerWrapper:{
        display: 'flex',
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    neredeiumLogo:{
        width:'70%'
    },
    footerContent:{
        borderTopColor:'#bababa',
        borderTopWidth:5,
        width: '100%',
        alignItems:'center',
        padding:10

    },
    demiray:{
        fontWeight:'bold'

    },
    fromItem:{
        color:colors.gray1

    },
    language:{
        color:colors.gray1
    },
    modalContainer:{
        display:'flex',
        flex:1
    },
    modalContentContainer:{
        display:'flex',
        flex:1,
        backgroundColor:colors.secondary,
        marginLeft:'10%',
        marginRight:'10%',
    },
    titleWrapper:{
        padding: 10

    },
    title:{
        fontSize:20,
        fontWeight: '700',
        textAlign:'center',
        color:colors.white
    },
    underLine:{
        height:0.5,
        backgroundColor: colors.gary2
    },
    searchBoxWrapper:{

    },
    languageWrapper2:{
        marginLeft: 15,
        marginBottom:10

    },
    subLanguage:{
        color:colors.gary2,
        fontSize: 12,

    }
})
