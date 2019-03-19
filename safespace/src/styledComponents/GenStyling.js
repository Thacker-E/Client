import styled from 'styled-components';

export const Backdrop = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
`;

export const CenterStage = styled.div`
    width: 99.8%;
    height: 500px;
    margin-top: 60.1px;
    position: absolute;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid blue;
`;

export const NoButton = styled.button`
    background-color: none;
    focus: none;
    border: none;
`;

export const Text = styled.text`
    margin:  0.625em;
    color: #000;
    font-family: 'Orbitron', sans-sarif;
    font-size: 0.80em;
    font-weight: 500;
    letter-spacing: 0.0625em;
    h1 {
        color: #7a93c0;
        font-size: 1.20em;
        font-weight: 900;
    }
    h2 {
        color: #7a93c0;
        font-size: 1.00em;
        font-weight: 900;
    }
    h3 {
        margin-bottom: 4px;
        color: #7a93c0;
        font-size: 1.20em;
        font-weight: 700;
    }
`;