import styled from 'styled-components';

export const FormPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
`;

export const LoginBox = styled.div`
    width: 348px;
    height: 343px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
`;

export const RegisterBox = styled.div`
    width: 348px;
    height: 530px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
`;

export const LoginHeader = styled.div`
    width: 266px;
    height: 51px;
    margin: 22px 40px 12px;
`;

export const RegisterHeader = styled.div`
    width: 266px;
    height: 188px;
    margin: 22px 40px 12px;
`;

export const LoginDiv = styled.div`
    width: 266px;
    height: 36px;
    margin: 0 40px 6px 40px;
    background-color: #fafafa;
    border: 1px solid #efefef;
    border-radius: 3px;
`;

export const LogInput = styled.input`
    width: 250px;
    height: 20px;
    margin: 0 0 3px 0;
    padding: 10px 0 7px 8px;
    color: #262626;
    font-family: 'Orbitron', sans-sarif;
    font-weight: 400;
    background-color: #fafafa;
    border: none;
    outline: none;
    text-decoration: none;
`;

export const LoginButton = styled.button`
    width: 268px;
    height: 30px;
    margin: 8px 40px;
    padding: 3px 0 0;
    color: #000;
    font-family: 'Orbitron', sans-sarif;
    font-size: 12px;
    font-weight: 700;
    background-color: #c1d6fc;
    border: none;
    border-radius: 3px;
    outline: none;
`;

export const OurTerms = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const buttonDec = {
    width: 'auto',
    height: 'auto',
    margin: '15px',
    padding: '1px 7px 2px',
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: '#000',
    backgroundColor: 'buttonface',
    textAlign: 'center',
    textTransform: 'none',
    textShadow: 'none',
    wordSpacing: '0px',
    fontFamily: 'system-ui',
    fontSize: '11px',
    fontWeight: '400',
    fontStretch: '100%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#d8d8d8 #d1d1d1 #bababa',
    borderRadius: '3px'
};