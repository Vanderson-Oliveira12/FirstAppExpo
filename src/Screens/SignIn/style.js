import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Button, ButtonSkip } from '../Login/style';


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

export const Input = styled.TextInput`
    background-color: #FFF;
    font-size: ${RFPercentage(1.8)};
    border-radius: 8px;
    height: 55px;
    padding: 16px;
`

export const Label = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
    font-size: ${RFPercentage(2.6)};
    margin-bottom: 11px;
`

export const ButtonSignIn = styled(Button)`


`

export const TextButton = styled.Text`
    

`



