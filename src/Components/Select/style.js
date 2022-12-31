import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Title = styled.Text`
    font-size: ${RFPercentage(2)};
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
    font-weight: 600;
`

export const Modal = styled.View`
    margin-top: 16px;
`

export const ModalButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.SELECT_COLOR};
    width: 100%;
    height: 55px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding:  0 17px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    height: 55px;
    width: 150px;
    padding: 0 8px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 8px;
    margin: 6px;
`