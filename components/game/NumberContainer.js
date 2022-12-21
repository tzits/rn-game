import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.plum3,
        borderRadius: 8,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.plum3,
        fontSize: 36,
        fontFamily: 'open-sans-bold'
    }
})