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
    width: 82%;
    height: 57.2px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
`;
/* Set apart for if I can get the checkbox feature to work as stretch. */
// export const MessageBody = styled.div`
//     width: 92%;
//     height: 57.2px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     align-items: flex-start;
//     background-color: #fff;
//     border: 1px solid #e6e6e6;
//     border-radius: 3px;
// `;

export const AddCancel = styled.div`
    width: 198.4px;
    height: 57.2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
`;

export const AddCanBut = styled.button`
    width: 193.4px;
    height: 51px;
    padding: 9.8px;
    display: flex;
    justify-content: center;
    align-items: center;
    :focus {
        outline: none;
    }
    color: #6d6d6d;
    font-family: 'Orbitron', sans-sarif;
    font-size: 0.80em;
    font-weight: 500;
    letter-spacing: 0.0625em;
    background-color: #b0c7f1;
    :hover {
        color: #fff;
        background-color: #7a93c0;
    }
    border: none;
    border-radius: 1.5px;
`;

export const InputForm = styled.form`
    width: 90%;
    height: 60px;
    margin: 6px 6px 6px 10px;
    display: flex;
    justify-content: space-between;
`;

export const InputCradle = styled.div`
    width: 90%;
    height: 57.2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
`;

export const AddInput = styled.input`
    width: 98.2%;
    height: 51px;
    padding: 0 0 0 12px;
    color: #6d6d6d;
    font-family: 'Orbitron', sans-sarif;
    font-weight: 500;
    font-size: 12.4px;
    background-color: #fafafa;
    border: none;
    :focus {
        outline: none;
    }
    text-decoration: none;
    border-radius: 2px;
`;