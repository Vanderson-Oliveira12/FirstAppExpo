import { Image, StyleSheet } from "react-native";
import {
    Container,
    ContainerInputs,
    InputField,
    Input,
    Label,
    ButtonSignIn,
    TextButton
} from "./style";

export default function SignIn() {
    return (
        <Container>
            <Image resizeMode="contain" source={require("../../Assets/img/SignIn.png")} />
            <ContainerInputs>
                <InputField>
                    <Label>
                        Email address
                    </Label>
                    <Input style={styles.shadow} placeholder="name@example.com" />
                </InputField>
                <InputField>
                    <Label>
                        Password
                    </Label>
                    <Input style={styles.shadow} placeholder="*******" />
                </InputField>
            </ContainerInputs>
            <ButtonSignIn>
                <TextButton>
                    Sign In
                </TextButton>
            </ButtonSignIn>
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