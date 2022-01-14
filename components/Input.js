import React from 'react'
import {View,StyleSheet,TextInput} from 'react-native'

const Input = props =>{
    return (
        <TextInput {...props} style = {{...styles.input,...props.style}} />
    )
}

const styles = StyleSheet.create({
    input:{
        borderBottomColor:'#041C32',
        borderBottomWidth : 1,
        padding: 5,
        marginVertical: 10,
        width: 150
    }
})

export default Input