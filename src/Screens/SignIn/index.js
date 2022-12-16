import { Image, StyleSheet, Text } from "react-native";
import {
    Container,
    ContainerInputs,
    InputField,
    Input,
    Label,
    ButtonSignIn,
    ButtonSignUp,
    TextButtonIn,
    TextButtonUp,
    ContainerButtons,
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
            <ContainerButtons>
                <ButtonSignIn activeOpacity={.9}>
                    <TextButtonIn>
                        Sign In
                    </TextButtonIn>
                </ButtonSignIn>
                <ButtonSignUp>
                    <Text>
                        Don’t have account?
                    </Text>
                    <TextButtonUp>
                        Sign Up
                    </TextButtonUp>
                </ButtonSignUp>
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