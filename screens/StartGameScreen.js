import { useState } from "react"
import { TextInput, View, StyleSheet } from "react-native"
import Colors from "../constants/colors"

import Title from "../components/ui/Title"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import DoubleButtons from "../components/ui/DoubleButton"

function StartGameScreen ({ onPickNumber }) {
    const [enteredNumber, setEnteredNunber] = useState('')

    function numberInputHandler (enteredNumber) {
        setEnteredNunber(enteredNumber);
    }

    function resetInput() {
        setEnteredNunber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            alert('Invalid Entry')
            return
        }
        onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType="number-pad"
                    value={enteredNumber}
                    onChangeText={numberInputHandler} 
                />
                <DoubleButtons 
                    onPress1={resetInput}
                    onPress2={confirmInputHandler}
                    text1='Reset'
                    text2='Confirm'
                />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.yellow,
        borderBottomWidth: 2,
        color: Colors.yellow,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center',
    },
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    }
})

export default StartGameScreen