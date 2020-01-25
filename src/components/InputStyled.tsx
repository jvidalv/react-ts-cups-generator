import styled from 'styled-components';
import THEME from "../constants/themes";

interface InputProps {
    ref : any,
    className ?: string,
    afterText : string,
}

interface InputHiddenProps {
    ref : any,
    className ?: string,
    value ?: string,
}

export const CupsDivStyled = styled.div<InputProps>`
   letter-spacing: 0.05em;
   position:relative;
   & .space { 
    padding: 0 5px;
   }
   &::after{
    content : "${ props => props.afterText }";
    position: absolute;
    right: 10px;
    font-size: 12px;
    font-style: italic;
    color: ${props => THEME[props.theme.type].background};
    @media (max-width: 560px) {
       color: white !important;
       font-size: 8px;
       top: 45px;
    }
   }
`;

export const PropertiesStyled = styled.div`
  position: absolute;
  margin-top: -30px;
  font-size: 16px;
  width: 100%;
  z-index: -1;
  & > div {
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

export const InputHiddenStyled = styled.input<InputHiddenProps>`
  display: none;
`;
