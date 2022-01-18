import React from 'react'
import {View,Text,StyleSheet, Button,Image} from 'react-native'

const GameOverScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text style={styles.head}>Game Over</Text>
            <View style={styles.imageCont}>
                <Image style={styles.image} resizeMode='cover' source={require('../assets/success.png')} />
            </View>
            <Text style={styles.finalWord}>Your phone requires <Text style={styles.highlight}>{props.numberOfRounds}</Text> to predict <Text style={styles.highlight}>{props.userChoice}</Text></Text>
            <Button title='Start Again' onPress={props.newGameHandler}/>   
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    imageCont:{
        width:300,
        height:300,
        borderRadius:150,
        overflow:'hidden',
        borderWidth:2,
        marginVertical: 20
    },

    image:{
        width:'100%',
        height:'100%'
    },

    highlight:{
        color:'red'
    },
    finalWord:{
        fontFamily:'open-sans-bold',
        fontSize:16,
        marginVertical:15

    },
    head:{
        fontFamily:'open-sans-bold',
        fontSize:28,
        color:'red'


    }


})

export default GameOverScreen