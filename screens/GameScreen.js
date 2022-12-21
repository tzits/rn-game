import { View, StyleSheet, Text, FlatList } from "react-native"
import { useState, useEffect } from "react"
import Title from "../components/ui/Title"
import NumbersContainer from "../components/game/NumberContainer"
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import DoubleButtons from "../components/ui/DoubleButton";
import GuessLogItem from "../components/game/GuessLogItem";
import { Ionicons } from '@expo/vector-icons'

let minBoundary = 1
let maxBoundary = 100

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum
    }
}

function GameScreen ({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([])

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver(guessRounds.length)
        }
    },[currentGuess, userNumber, onGameOver])

    useEffect(() => {
      minBoundary = 1,
      maxBoundary = 100  
    },[])

    function nextGuessHandler(direction) {
        if (direction === 'lower' && currentGuess < userNumber || direction === 'higher' && currentGuess > userNumber) {
            alert('Stop Lying')
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(minBoundary,maxBoundary, currentGuess)
        setGuessRounds(prevGuessRounds => [newRndNumber,...prevGuessRounds])
        setCurrentGuess(newRndNumber)


    }

    const guessRoundsListLength = guessRounds.length

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumbersContainer>{currentGuess}</NumbersContainer>
            <Card>
                <InstructionText>Higher or Lower?</InstructionText>
                <DoubleButtons 
                    onPress1={nextGuessHandler.bind(this,'higher')}
                    onPress2={nextGuessHandler.bind(this,'lower')}
                    text2=<Ionicons name='md-remove' size={24} />
                    text1=<Ionicons name='md-add' size={24} />
                />
            </Card>
            <View style={styles.flatListContainer}>
                <FlatList 
                    data={guessRounds} 
                    renderItem={(itemData) => ( 
                        <GuessLogItem 
                            roundNumber={guessRoundsListLength - itemData.index} 
                            guess={itemData.item} 
                        /> 
                    )}
                    keyExtractor={(item) => item} 
                />
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1
    },
    flatListContainer: {
        flex: 1,
        padding: 16
    }
})