import {
    ButtonDefault,
    ButtonTransparent,
    TextButtonTransparent,
    TextButton,
    ButtonUpContainer,
    TextUp,
    TextSign,
    ButtonSignUp

} from "./style";

export function Button({ transparent = false, content }) {
    return (
        transparent === false ? (
            <ButtonDefault activeOpacity={.9}>
                <TextButton>
                    {content}
                </TextButton>
            </ButtonDefault>
        )
            :
            (
                <ButtonTransparent activeOpacity={.9}>
                    <TextButtonTransparent>
                        {content}
                    </TextButtonTransparent>
                </ButtonTransparent>
            )
    )
}

export function ButtonSign({description, textButton}) {
    return (
        <ButtonUpContainer>
            <TextUp>
                {description}
            </TextUp>
            <ButtonSignUp activeOpacity={0.9}>
                <TextSign>
                    { textButton }
                </TextSign>
            </ButtonSignUp>
        </ButtonUpContainer>
    )
}