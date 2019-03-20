import styled from 'styled-components';

export const TopContainer = styled.div`
    width: 99.8%;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // border: 1px solid brown;
`;

export const MessageBoard = styled.div`
    width: 99.8%;
    height: 99.8%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const MessageRow = styled.div`
    width: 90%;
    height: 60px;
    margin: 6px 6px 6px 10px;
    display: flex;
    justify-content: space-between;
    // border: 1px solid blue;
`;

export const Checkbox = styled.div`
    width: 57.2px;
    height: 57.2px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 2px solid #000;
`;

export const MessageBody = styled.div`
    width: 92%;
    height: 57.2px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    border: 2px solid black;
`;