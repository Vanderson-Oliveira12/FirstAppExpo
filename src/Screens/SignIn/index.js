import { Image, StyleSheet } from "react-native";
import {
    Container,
    ContainerInputs,
    ContainerButtons,
} from "./style";

import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";


export default function SignIn() {
    return (
        <Container>
            <Image resizeMode="contain" source={require("../../Assets/img/SignIn.png")} />
            <ContainerInputs>
                <Input label="Email" placeholder="Seu melhor E-mail..." />
                <Input label="Senha" placeholder="******" />
            </ContainerInputs>
            <ContainerButtons>
                <Button content="Sign in" />
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