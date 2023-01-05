import {
    Container,
    InputDefault,
    Password,
    InputAreaPassword,
} from "./style";

import { Image, StyleSheet } from "react-native";

import { Text } from "../../Components/Text";

export function InputText({ label, placeholder }) {
    return (
        <Container>
            <Text
                color="#636D77"
                weight="500"
                style={styles.label}
            >
                {label}
            </Text>
            <InputDefault placeholder={placeholder} />
        </ Container>
    )
}

export function InputPassword({ label, placeholder }) {
    return (
        <Container>
            <Text
                color="#636D77"
                weight="500"
                style={styles.label}
            >
                {label}
            </Text>
            <InputAreaPassword>
                <Password secureTextEntry={true} placeholder={placeholder} />
                <Image source={require('../../Assets/img/eye.png')} />
            </InputAreaPassword>
        </Container>
    )
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 11
    }
})