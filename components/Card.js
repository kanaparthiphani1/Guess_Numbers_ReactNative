import React from 'react'
import {View,StyleSheet} from 'react-native'

const Card = props => {
    return(
        <View style={{...styles.card,...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet. create({
    card:{
        alignItems: 'center',
        fontSize: 15,
        fontWeight: '500',
        paddingTop:20,
        paddingBottom:20,
        shadowColor : 'black',
        shadowOffset : {
            width: 0,
            height : 2,
        },
        shadowOpacity: 0.26,
        shadowRadius: 20,
        backgroundColor: 'white',
        padding: 50,
        borderRadius: 10,
        elevation : 5
    }
})

export default Card