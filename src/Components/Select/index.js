import { StyleSheet, Text, Image } from "react-native";
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
                    { grade }
                </Title>
                <Image source={modalActive === false ? require("../../Assets/img/arrow-down.png") : require('../../Assets/img/arrow-up.png')}/>
            </ModalButton>
            <ModalContent style={modalActive === false ? styles.modalOff : styles.modalOn}>
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
            <Text style={styles.itemTitle}>
                {value}
            </Text>
            <Image style={styles.image} source={require('../../Assets/img/modal.png')} />
        </ModalItem>
    )
}

const styles = StyleSheet.create({
    modalOn: {
        height: 'auto',
        display: 'flex',
    },
    modalOff: {
        height: 0,
        display: 'none',
    },
    itemTitle: { 
        marginRight: 12,
    },
})