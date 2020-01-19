import styled from "styled-components";

export const NavbarStyled = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    margin-bottom: 50px;
`;

interface IconTogglerStyledProps {
    left : boolean | undefined;
    right  : boolean | undefined;
}

export const IconTogglerStyled = styled.div<IconTogglerStyledProps>`
    color: #ffffff;
    font-size: 16px;
    position: absolute;
    top: 0.3em;
    ${props => props.right ? 'right: -5px' : null };
    ${props => props.left ? 'left: -5px' : null };
`;