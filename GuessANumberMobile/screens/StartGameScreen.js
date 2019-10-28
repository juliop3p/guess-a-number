import React, {useState} from 'react'
import {View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import Colors from '../constants/colors'
import NumberContainer from '../components/NumberContainer'

export default function StartGameScreen(props) {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()
    
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return
        }

        setConfirmed(true)
        setEnteredValue('')
        setSelectedNumber(chosenNumber)
        Keyboard.dismiss()
    }

    let confirmedOutput

    if(confirmed) {
        confirmedOutput = (
        <Card style={styles.choosedNumber}>
            <Text>You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer> 
            <Button 
                title="START GAME"
                onPress={() => props.onStartGame(selectedNumber)}
            />
        </Card>)
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.btn}><Button title="Reset" color={Colors.accent} onPress={resetInputHandler}/></View>
                        <View style={styles.btn}><Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler}/></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,

    },
    btn: {
        flex: 1,
        marginHorizontal: 10,
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    choosedNumber: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
