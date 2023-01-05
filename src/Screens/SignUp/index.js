import {
    Container,
    InputContainer,
    ButtonContainer
} from "./style";


import { StyleSheet } from "react-native";
import { Text } from "../../Components/Text";
import { InputText, InputPassword } from "../../Components/Input";
import Hero from '../../Assets/svg/hero-signUp.svg'
import { Button } from "../../Components/Btn";


export default function SignUp() {
    return (
        <Container>
            <Hero />
            <InputContainer>
                <InputText
                    label="Nome"
                    placeholder="Seu nome"
                />
                <InputText
                    label="Email"
                    placeholder="Seu melhor E-mail..."
                />
                <InputPassword
                    label="Senha"
                    placeholder="******"
                />
            </InputContainer>
            <ButtonContainer>
                <Button color="#5667FD">
                    <Text color="#FFF" weight="600">
                        Sign up
                    </Text>
                </Button>
                <Button style={styles.signIn}>
                    <Text color="#636D77" style={{ marginRight: 8 }}>
                        Já possui uma conta?
                    </Text>
                    <Text weight="400" color="#5667FD">
                        Sign in
                    </Text>
                </Button>
            </ButtonContainer>
        </Container>
    )
}

const styles = StyleSheet.create({
    signIn: {
        marginTop: 8,
        flexDirection: "row"
    },
})