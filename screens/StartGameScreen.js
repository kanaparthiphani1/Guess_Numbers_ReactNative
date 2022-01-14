import React ,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,Button,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import colors from '../constants/colors'


const StartGameScreen = props => {

    const [enteredValue,setEnteredValue] = useState('')
    const [confirmed,setConfirmed] =useState(false)
    const [selectedNumber,setSelectedNumber] = useState()

    const numberInputHandler = inputText => {setEnteredValue(inputText.replace(/[^0-9]/g,''))};

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () =>{
        const chosenNum = parseInt(enteredValue)
        if (isNaN(chosenNum) || chosenNum<=0 || chosenNum>99){
            Alert.alert('Invalid number','Number has to be between 0 and 99',[{text:'Okay',onPress:resetInputHandler}])
            return 
        }
        setConfirmed(true)
        setSelectedNumber(chosenNum)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let enteredText;
    if(confirmed){
        enteredText = (<Card style={styles.selectedCard}>
                <Text style={styles.selectedText}>Selected number</Text>
                <View>
                    <NumberContainer>{selectedNumber}</NumberContainer>
                </View>
                <Button title='Start'/>
            </Card>)
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.heading}>Start a New Game!</Text>
            <Card>
                <Text style={styles.subHead}>Select a Number</Text>
                <Input 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize="none" 
                    keyboardType="number-pad" 
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value= {enteredValue}
                    />
                <View style={styles.buttonCont}>
                    <View style={styles.button}><Button color="#7D1935" title='Reset' onPress={resetInputHandler} /></View>
                    <View style={styles.button}><Button title='Confirm' color={colors.primary} onPress={confirmInputHandler}/></View>
                </View>
            </Card>
            {enteredText}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems:'center'
    },

    heading:{
        fontSize: 19,
        fontWeight: '700',
        paddingTop:8,
        paddingBottom:8,
        marginBottom: 20
    },

    inputCont:{
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
    },

    buttonCont : {
        width: 230,
        flexDirection:'row',
        paddingTop:8,
        paddingBottom:8,
        justifyContent:'space-between',
        alignItems:'center',
        
    },

    input:{
        textAlign: 'center'
    },

    button:{
        width:100

    },
    selectedText:{
        marginTop: 20,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: '600'
    },

    selectedCard:{
        width: '50%',
        marginTop:20,
        padding:10,
        paddingTop:5
    }


})

export default StartGameScreen