import React,{useState,useRef,useEffect} from 'react'
import {View,Text,StyleSheet,Button, Alert} from 'react-native'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'

const generateRandomBetween = (min,max,exclude)=>{
    min = Math.ceil(min)
    max = Math.floor(max)

    const rndNum = Math.floor(Math.random()*(max-min))+min

    if(rndNum===exclude){
        return generateRandomBetween(min,max,exclude)
    }else{
        return rndNum
    }
}

const GameScreen = props => {

    const [currentGuess,setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice))
    const [userRounds,setUserRounds]=useState(0)

    const lowerBoundary = useRef(1)
    const higherBoundary = useRef(100)

    const {userChoice,setUserRound} = props
    useEffect(() => {
        if(currentGuess==userChoice){
            setUserRound(userRounds)
        }
    }, [currentGuess,userChoice,setUserRound])

    const nextGuessHandler = guess =>{
        if((guess==='lower' && currentGuess<props.userChoice) || (guess==='greater' && currentGuess>props.userChoice)){
            Alert.alert('Oops!!','You have predicted wrong',[{text:'Try Again',style:'cancel'}])
            return;
        }
        
        if(guess === 'lower'){
            higherBoundary.current = currentGuess
        }else{
            lowerBoundary.current = currentGuess
        }

        const nextGuess = generateRandomBetween(lowerBoundary.current,higherBoundary.current,currentGuess)
        setCurrentGuess(nextGuess)
        setUserRounds(prevState => prevState+1)
    }

    return (
        <View style={styles.screen}>
            <Text>
                Opponent's Guess
            </Text>
            <NumberContainer style={styles.numberCont}>{currentGuess}</NumberContainer>
            <Card style={styles.buttonCont}>
                <Button title='LOWER' onPress={nextGuessHandler.bind(this,'lower')}/>
                <Button title='GREATER' onPress={nextGuessHandler.bind(this,'greater')}/>
            </Card>
        </View>
    )

}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },

    buttonCont:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    },
    numberCont:{
        marginTop: 18,
        marginBottom: 11
    }

})

export default GameScreen