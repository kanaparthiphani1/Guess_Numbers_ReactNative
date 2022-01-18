import React,{useState,useRef,useEffect} from 'react'
import {View,Text,StyleSheet,Button, Alert,ScrollView} from 'react-native'
import Card from '../components/Card'
import CustomButton from '../components/CustomButon'
import NumberContainer from '../components/NumberContainer'
import {Ionicons} from '@expo/vector-icons'

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

    const initialGuess = generateRandomBetween(1,100,props.userChoice);

    const [currentGuess,setCurrentGuess] = useState(initialGuess)
    const [guessList,setGuessList]=useState([initialGuess])

    const lowerBoundary = useRef(1)
    const higherBoundary = useRef(100)

    const {userChoice,setUserRound} = props
    useEffect(() => {
        if(currentGuess==userChoice){
            setUserRound(guessList.length)
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
            lowerBoundary.current = currentGuess+1
        }

        const nextGuess = generateRandomBetween(lowerBoundary.current,higherBoundary.current,currentGuess)
        setCurrentGuess(nextGuess)
        setGuessList(prevState => [nextGuess,...prevState])
    }

    const listItem = (value,index) =>{
        return (
                    <View style={styles.listItem} key={value}>
                        <Text>#{index}</Text>
                        <Text>{value}</Text>
                    </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.head}>
                Opponent's Guess
            </Text>
            <NumberContainer style={styles.numberCont}>{currentGuess}</NumberContainer>
            <Card style={styles.buttonCont}>
                {/* <Button title='LOWER' onPress={nextGuessHandler.bind(this,'lower')}/> */}
                <CustomButton style={styles.button} action={nextGuessHandler.bind(this,'lower')}><Ionicons name="md-remove" size={24} color="white" /></CustomButton>
                {/* <Button title='GREATER' onPress={nextGuessHandler.bind(this,'greater')}/> */}
                <CustomButton style={styles.button} action={nextGuessHandler.bind(this,'greater')}><Ionicons name="md-add" size={24} color="white" /></CustomButton>
            </Card>

        <View style={styles.listCont}>
            <ScrollView contentContainerStyle={styles.list}>
                {
                    guessList.map((eachEle,index)=>listItem(eachEle,guessList.length-index))
                }
            </ScrollView>
            </View>
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
        justifyContent:'space-between',
        marginTop:20,
        width:320,
        maxWidth:'80%',
        padding:30,
        marginVertical:22
    },
    numberCont:{
        marginTop: 18,
        marginBottom: 11
    },
    head:{
        fontFamily:'open-sans-bold',
        fontSize:22

    },
    button:{
        borderRadius:50,
        
    },
    list:{
        justifyContent:'flex-end',
        flexGrow:1
    },
    listItem:{
        flexDirection:'row',
        height:40,
        borderColor:'grey',
        borderWidth:1,
        padding:6,
        alignItems:'center',
        justifyContent:'space-around',
        marginVertical:5,
        borderRadius:8

    },
    listCont:{
        width:'80%',
        flex:1,

    }



})

export default GameScreen