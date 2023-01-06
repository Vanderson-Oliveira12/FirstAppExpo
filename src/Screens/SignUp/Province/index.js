import { SelectItems } from "../../../Components/Select";

import { Container, Title, TitleSelect, SelectProvince, ContentSelect, Content, ContainerButtons } from "./style";

import { Text } from "../../../Components/Text";
import { Button } from "../../../Components/Btn";

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
                <Text
                    size="2.5"
                    weight="600"
                    color="#364356"
                    style={{ marginVertical: 22 }}
                >
                    Qual é o seu continente?
                </Text>
                <ContentSelect>
                    <Text
                        weight="600"
                        color="#636D77"
                    >
                        Continente Americano
                    </Text>
                    <SelectProvince>
                        <SelectItems data={dataProvince} />
                    </SelectProvince>
                </ContentSelect>
            </Content>
            <ContainerButtons>
                <Button
                    color="#5667FD"
                >
                    <Text
                        weight="600"
                        color="#FFF"
                    >
                        Próximo
                    </Text>
                </Button>
                <Button style={{ marginTop: 8 }}>
                    <Text
                        color="#5667FD"
                        weight="400"
                    >
                        Pular
                    </Text>
                </Button>
            </ContainerButtons>
        </Container>
    )
}