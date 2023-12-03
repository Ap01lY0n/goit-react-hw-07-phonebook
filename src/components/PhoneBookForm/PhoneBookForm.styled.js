import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const MyForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 25px;
align-items: center;
`;

export const MyField = styled(Field)`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 20px;
  width: 300px;
  height: 35px;
  display: flex;
  }
`;

export const Label = styled.label`
display: flex;
margin-bottom: 15px;

`;
export const InputContainer = styled.div`
  position: relative;
  width: 420px;
  margin-left: 100px;
`;
export const ButtonForm = styled.button`
width: 250px;
margin-top: 20px;
margin-bottom: 20px;
margin: 0 auto;
border: 1px solid gray;
background-color: white;
font-size: 18px;
font-weight: 700;
cursor: pointer;  

`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-left: 20px;
  color: red;
`;