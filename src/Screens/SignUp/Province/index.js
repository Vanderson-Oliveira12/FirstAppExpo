import { SelectItems } from "../../../Components/Select";
import { Button } from "../../../Components/Button";

import { Container, Title, TitleSelect, SelectProvince, ContentSelect, Content, ContainerButtons } from "./style";

const dataProvince = [
    { value: "Central" },
    { value: "Oriental" },
    { value: "Central norte" },
    { value: "Noroeste" },
    { value: "Ocidental" },
]

export default function Province() {
    return (
        <Container
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        >
            <Content>
                <Title>
                    What's your province?
                </Title>
                <ContentSelect>
                    <TitleSelect>
                        Provinces of Sri Lanka
                    </TitleSelect>
                    <SelectProvince>
                        <SelectItems data={dataProvince} />
                    </SelectProvince>
                </ContentSelect>
            </Content>
            <ContainerButtons>
                <Button content="Sign Up" />
                <Button transparent={true} content="Skip" />
            </ContainerButtons>
        </Container>
    )
}