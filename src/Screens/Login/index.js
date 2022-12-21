import {
    Title,
    Text,
    ContainerTexts,
    ContainerButtons,
} from "./style";

import { Button } from "../../Components/Button";
import Container from "../../Components/Container";

import { Image } from "react-native";


export default function Login() {
    return (
        <Container>
            <Image
                resizeMode="contain"
                accessibilityLabel="Imagem Login"
                source={require(`../../Assets/img/Login.png`)} />
            <ContainerTexts>
                <Title>
                    Let's find the "A" with us
                </Title>
                <Text>
                    Please Sign in to view personalized
                    recommendations
                </Text>
            </ContainerTexts>
            <ContainerButtons>
                <Button content="Sign Up" />
                <Button transparent={true} content="Skip" />
            </ContainerButtons>
        </Container>
    )
}