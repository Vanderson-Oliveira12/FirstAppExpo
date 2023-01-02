import { StyleSheet } from "react-native";

import Person from '../../Assets/svg/TESTE.svg';
import { Text } from "../Text";

import {
    Container,
    ContentText,
    Content,
    ImageBox
} from "./style";

export default function Header() {
    return (
        <Container>
            <Content>
                <ContentText>
                    <Text weight="600" size={3} color="#364356" >
                        Good evening!
                    </Text>
                    <Text weight="600" size={2.2} color="#636D77">
                        Hardline Scott
                    </Text>
                </ContentText>
                <ImageBox>
                    <Person />
                </ImageBox>
            </Content>
        </Container>
    )
}




