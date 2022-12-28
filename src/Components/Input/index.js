import {
    Container,
    InputDefault,
    InputPassword,
    InputAreaPassword,
    Label,
} from "./style";

import { Image } from "react-native";

export function Input({ password = true, label, placeholder }) {
    return (
        password === false ? (
            <Container>
                <Label>
                    {label}
                </Label>
                <InputDefault placeholder={placeholder} />
            </Container>
        )
        
            :
        
        (
            <Container>
                <Label>
                    {label}
                </Label>
                <InputAreaPassword>
                    <InputPassword secureTextEntry={true} placeholder={placeholder} />
                    <Image source={require('../../Assets/img/eye.png')} />
                </InputAreaPassword>
            </Container>
        )

    )
}