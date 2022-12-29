import { Text } from "react-native";
import { useState } from "react";
import {
    Modal,
    ModalButton,
    ModalContent,
    ModalItem
} from './style';

export default function Select({ children }) {

    const [modalActive, setModalActive] = useState(false);

    function hasModalActive() {
        setModalActive(modalActive == false ? true : false)
    }

    return (
        <Modal>
            <ModalButton
                onPress={() => hasModalActive()}
                activeOpacity={1}
            >
                <Text>
                    Grade 1 - 10
                </Text>
            </ModalButton>
            <ModalContent style={
                modalActive == false ? {
                    height: 0,
                    display: "none",
                }
                    :
                    {
                        height: 'auto',
                        display: "flex"
                    }
            }>
                {
                    children
                }
            </ModalContent>
        </Modal>
    )
}

export function SelectItem({ value }) {
    return (
        <ModalItem>
            <Text>
                {value}
            </Text>
        </ModalItem>
    )
}