import styled from "styled-components";
import THEME from "../constants/themes";

export const NavbarStyled = styled.div`
    margin-top:25px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    & a{
      color: ${props => THEME[props.theme.type].onBackground};
      font-size: 0.9rem;
      text-decoration: none;
      transition: .25s;
      &:hover{
        color: ${props => THEME[props.theme.type].primary};
        letter-spacing: 1px;
      }
    }
    & span {
      padding: 0 10px
    }
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