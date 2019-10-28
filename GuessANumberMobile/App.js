import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [GuessRounds, setGuessRounds] = useState(0)

  const startNewGame = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const gameStartHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds)
  }

  let content = <StartGameScreen onStartGame={gameStartHandler}/>

  if(userNumber && GuessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if(GuessRounds > 0) {
    content = <GameOverScreen roundsNumber={GuessRounds} userNumber={userNumber} onRestart={startNewGame}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
