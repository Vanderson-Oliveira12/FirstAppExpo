import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Text = styled.Text`
    font-size: ${({ size }) => size ? RFPercentage(size) : RFPercentage(2)};
    color: ${({ color }) => color ? color : "#333"};
    opacity: ${({ opacity }) => opacity || 1};
    font-family: ${({ weight }) => weight ? `exo_${weight}` : 'exo_400'} ;

`