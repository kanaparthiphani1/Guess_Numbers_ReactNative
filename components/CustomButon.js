import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const CustomButton = props => {

    return (
        <TouchableOpacity onPress={props.action}>
            <View style={{...styles.button,...props.style}}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    button:{
        backgroundColor:'#04293A',
        paddingVertical:12,
        paddingHorizontal:30
    },
    buttonText:{
        color:'white',
        fontFamily:'open-sans'
    }

})

export default CustomButton