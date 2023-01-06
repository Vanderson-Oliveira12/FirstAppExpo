
import {
    Container,
    Content,
    ContainerButtons
} from "./style";

import { Button } from "../../../Components/Btn";
import Select, { SelectItems } from "../../../Components/Select";

import { art, cience, math, regua } from "../../../Assets/img/image";
import { Text } from "../../../Components/Text";


const dataRadio = [
    { value: "Artes", image: art },
    { value: "Ciências", image: cience },
    { value: "Geometria", image: regua },
    { value: "Matemática", image: math }
]

export default function Grade() {

    return (
        <Container
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        >
            <Content>
                <Text
                    color="#364356"
                    weight="600"
                    size={2.5}
                    style={{ marginTop: 16 }}
                >
                    Qual é a sua nota?
                </Text>
                <Select
                    grade="Grau 1 - 5"
                >
                    <SelectItems data={dataRadio} />
                </Select>
                <Select
                    grade="Grau 6 - 9"
                >
                    <SelectItems data={dataRadio} />
                </Select>
                <Select
                    grade="Grau 10 - 11"
                >
                    <SelectItems data={dataRadio} />

                </Select>
                <Select
                    grade="Grau 12 - 13"
                >
                    <SelectItems data={dataRadio} />
                </Select>
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
    );
}

