import { StyleSheet, Text, Image, Pressable } from "react-native";
import { useState } from "react";
import {
    Modal,
    ModalButton,
    ModalContent,
    ModalItem,
    Title
} from './style';

export default function Select({ children, grade }) {

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
                <Title>
                    {grade}
                </Title>
                <Image source={modalActive === false ? require("../../Assets/img/arrow-down.png") : require('../../Assets/img/arrow-up.png')} />
            </ModalButton>
            <ModalContent style={modalActive === false ? styles.modalOff : styles.modalOn}>
                {
                    children
                }
            </ModalContent>
        </Modal>
    )
}

export function SelectItems({ data, onSelect }) {

    const [useOption, setUserOption] = useState(null);

    function handleItemSelect(value) {
        console.log(value)
        setUserOption(value)
    }

    return (
        data.map(item => (
            <Pressable onPress={() => handleItemSelect(item.value)}>
                <ModalItem style={item.value === useOption ? styles.selected : null}>
                    <Text style={item.value === useOption ? styles.itemTitleOn : styles.itemTitleOff}>
                        {item.value}
                    </Text>
                    <Image style={styles.image} source={require('../../Assets/img/modal.png')} />
                </ModalItem>
            </Pressable>
        ))
    )
}

const styles = StyleSheet.create({
    modalOn: {
        display: 'flex',
    },
    modalOff: {
        display: 'none',
    },
    selected: {
        backgroundColor: "#5667FD",
    },
    itemTitleOff: {
        color: "#364356",
        marginRight: 12,
    },
    itemTitleOn: {
        marginRight: 12,
        color: "#FFF"
    },
})