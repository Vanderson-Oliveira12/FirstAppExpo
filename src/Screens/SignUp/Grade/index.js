
import {
    Container,
    Title,
    Content,
    ContainerButtons
} from "./style";

import { Button } from "../../../Components/Button";
import Select, { SelectItems } from "../../../Components/Select";

import { art, cience, math, regua } from "../../../Assets/img/image";


const dataRadio = [
    { value: "Arts", image: art },
    { value: "Science", image: cience },
    { value: "Maths", image: regua },
    { value: "Commerce", image: math }
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
                    <SelectItems data={dataRadio} />
                </Select>
                <Select
                    grade="Grade  10 - 11"
                >
                    <SelectItems data={dataRadio} />

                </Select>
                <Select
                    grade="Grade  12 - 13"
                >
                    <SelectItems data={dataRadio} />
                </Select>
            </Content>
            <ContainerButtons>
                <Button content="Sign Up" />
                <Button transparent={true} content="Skip" />
            </ContainerButtons>
        </Container>
    );
}

