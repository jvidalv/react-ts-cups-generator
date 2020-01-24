import React from "react";
import {useGlobals} from "../contexts/global";

const DEFAULT_CUPS = "ES0318363477145938GE";
const FIRST_DIGITS: any = {
    Electricidad: {
        'Endesa': ['ES0023', 'ES0024', 'ES0029', 'ES0288', 'ES0363', 'ES0396'],
        'Iberdrola': ['ES0021'],
        'Naturgy': ['ES0022', 'ES0390', 'ES0397'],
        'E-redes': ['ES0026'],
    },
    Gas: {
        'Naturgy': ['ES0230', 'ES0203', 'ES0218', 'ES0220', 'ES0221', 'ES0222', 'ES0223',
            'ES0224', 'ES0226', 'ES0227'],
        'Redexia': ['ES0208', 'ES0225', 'ES0205', 'ES0206'],
        'Nortegas': ['ES0229', 'ES0201', 'ES0229', 'ES0211'],
        'Madrileña RDG': ['ES0234', 'ES0228'],
    }
};

let ccupsi: any;
let dist = "";
let tipo = "";
let cups = "ES0318363477145938GE";

/**
 * Main of cups generation flow, takes care of call al methods and sets all the props
 * @param ccups
 * @param setCups
 */
function main(ccups: object, setCups: any) {
    ccupsi = ccups;

    getFirstDigits();

    setCups(cups)
}

/**
 * a los monstruos no mirar
 */
function getFirstDigits() {
    tipo = ccupsi.tipo[ccupsi.tipo.length > 1 ? Math.round(Math.random()) : 0];
    let t_dist = Object.keys(FIRST_DIGITS[tipo]).filter((key: string) => ccupsi.distribuidora.includes(key));
    dist = t_dist[t_dist.length > 1 ? Math.floor(Math.random() * t_dist.length) : 0];
    cups = FIRST_DIGITS[tipo][dist][Math.floor(Math.random() * FIRST_DIGITS[tipo][dist].length)];
}

export const useCups = (): string => {
    const [{ccups}] = useGlobals();
    const [cups, setCups] = React.useState("");

    React.useEffect(() => {
        main(ccups, setCups);
    }, [ccups.tipo.length, ccups.distribuidora.length, ccups.otros.length]);

    return cups;
};

export interface indexable {
    [key: string]: any;
}