import styled from 'styled-components';

interface ButtonProps {
    background: string,
    checked: boolean,
    color: string,
}

export const ButtonStyled = styled.div<ButtonProps>`
   display: flex;
   margin-bottom: 3px;
   font-size: 1.1rem;
   user-select: none;
   & > div:first-child, > div:last-child{
     width: 25px;
     background: #4D4D4D;
     position:relative;
     transition: .50s;
     &::after{
        position: absolute;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 32px;
        opacity: 1;
     }
     &:not(.checked){
      width: 0;
      &::after{
        content: "";
        opacity: 0;
      }
     }
   }
   & > div:first-child {
     &::after{
        transition: .75s;
        content: "✔";
        color: greenyellow;
     }
   }
   & > div:last-child {
     &::after{
        transition: 1.5s;
        content: "❌";
     }
   }
   }
   & .button {
    flex-grow: 1;
    color: ${props => props.color};
    background: ${props => props.background};
    border-color: ${props => props.background};
    padding: 5px 5px;
    transition: .25s;
    cursor : pointer;
    text-align: left;
   }
   
`;
