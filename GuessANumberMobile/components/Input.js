import React from 'react'
import {TextInput, StyleSheet} from 'react-native'


export default function Input(props) {
    return (
        <TextInput 
            {...props}
            style={{...styles.input, ...props.style}}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomWidth: 1,
        borderColor: '#aaa',
        marginVertical: 10,
    }
})