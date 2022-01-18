import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Header from './components/Header'
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen'
import GameOverScreen from './screens/GameOverScreen'
import * as Fonts from 'expo-font'
import AppLoading from 'expo-app-loading';

const fetchFonts = ()=>{
  return Fonts.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [userChoice,setUserChoice] = useState()
  const [userRounds,setUserRounds] = useState(0)
  const [dataLoaded,setDataLoaded] = useState(false)

  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setDataLoaded(true)} onError={error=>console.log(error)} />
  }

  const setUserNumber = number => {
    setUserChoice(number)
  }

  const setUserRound = number =>{
    setUserRounds(number)
  }

  const newGameHandler = () =>{
    setUserChoice()
    setUserRounds(0)
  }

  let appScreen;

  
  if(userChoice){
    if(userRounds<=0){
      appScreen = <GameScreen userChoice={userChoice} setUserRound={setUserRound}/>
    }else{
      appScreen = <GameOverScreen numberOfRounds={userRounds} userChoice={userChoice} newGameHandler={newGameHandler}/>
    }
  }else{
    appScreen = <StartGameScreen setUserNumber={setUserNumber}/>
  }

  //appScreen  = <GameOverScreen numberOfRounds={1} userChoice={1} newGameHandler={newGameHandler}/>

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {appScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
