import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const ContainerInputs = styled.View`
    width: 80%;
`

export const InputField = styled.View`
    width: 100%;
    margin-bottom: 20px;
`



export const ContainerButtons = styled.View`
    align-items: center;
    width: 100%;
    max-width: 250px;
`