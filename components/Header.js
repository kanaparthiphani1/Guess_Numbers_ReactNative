import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    header:{
        width: '100%',
        height:90,
        paddingTop:36,
        backgroundColor: '#04293A',
        justifyContent:'center',
        alignItems:'center'
    },

    headerText:{
        color:'wheat',
        fontSize:18,
        fontFamily:'open-sans-bold'
    }

})

export default Header;