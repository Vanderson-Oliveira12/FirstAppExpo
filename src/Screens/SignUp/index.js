import { Image } from "react-native";
import { ContainerInputs, ContainerButtons } from "./style";


import Container from "../../Components/Container";
import { Input } from "../../Components/Input";
import { ButtonSign, Button } from "../../Components/Button";



export default function SignUp() {
    return (
        <Container>
            <Image source={require('../../Assets/img/SignUp.png')} />
            <ContainerInputs>
                <Input
                    label="Nome"
                    placeholder="Seu nome"
                    password={false} />
                <Input
                    label="Email"
                    placeholder="Seu melhor E-mail..."
                    password={false} />
                <Input
                    label="Senha"
                    placeholder="******"
                />
            </ContainerInputs>
            <ContainerButtons>
                <Button content="Sign up" />
                <ButtonSign description="You have account?" textButton="Sign in" />
            </ContainerButtons>
        </Container>
    )
}