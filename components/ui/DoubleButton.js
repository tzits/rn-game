import { StyleSheet, View } from "react-native"
import PrimaryButton from "./PrimaryButton"

function DoubleButtons({  onPress1, onPress2, text1, text2}) {
    return (
    <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onPress1}>{text1}</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onPress2}>{text2}</PrimaryButton>
        </View>
    </View>
    )
}

export default DoubleButtons

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
})