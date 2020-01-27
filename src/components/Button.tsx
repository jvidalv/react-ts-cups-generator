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
const calculateOptions = (text: string, values: Array<string>) => {
    const index = values.findIndex((value: string) => value === text);
    if (index !== -1) {
        values.splice(index, 1)
    } else {
        values.push(text)
    }
    return values;
};
/**
 * Checks if option is on or off
 * @param text
 * @param values
 */
const isChecked = (text: string, values: Array<string>) => {
    return values.findIndex((value: string) => value === text) !== -1;
};


/**
 * @param text
 * @param background
 * @param color
 * @param type
 * @constructor
 */
const Button: React.FC<ButtonProps> = ({text, background, color, type}) => {
    const [{ccups}, dispatch] = useGlobals();
    const [checked, setChecked] = React.useState(isChecked(text, ccups[type]));
    const changeChecked = () => {
        ccups[type] = calculateOptions(text, ccups[type]);
        dispatch({
            type: "changeCCUPS",
            changeCCUPS: {...ccups}
        });
    };

    React.useEffect(() => {
        setChecked(isChecked(text, ccups[type]));
    }, [ccups, ccups.tipo.length, ccups.distribuidora.length, ccups.otros.length]);

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