import {
    Container,
    Title,
    Text,
    ContainerTexts,
    ContainerButtons,
    Button,
    ButtonSkip,
    TextButton,
} from "./style";
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
                <Button activeOpacity={.9}>
                    <TextButton color="#FFFFFF">
                        Sign up
                    </TextButton>
                </Button>
                <ButtonSkip activeOpacity={.9}>
                    <TextButton color="#5667FD">
                        Skip
                    </TextButton>
                </ButtonSkip>
            </ContainerButtons>
        </Container>
    )
}