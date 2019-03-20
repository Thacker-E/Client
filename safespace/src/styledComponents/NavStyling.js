import styled from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: space between;
    // border: 1px solid pink;
`;

export const CenterBoxseat = styled.div`
    width: 74.8%;
    height: 90.8%;
    margin: 0 2%;
    padding-top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;
`;

export const Sectional = styled.div`
    width: 22.8%;
    height: 98.8%;
    margin: 0 3%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // border: 1px solid green;
`;

export const WebsiteName = styled.h1`
    margin:  0 0.625em 0;
    color: #7a93c0;
    font-family: 'Orbitron', sans-sarif;
    font-size: 2.60em;
    font-weight: 700;
    letter-spacing: 0.0625em;
`;

export const PageName = styled.h2`
    margin:  0 0.625em 0;
    color: #7a93c0;
    font-family: 'Orbitron', sans-sarif;
    font-size: 1.20em;
    font-weight: 700;
    letter-spacing: 0.0625em;
`;

export const LinkNotButton = styled.button`
    width: 90px;
    height: 40px;
    margin:  0 0.625em 0;
    background-color: none;
    focus: none;
    color: #7a93c0;
    font-family: 'Orbitron', sans-sarif;
    font-size: 0.80em;
    font-weight: 500;
    letter-spacing: 0.0625em;
    :hover {
        color: #000;
        background-color: #b0c7f1;
    }
    border: none;
`;

export const LinkEffect = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 90px;
    height: 40px;
    :hover & {
        fill: #b0c7f1;
    }
`;

