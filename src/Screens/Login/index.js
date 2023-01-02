import {
    Title,
    ContainerTexts,
    ContainerButtons,
} from "./style";

import { Text } from "../../Components/Text";

import { Button } from "../../Components/Button";
import Container from "../../Components/Container";

import Hero from '../../Assets/svg/hero-login.svg';
import { StyleSheet } from "react-native";

export default function Login() {
    return (
        <Container>
            <Hero />
            <ContainerTexts>
                <Text weight="600" size={2.6} color="#364356">
                    Let's find the "A" with us
                </Text>
                <Text style={styles.textDescription} weight="500" size={1.8} color="#636D77">
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

const styles = StyleSheet.create({
    textDescription: {
        textAlign: "center",
        marginTop: 16
    }
})