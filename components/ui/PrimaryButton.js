import { View, Text, Pressable, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
             style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer]: styles.buttonInnerContainer}
             android_ripple={{ color: Colors.plum2}}
             onPress={onPress}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )

}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: Colors.plum2,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'

    },
    buttonText: {
        color: Colors.yellow,
        textAlign: 'center',
        fontSize: 16
    },
    pressed: {
        opacity: 0.75
    }
})