import {
    Container,
    Title,
    Text,
    ContainerTexts,
    ContainerButtons,
    ButtonUp,
    ButtonSkip,
    TextBtn,
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
                <ButtonUp activeOpacity={.9}>
                    <TextBtn color="#FFFFFF">
                        Sign up
                    </TextBtn>
                </ButtonUp>
                <ButtonSkip activeOpacity={.9}>
                    <TextBtn color="#5667FD">
                        Skip
                    </TextBtn>
                </ButtonSkip>
            </ContainerButtons>
        </Container>
    )
}