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
    overflow:hidden;
    transition: .25s;
    cursor:pointer;
    user-select: none;
    color : white;
    &:not(:last-child){
      margin-right: 3px;
    }
    &.hovered{
      width: 80px;
    }
`;
