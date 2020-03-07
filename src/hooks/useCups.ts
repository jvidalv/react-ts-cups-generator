import React from "react";
import {useGlobals} from "../contexts/global";
import {CONTROL_DIGITS, FIRST_DIGITS} from "../constants/cups";

/**
 * Used variables
 */
let ccupsi: any;
let dist = "";
let tipo = "";
let cups = "ES0318363477145938GE";

/**
 * Main of cups generation flow, takes care of call al methods and sets all the props
 * @param ccups
 * @param setCups
 * @param setTipo
 * @param setDistribuidora
 */
function main(ccups: object, setCups: any, setTipo: any, setDistribuidora: any) {
    ccupsi = ccups;

    getFirstDigits();
    cups && getMiddleDigits();
    cups && getEndChars();

    setDistribuidora(cups ? dist : "🙄");
    setTipo(cups ? tipo : "👺");

    cups = cups ? cups : "💥";

    setCups(cups)
}

/**
 * Sets first 6 digits of a CUPS based on options selected
 * It is a recursive and amazing function thought by the brightest brain of my 600 hundred population village
 */
const getFirstDigits = (i: number = 0): string | undefined => {
    tipo = ccupsi.tipo[ccupsi.tipo.length > 1 ? Math.round(Math.random()) : 0];
    if (tipo) {
        let t_dist = Object.keys(FIRST_DIGITS[tipo]).filter((key: string) => ccupsi.distribuidora.includes(key));
        if (!t_dist.length && ccupsi.distribuidora.length && i < 5) {
            i++;
            return getFirstDigits(i);
        }
        dist = t_dist[t_dist.length > 1 ? Math.floor(Math.random() * t_dist.length) : 0];
    }

    cups = tipo && dist ? FIRST_DIGITS[tipo][dist][Math.floor(Math.random() * FIRST_DIGITS[tipo][dist].length)] : ""
};

/**
 * Sets middle digits, 12 length
 */
const getMiddleDigits = () => {
    const max = 999999999999, min = 100000000000;

    cups = cups + (Math.floor(Math.random() * (max - min)) + min).toString();
};

/**
 * Calculates control chars
 */
const getEndChars = () => {
    const c_cups = cups.substr(2);
    let resto = parseInt(c_cups) % 529;
    let c = resto % 23;
    let r = Math.floor(resto / 23);
    let result = [c, r].sort();

    cups = cups + CONTROL_DIGITS[result[0]] + CONTROL_DIGITS[result[1]];
};

/**
 * Main hook that calculates and returns a random cups based on parameters from global context
 * It also returns the random type and distribuidora choosen during the calculations
 */
export const useCups = (): any => {
    const [{ccups, updated}] = useGlobals();
    const [cups, setCups] = React.useState("");
    const [distribuidora, setDistribuidora] = React.useState("");
    const [tipo, setTipo] = React.useState("");

    React.useEffect(() => {
        main(ccups, setCups, setTipo, setDistribuidora);
    }, [ccups, ccups.tipo.length, ccups.distribuidora.length, ccups.otros.length, updated]);

    return {cups, distribuidora, tipo};
};
