
import {
    Container,
    Title,
    Content,
    ContainerButtons
} from "./style";

import { Button } from "../../../Components/Button";
import Select, { SelectItems } from "../../../Components/Select";

const dataRadio = [
    { value: "Teste 1" },
    { value: "Teste 2" }
]

const dataRadioTwo = [
    { value: "Teste 3" },
    { value: "Teste 4" }
]

export default function Grade() {

    return (
        <Container
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        >
            <Content>
                <Title>
                    What's your grade?
                </Title>
                <Select
                    grade="Grade  1 - 5"
                >
                    <SelectItems data={dataRadio} />
                </Select>
                <Select
                    grade="Grade  6 - 9"
                >
                    <SelectItems data={dataRadioTwo} />
                </Select>
                <Select
                    grade="Grade  10 - 11"
                >
                    <SelectItems data={dataRadioTwo} />

                </Select>
                <Select
                    grade="Grade  12 - 13"
                >
                    <SelectItems data={dataRadioTwo} />
                </Select>
            </Content>
            <ContainerButtons>
                <Button content="Sign Up" />
                <Button transparent={true} content="Skip" />
            </ContainerButtons>
        </Container>
    );
}

