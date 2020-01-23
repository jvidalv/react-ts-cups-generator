import React from "react";
import Toggle from "react-toggle";
import {IconTogglerStyled, NavbarStyled} from "./NavbarStyled";
import {useGlobals} from "../contexts/global";

interface IconTogglerProps {
    icon: string;
    left?: boolean;
    right?: boolean;
}

/**
 * @param props
 * @constructor
 */
const IconToggler: React.FC<IconTogglerProps> = (props) => {
    return (
        <IconTogglerStyled left={props.left} right={props.right}>{props.icon}</IconTogglerStyled>
    )
};

/**
 * @constructor
 */
const Navbar: React.FC = () => {
    const [{theme}, dispatch] = useGlobals();

    const changeTheme = () => {
        dispatch({
            type: "changeTheme",
            changeTheme: theme === "dark" ? "light" : "dark"
        });
    };

    return (
        <NavbarStyled>
            <Toggle
                icons={{
                    checked: <IconToggler left icon="🌞"/>,
                    unchecked: <IconToggler right icon="🌛"/>,
                }}
                onChange={changeTheme}/>
            <span>─</span>
            <a href="https://github.com/jvidalv/react-ts-cups-generator" target="_blank" rel="noopener noreferrer">>> Github</a>
        </NavbarStyled>
    );
};

export default Navbar;