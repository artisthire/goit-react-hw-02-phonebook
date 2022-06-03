import styled from '@emotion/styled';

export const InputWrapper = styled.p`
  margin: 0 0 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: 600;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 70%;
  padding: 5px;
  border: 1px solid #ccc;
  font-family: inherit;
  line-height: 1.1;
  color: black;

  &::placeholder {
    color: #010101;
  }
`;
