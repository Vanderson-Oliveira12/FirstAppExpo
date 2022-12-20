import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const ButtonDefault = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DEFAULT};
    border-radius: 12px;
    padding: 18px;
    align-items: center;
    width: 100%;
    max-width: 250px;
`

export const TextButton = styled.Text`
    font-size: ${RFPercentage(1.8)};
    font-weight: 600;
    color: #FFF;
`

export const ButtonTransparent = styled(ButtonDefault)`
    background-color: transparent;
`

export const TextButtonTransparent = styled(TextButton)`
    margin-top: 12px;
    color: ${({ theme }) => theme.COLORS.VIOLET_COLOR};
`