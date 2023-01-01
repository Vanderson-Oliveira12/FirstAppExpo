import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding-bottom: 12px;
`

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

export const ContentText = styled.View`
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_DARK};
    font-size: ${RFPercentage(2.8)};
    font-weight: 600;
`

export const TitleName = styled.Text`
    font-size: ${RFPercentage(2.2)};
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
    font-weight: 600;
`

export const ImageBox = styled.View`
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;
    border-radius: 12px;
    background-color: #F4F5F9;
    border: 4px solid #fff;
`