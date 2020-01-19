import React from "react";
import Toggle from "react-toggle";
import {IconTogglerStyled, NavbarStyled} from "./NavbarStyled";

interface IconTogglerProps {
    icon: string;
    left?:  boolean;
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

interface NavbarProps {
    theme: string;
    useTheme: any;
}

/**
 * @param props
 * @constructor
 */
const Navbar: React.FC<NavbarProps> = (props) => {
    const changeTheme = () => {
        props.useTheme(props.theme === 'dark' ? 'light' : 'dark')
    };
    return (
        <NavbarStyled>
                <Toggle
                    icons={{
                        checked: <IconToggler left icon="🌞"/>,
                        unchecked: <IconToggler right icon="🌛"/>,
                    }}
                    onChange={changeTheme}/>
        </NavbarStyled>
    );
};

export default Navbar;