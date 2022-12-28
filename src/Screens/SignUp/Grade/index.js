
import {
    Container,
    Title,
    Modal,
    ModalContent,
    ModalItem
} from "./style";

import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { useState } from "react";



export default function Grade() {

    const [modalActive, setModalActive] = useState(false);

    function hasModalActive() {
        console.log(modalActive)
        setModalActive(modalActive == false ? true : false)
    }

    return (
        <Container>
            <Title>
                What's your grade?
            </Title>
            <Modal
                onPress={hasModalActive}
                activeOpacity={1}
            >
                <Text>
                    Grade 1 - 10
                </Text>
            </Modal>
            <ModalContent style={
                modalActive == false ? {
                    backgroundColor: "red"
                }

                    :

                    {
                        backgroundColor: "blue"
                    }

            }>
                <ModalItem>
                    <Text>
                        Item Teste
                    </Text>
                </ModalItem>
                <ModalItem>
                    <Text>
                        Item Teste
                    </Text>
                </ModalItem>
                <ModalItem>
                    <Text>
                        Item Teste
                    </Text>
                </ModalItem>
                <ModalItem>
                    <Text>
                        Item Teste
                    </Text>
                </ModalItem>
                <ModalItem>
                    <Text>
                        Item Teste
                    </Text>
                </ModalItem>
                <ModalItem>
                    <Text>
                        Item Teste
                    </Text>
                </ModalItem>
            </ModalContent>
        </Container>
    );
}

