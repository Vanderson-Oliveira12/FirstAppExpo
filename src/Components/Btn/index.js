import { ButtonStyled } from "./style";

export function Button({ children, color, style }) {
    return (
        <ButtonStyled
            style={style}
            activeOpacity={0.9}
            color={color}
        >
            {children}
        </ButtonStyled>
    )
}