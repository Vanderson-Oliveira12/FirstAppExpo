import { SelectContainer } from "./style";
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from "react-native";

export default function Select({ children }) {
    return (
        <SelectContainer>
            <Picker
                style={styles.select}
                mode="dropdown"
            >
                {
                    children
                }
            </Picker>
        </SelectContainer>
    )
}

const styles = StyleSheet.create({
    select: {
        backgroundColor: "transparent",
        color: "#636D77",
    }
})