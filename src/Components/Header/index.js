import { StyleSheet } from "react-native";

import Person from '../../Assets/svg/TESTE.svg';

import {
    Container,
    Title,
    TitleName,
    Content,
    ContentText,
    ImageBox
} from "./style";

export default function Header() {
    return (
        <Container>
            <Content>
                <ContentText>
                    <Title>
                        Good evening!
                    </Title>
                    <TitleName>
                        Hardline Scott
                    </TitleName>
                </ContentText>
                <ImageBox>
                    <Person />
                </ImageBox>
            </Content>
        </Container>
    )
}




