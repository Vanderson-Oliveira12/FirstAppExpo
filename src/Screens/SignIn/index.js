import { StyleSheet } from "react-native";

import {
    Container,
    InputContainer,
    ButtonContainer,
} from "./style";

import { Text } from "../../Components/Text";
import { Button } from "../../Components/Btn";
import { InputText, InputPassword } from "../../Components/Input";

import Hero from '../../Assets/svg/hero-signIn.svg';

export default function SignIn() {
    return (
        <Container>
            <Hero />
            <InputContainer>
                <InputText label="Email" placeholder="Seu melhor E-mail..." />
                <InputPassword label="Senha" placeholder="******" />
            </InputContainer >
            <ButtonContainer>
                <Button color="#5667FD">
                    <Text color="#FFF" weight="600">
                        Sign in
                    </Text>
                </Button>
                <Button style={styles.signUp}>
                    <Text color="#636D77" style={{ marginRight: 8 }}>
                        Não possui uma conta?
                    </Text>
                    <Text weight="400" color="#5667FD">
                        Sign up
                    </Text>
                </Button>
            </ButtonContainer>
        </Container>
    )
}

const styles = StyleSheet.create({
    signUp: {
        marginTop: 8,
        flexDirection: "row"
    },
})