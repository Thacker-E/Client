import styled from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: space between;
    background-color: #fafafa;
    // border: 1px solid pink;
`;

export const CenterBoxseat = styled.div`
    width: 60%;
    height: 90.8%;
    padding-top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red
`;

export const Sectional = styled.div`
    width: 24.8%;
    height: 98.8%;
    margin: 0 4%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid green;
`;

export const WebsiteName = styled.h1`
    margin:  0 0.625em 0;
    color: #b0c7f1;
    font-family: 'Orbitron', sans-sarif;
    font-size: 2.40em;
    font-weight: 700;
    letter-spacing: 0.0625em;
`;

export const PageName = styled.h2`
    margin:  0 0.625em 0;
    color: #b0c7f1;
    font-family: 'Orbitron', sans-sarif;
    font-size: 1.20em;
    font-weight: 700;
    letter-spacing: 0.0625em;
`;

export const LinkNotButton = styled.button`
    width: 90px;
    height: 40px;
    margin:  0 0.625em 0;
    padding-top: 4px;
    background-color: #fafafa;;
    focus: none;
    color: #7a93c0;
    font-family: 'Orbitron', sans-sarif;
    font-size: 0.60em;
    font-weight: 500;
    letter-spacing: 0.0625em;
    :hover {
        color: #fff;
        background-color: #7a93c0;
    }
    border: none;
    border-radius: 3px;
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

