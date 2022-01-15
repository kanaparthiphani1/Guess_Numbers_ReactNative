import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const NumberContainer =props=>{
    return (
        <View style={{...styles.container,...props.style}}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        borderWidth: 6,
        borderColor : '#ECB365',
        padding: 10,
        borderRadius: 10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },

    number:{
        color: '#ECB365',
        fontSize:25,
        fontWeight:'900'
    }

})

export default NumberContainer