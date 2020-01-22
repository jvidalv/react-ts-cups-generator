import React from "react";
import {ToolStyled} from "./ToolStyled";

interface ToolProps {
    text: string,
    background: string,
}

const Tool: React.FC<ToolProps> = ({text, background}) => {

    return (
        <ToolStyled background={background}>
            {text}
        </ToolStyled>
    );
};

export default Tool;