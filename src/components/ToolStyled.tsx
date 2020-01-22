import styled from 'styled-components';

interface ToolProps {
    background : string,
}

export const ToolStyled = styled.div<ToolProps>`
    background: ${props => props.background};
    height: 35px;
    width: 35px;
    font-size: 17px;
    text-align: center;
    line-height: 35px;
    &:not(:last-child){
      margin-right: 3px;
    }
`;
