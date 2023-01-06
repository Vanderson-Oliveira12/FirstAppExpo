import {
    Container,
    InputDefault,
    Password,
    InputAreaPassword,
} from "./style";

import { useState } from "react";
import { Image, StyleSheet } from "react-native";

import { Text } from "../../Components/Text";
import { TouchableOpacity } from "react-native";

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

    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    function handlePasswordVisible() {
        setIsPasswordVisible(prevState => prevState === true ? false : true)
    }

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
                <Password secureTextEntry={isPasswordVisible} placeholder={placeholder} />
                <TouchableOpacity style={styles.password} onPress={handlePasswordVisible}>
                    <Image source={require('../../Assets/img/eye.png')} />
                </TouchableOpacity>
            </InputAreaPassword>
        </Container>
    )
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 11
    },
    password: {
        backgroundColor: 'red',
        height: 55,
        width: "10%",
        alignItems: 'center',
        justifyContent: 'center'
    }
})