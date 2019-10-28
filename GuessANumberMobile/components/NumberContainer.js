import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

import Color from '../constants/colors'


const NumberContainer = props => (
    <View style={styles.numberOutput}>
        <Text style={styles.number}>{props.children}</Text>
    </View>
    )

const styles = StyleSheet.create({
    numberOutput: {
        alignItems: 'center',
    },
    number: {
        borderWidth: 2,
        borderColor: Color.accent,
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        color: Color.accent,
        fontSize: 22,
        textAlign: 'center'
    },
})

export default NumberContainer