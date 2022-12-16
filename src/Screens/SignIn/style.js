import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Button, TextButton } from "../../Components/Button/style";


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

export const ContainerButtons = styled.View`
    align-items: center;
    width: 100%;
    max-width: 250px;
`

export const ButtonSignIn = styled(Button)`
    
`

export const TextButtonIn = styled(TextButton)`
    color: #FFF;
`

export const ButtonSignUp = styled(Button)`
    background-color: transparent;
    margin-top: 14px;
    flex-direction: row;
    justify-content: center;
`

export const TextButtonUp = styled(TextButton)`
    color: ${({ theme }) => theme.COLORS.VIOLET_COLOR};
    margin-left: 8px;
`



