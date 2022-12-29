
import {
    Container,
    Title,
} from "./style";

import Select, { SelectItem } from "../../../Components/Select";

export default function Grade() {

    return (
        <Container>
            <Title>
                What's your grade?
            </Title>
            <Select>
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
            </Select>
            <Select>
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
            </Select>
            <Select>
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
                <SelectItem value="Item Teste"  />
            </Select>
        </Container>
    );
}

