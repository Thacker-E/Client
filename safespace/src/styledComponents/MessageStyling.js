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

export const MessageRow = styled.div`
    width: 90%;
    height: 60px;
    margin: 6px 6px 6px 10px;
    display: flex;
    justify-content: space-between;
    // border: 1px solid blue;
`;

export const MessageBody = styled.div`
    width: 92%;
    height: 57.2px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
`;