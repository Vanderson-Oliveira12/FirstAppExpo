import styled from "styled-components/native";

export const ButtonStyled = styled.TouchableOpacity`
    height: 61px;
    width: 267px;
    border-radius: 12px;
    background-color: ${({ color }) => color ? color : "transparent"};
    text-align: center;
    justify-content: center;
    align-items: center;
`