import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function InstructionText ({children}) {
    return (
        <Text style={styles.instructionText}>{children}</Text>
    )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.yellow,
        fontSize: 24,
        paddingBottom: 4,
        fontFamily: 'open-sans'
    }
})
