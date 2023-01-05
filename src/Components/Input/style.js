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
    box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.1);
    elevation: 5;
`

export const InputAreaPassword = styled.View`
    background-color: #FFF;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`

export const Password = styled(InputDefault)`
    background-color: transparent;
    padding: 0;
    width: 90%;
`

