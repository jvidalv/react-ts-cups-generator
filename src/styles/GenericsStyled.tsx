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
`;

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
