import React from "react";
import {ButtonStyled} from "./ButtonStyled";
import {useGlobals} from "../contexts/global";

interface ButtonProps {
    text: string,
    background: string,
    color: string,
    type: string,
}

/**
 * In out distribuidoras
 * @param text
 * @param values
 */
function calculateOptions(text: string, values: Array<string>) {
    const index = values.findIndex((value: string) => value === text);
    if (index !== -1) {
        values.splice(index, 1)
    } else {
        values.push(text)
    }
    return values;
}

/**
 * @param text
 * @param background
 * @param color
 * @param type
 * @constructor
 */
const Button: React.FC<ButtonProps> = ({text, background, color, type}) => {
    const [{ccups}, dispatch] = useGlobals();
    const [checked, setChecked] = React.useState(true);
    const changeChecked = () => {
        ccups[type] = calculateOptions(text, ccups[type]);
        dispatch({
            type: "changeCCUPS",
            changeCCUPS: {...ccups}
        });
        setChecked(!checked);
    };

    return (
        <ButtonStyled background={background} color={color} checked={checked} onClick={() => changeChecked()}>
            <div className={checked ? "checked" : " "}/>
            <div className="button">
                {text}
            </div>
            <div className={checked ? " " : "checked"}/>
        </ButtonStyled>
    );
};

export default Button;