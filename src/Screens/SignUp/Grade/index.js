
import {
    Container,
    Title,
    Content,
    ContainerButtons
} from "./style";

import { ButtonsSkip, Button } from "../../../Components/Button";
import Select, { SelectItem } from "../../../Components/Select";

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
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                </Select>
                <Select
                    grade="Grade  6 - 9"
                >
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                </Select>
                <Select
                    grade="Grade  10 - 11"
                >
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                </Select>
                <Select
                    grade="Grade  12 - 13"
                >
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                    <SelectItem value="Item Teste" />
                </Select>
            </Content>
            <ContainerButtons>
                <Button content="Sign Up" />
                <Button transparent={true} content="Skip" />
            </ContainerButtons>
        </Container>
    );
}

