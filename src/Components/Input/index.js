import {
    Container,
    InputDefault,
    InputPassword,
    InputAreaPassword,
    Label,
} from "./style";

import { Image, StyleSheet } from "react-native";

import { Text } from "../../Components/Text";

export function Input({ password = true, label, placeholder }) {
    return (
        password === false ? (
            <Container>
                <Text
                    color="#636D77"
                    weight="500"
                    style={styles.label}
                >
                    {label}
                </Text>
                <InputDefault placeholder={placeholder} />
            </Container>
        )

            :

            (
                <Container>
                    <Text
                        color="#636D77"
                        weight="500"
                        style={styles.label}
                    >
                        {label}
                    </Text>
                    <InputAreaPassword>
                        <InputPassword secureTextEntry={true} placeholder={placeholder} />
                        <Image source={require('../../Assets/img/eye.png')} />
                    </InputAreaPassword>
                </Container>
            )

    )
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 11
    }
})