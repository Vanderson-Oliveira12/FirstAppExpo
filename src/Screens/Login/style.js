import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const TextContainer = styled.View`
    align-items: center;
    max-width: 300px;
`

export const ButtonContainer = styled.View`
    width: 80%;
    align-items: center;
`

