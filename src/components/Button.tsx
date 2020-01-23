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
 * Very nice if if if function to set the right type of energy
 * Not very proud, buy hey, it works 🤷‍♂️
 * @param text
 * @param tipo
 * @param checked
 */
function calculateTipo(text : string, tipo: string, checked: boolean): string {
   if(!checked){
       if(tipo === "any"){
           return text === "Electricidad" ? "gas" : "electricidad";
       }
       if(tipo === "electricidad"){
           return text === "Electricidad" ? "none" : "gas";
       }
       if(tipo === "gas"){
           return text === "Electricidad" ? "gas" : "none";
       }
   } else {
       if(tipo === "none"){
           return text === "Electricidad" ? "electricidad" : "gas";
       }
       if(tipo === "electricidad"){
           return text === "Gas" ? "any" : "electricidad";
       }
       if(tipo === "gas"){
           return text === "Electricidad" ? "any" : "gas";
       }
   }
   return "any";
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
        switch (type) {
            case 'tipo':
                dispatch({
                    type: "changeCCUPS",
                    changeCCUPS: {...ccups, tipo : calculateTipo(text, ccups.tipo, !checked) }
                });
                break;
            case 'distribuidora':
                break;
            case 'otros':
                break;
        }
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