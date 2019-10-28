import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

import Card from '../components/Card'
import Color from '../constants/colors'

const GameOverScreen = props => {
   
    return (
        <View style={styles.screen}>
            <Card style={styles.outputContainer}>
                <Text style={styles.text}>The Game is Over!</Text>
                <Text style={styles.text}>Number of Rounds: {props.roundsNumber}</Text>
                <Text style={styles.text}>Number was: {props.userNumber}</Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="NEW GAME" 
                        onPress={props.onRestart}
                        color={Color.accent}
                    />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outputContainer: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
        color: '#aaa',
    },
    buttonContainer: {
        marginVertical: 20,
        width: '100%'
    }
})

export default GameOverScreen