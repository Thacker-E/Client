import styled from 'styled-components';
import Head from '../assets/head.jpg';
import Gears from '../assets/gears.jpg';

export const Cabal = styled.div`
    width: 99.8%;
    height: 99.8%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${Head});
`;

export const Grindr = styled.div`
    width: 99%;
    height: 99.8%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${Gears});
`;