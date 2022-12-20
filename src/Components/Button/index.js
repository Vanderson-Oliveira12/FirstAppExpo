import {
    ButtonDefault,
    ButtonTransparent,
    TextButtonTransparent,
    TextButton,

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