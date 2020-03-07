import React from "react";
import {ToolStyled} from "./ToolStyled";
import {useGlobals} from "../contexts/global";

interface ToolProps {
    icon: string,
    text: string,
    background: string,
}

/**
 * @param icon
 * @param text
 * @param background
 * @constructor
 */
const Tool: React.FC<ToolProps> = ({icon, text, background}) => {
    const [hover, setHover] = React.useState(false);
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useGlobals();
    const regenerateCups = () => {
        dispatch({
            type: "regenerate",
            regenerate:  Date.now()
        });
    };

    return (
        <ToolStyled className={hover ? "hovered" : "non-hovered"} onMouseEnter={() => setHover(true)}
                    onClick={() => regenerateCups()} onMouseLeave={() => setHover(false)} background={background}>
            {hover ? text : icon}
        </ToolStyled>
    );
};

export default Tool;