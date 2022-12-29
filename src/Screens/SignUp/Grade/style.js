import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
    width: 100%;
    padding: 0 16px 16px 16px;
    height: 100%;
`

export const ContainerButtons = styled.View`
    padding-top: 36px;
    width: 80%;
    align-items: center;
    margin: 0 auto;
`

export const Content = styled.View`
    flex: 1;
`

export const Title = styled.Text`
    font-size: ${RFPercentage(2.6)};
    color: ${({ theme }) => theme.COLORS.TEXT_DARK};
    padding: 22px 0;
    font-weight: 600;
`

