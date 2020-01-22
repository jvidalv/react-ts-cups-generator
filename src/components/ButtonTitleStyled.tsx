import styled from 'styled-components';
import THEME from "../constants/themes";

// theme is now fully typed
export const ButtonTitleStyled = styled.h4`
    color: ${props => THEME[props.theme.type].onBackground};
    margin: 10px 0;
    & span {
      margin-right: 5px;
    }
`;
