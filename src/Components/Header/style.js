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

export const ImageBox = styled.View`
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;
    border-radius: 12px;
    background-color: #F4F5F9;
    border: 4px solid #fff;
`

export const SearchContainer = styled.View`
    margin-top: 20px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
`

export const Search = styled.View`
    position: relative;
    flex-direction: row;
    flex: 1;
    margin-right: 26px;
    border-radius: 12px;
    background-color: red;
`

export const SearchInput = styled.TextInput`
    flex: 1;
    padding: 0 20px;
`

export const SearchButton = styled.TouchableOpacity`
    padding-top: 2px;
`

export const FilterButton = styled.TouchableOpacity`
`