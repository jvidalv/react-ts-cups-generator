import React from "react";
import {ToolStyled} from "./ToolStyled";

interface ToolProps {
    icon: string,
    text: string,
    background: string,
}

const Tool: React.FC<ToolProps> = ({icon, text, background}) => {
    const [hover, setHover] = React.useState(false);

    return (
        <ToolStyled className={hover ? "hovered" : "non-hovered"} onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)} background={background}>
            {hover ? text : icon}
        </ToolStyled>
    );
};

export default Tool;