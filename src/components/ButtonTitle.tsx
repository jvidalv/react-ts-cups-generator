import React from "react";
import {ButtonTitleStyled} from "./ButtonTitleStyled";

interface ButtonTitleProps {
    text : string,
    icon : string,
}

const ButtonTitle: React.FC<ButtonTitleProps> = ({text, icon}) => {
    return (
        <ButtonTitleStyled>
            <span>{icon}</span>
            {text}
        </ButtonTitleStyled>
    );
};

export default ButtonTitle;