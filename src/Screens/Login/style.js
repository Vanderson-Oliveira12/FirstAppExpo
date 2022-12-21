import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const ContainerTexts = styled.View`
    align-items: center;
    max-width: 300px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_DARK};
    font-size: ${RFPercentage(3)};
    font-weight: bold;
    margin-bottom: 8px;
`

export const Text = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
    text-align: center;
    font-size: ${RFPercentage(2)};
    line-height: 24px;
`

export const ContainerButtons = styled.View`
    width: 80%;
    align-items: center;
`

