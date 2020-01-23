import styled from 'styled-components';
import THEME from "../constants/themes";

/**
 * Main container
 * Has all important and basic styles
 */
export const ContainerStyled = styled.div`
    font-size: calc(10px + 2vmin);
    background: ${props => THEME[props.theme.type].background};
    color: ${props => THEME[props.theme.type].onBackground};
    min-height: 100vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1000px) {
      padding: 0 25px;
      align-items: unset;
    }
`;

/**
 * Content container
 */
export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;    
  max-width: 900px;
  
  & h1 {
    margin-top: 50px;
    margin-bottom: 50px;
    &::after{
        content: " ";
        border-bottom: 5px solid ${props => THEME[props.theme.type].onBackground};
        width: 50%;
        height: 25px;
        display: block;
    }
  }
  
  & .input {
    width: 100%;
    margin: 25px 0;
    transform: skewY(6deg);
    background: linear-gradient(transparent,rgb(53, 76, 239));
    height: 45px;
    & > div {
      transform: skewY(-6deg);
    }
    & input {
        width: 100%;
        height: 30px;
        border: unset;
        text-align: center;
        cursor: pointer;
        background: ${props => THEME[props.theme.type].onBackground};
        color: ${props => THEME[props.theme.type].background};
        margin-top: 3px;
        padding: unset;
        font-size: 20px;
    }
    
    & .tools {
        display:flex;
        justify-content: flex-end;
        margin-top: -31px;
    }
  }
  
  & .desc {
      & p {
       border-left: 5px solid ${props => THEME[props.theme.type].onBackground};
       padding-left: 10px;
       margin-top:25px;
      }
  }
  
  & .options{
     display: flex;
     width: 100%;
     & > div {
        display: flex;
        flex: 1;
        flex-direction: column;
        & button {
          
        }
     }
     & > div:not(:last-child){
      margin-right: 3px;
     }
     @media (max-width: 560px) {
      flex-direction: column;
    }
  }
  
  & strong {
    color : ${props => THEME[props.theme.type].primary};
  }
`;

/**
 * Row where input and description is
 */
export const RowInput = styled.div`
  display:flex;
  & .desc {
    flex: 30%;
  }
  & .input {
    flex-grow: 1;
  }
`;
