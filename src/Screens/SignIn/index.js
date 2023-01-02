import { StyleSheet } from "react-native";
import Container from "../../Components/Container";
import {
    ContainerInputs,
    ContainerButtons,
} from "./style";

import { Button, ButtonSign } from "../../Components/Button";
import { Input } from "../../Components/Input";

import Hero from '../../Assets/svg/hero-signIn.svg';

export default function SignIn() {
    return (
        <Container>
            <Hero />
            <ContainerInputs>
                <Input label="Email" placeholder="Seu melhor E-mail..." />
                <Input label="Senha" placeholder="******" />
            </ContainerInputs>
            <ContainerButtons>
                <Button content="Sign in" />
                <ButtonSign description="Don’t have account?" textButton="Sign up" />
            </ContainerButtons>
        </Container>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8.30,
        elevation: 6,

    }
})