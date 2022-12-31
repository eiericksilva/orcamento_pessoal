import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  width: 50%;
  margin: 0 auto;

  input,
  select,
  textarea,
  button {
    font-size: 1rem;
    height: 50px;
    border: 1px solid #1a0000;
    padding: 10px;
    border-radius: 12px;

    &::placeholder {
      color: #1a0000;
    }
  }
  button {
    background-color: #cc0000;
    color: #ffffff;
    &:hover {
      cursor: pointer;
      background-color: #cc0033;
      transition: 0.3s;
    }
  }
`;
