import React from "react";
import {ButtonStyled} from "./ButtonStyled";

interface ButtonProps {
    text : string,
    background : string,
    color : string
}

const Button: React.FC<ButtonProps> = ({text, background, color}) => {

    const [checked, setChecked] = React.useState(true);
    const changeChecked = () => {
        setChecked(!checked);
    };

    return (
        <ButtonStyled background={background} color={color} checked={checked} onClick={() => changeChecked()}>
            <div className={checked ? "checked" : " "} />
            <div className="button">
                {text}
            </div>
            <div className={checked ? " " : "checked"} />
        </ButtonStyled>
    );
};

export default Button;