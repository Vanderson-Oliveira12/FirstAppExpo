import {
    Container,
    TextContainer,
    ButtonContainer,
} from "./style";


import { Button } from "../../Components/Btn";
import { Text } from "../../Components/Text";

import Hero from '../../Assets/svg/hero-login.svg';
import { StyleSheet } from "react-native";

export default function Login() {
    return (
        <Container>
            <Hero />
            <TextContainer>
                <Text weight="600" size={2.6} color="#364356">
                    Let's find the "A" with us
                </Text>
                <Text style={styles.textDescription} weight="500" size={1.8} color="#636D77">
                    Please Sign in to view personalized
                    recommendations
                </Text>
            </TextContainer>
            <ButtonContainer>
                <Button color="#5667FD">
                    <Text weight="600" color="#FFF">
                        Sign up
                    </Text>
                </Button>
                <Button style={{ marginTop: 8 }}>
                    <Text weight="400" color="#5667FD">
                        Skip
                    </Text>
                </Button>
            </ButtonContainer>
        </Container>
    )
}

const styles = StyleSheet.create({
    textDescription: {
        textAlign: "center",
        marginTop: 16,
    }
})