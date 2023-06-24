import styled from 'styled-components';
import { COLORS } from '../../style/style';
import { Action } from '../../types';

export const StageContainer = styled.div<{action: Action}>`
    display:flex;
    align-itemc:center;
    svg {color: ${props=>COLORS[props.action]};}
`

export const ActionsConteiner = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
    gap: 4px;
    svg{cursor:pointer}
` 
