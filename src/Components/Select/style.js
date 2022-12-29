import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Modal = styled.View`
    margin-top: 16px;
`

export const ModalButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.SELECT_COLOR};
    width: 100%;
    height: 55px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    justify-content: center;
    padding-left: 17px;
`

export const ModalContent = styled.View`
    background-color: ${({ theme }) => theme.COLORS.SELECT_COLOR};
    width: 100%;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    justify-content: center;
    padding: 16px 0;
    padding-left: 0;
    flex-wrap: wrap;
    flex-direction: row;
`

export const ModalItem = styled.View`
    background-color: #E6E6E6;
    background-color: red;
    width: 100px;
    height: 55px;
    padding-left: 12px;
    justify-content: center;
    border-radius: 8px;
    margin:6px;
`