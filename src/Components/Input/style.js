import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    margin-top: 20px;
`

export const InputDefault = styled.TextInput`
    background-color: #FFF;
    font-size: ${RFPercentage(1.8)};
    border-radius: 8px;
    height: 55px;
    padding: 16px;
`

export const InputAreaPassword = styled.View`
    background-color: #FFF;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`

export const InputPassword = styled(InputDefault)`
    background-color: transparent;
    padding: 0;
    width: 90%;
`

export const Label = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
    font-size: ${RFPercentage(2.6)};
    margin-bottom: 11px;
`

