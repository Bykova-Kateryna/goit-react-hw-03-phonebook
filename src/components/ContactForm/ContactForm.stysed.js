import styled from 'styled-components';

export const ContactFofmSection = styled.div`
  background-color: #fff;
  max-width: 350px;
  text-align: center;
  padding: 15px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Fofm = styled.form`
  border: 10px solid transparent;
  color: #605756;
`;

export const FormLabel = styled.label`
  margin-right: 15px;
`;

export const FormInput = styled.input`
  width: 75%;
  &:hover,
  &:focus {
    border: 2px solid #1d88c5;
  }
`;
export const FormBtn = styled.button`
  margin-top: 15px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #1d88c5;
  }
`;
