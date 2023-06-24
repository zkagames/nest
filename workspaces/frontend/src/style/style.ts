import styled from 'styled-components';

export const HEADER_COLOR = 'rgb(9, 113, 241)';
export const HOVER_COLOR = 'rgb(35, 170, 255)';
export const COLORS = {
    add: 'green',
    heat: 'red',
    freeze: 'blue'
}

export const MainPage = styled.div`
    padding:0px;
    margin:0px;
    font-size:16px;
    font-family:verdana;
    *{font-size:16px;}
`

export const TopTabs = styled.div`
    display:flex;
    align-items:center;
    padding-right: 16px;
    padding: 4px;
    gap: 4px;
    background: ${HEADER_COLOR};
    box-shadow: 1px 1px 3px ${HEADER_COLOR};
    color:white;
`

export const Page = styled.div`
    padding: 32px;
`

export const PageHeader = styled.div`
    margin-bottom:20px;
`
