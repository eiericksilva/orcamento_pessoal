import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  width: 30%;
  height: 80%;
  border-radius: 12px;
  background-color: #132f4c;

  input,
  select,
  textarea,
  button {
    color: #ffffff;
    font-size: 1rem;
    height: 50px;
    border: 1px solid #1a0000;
    outline: 1px solid #1a0000;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    background: none;
    outline: none;

    &::placeholder {
      color: #ffffff;
    }
  }
  input,
  select,
  textarea {
    &:focus {
      outline: 2px solid #0059b2;
      border: none;
    }
  }

  button {
    background-color: #0071e2;
    color: #ffffff;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    border: none;

    &:hover {
      cursor: pointer;
      background-color: #0059b2;
      transition: 0.3s;
    }
  }

  span {
    color: #ff0000;
    font-size: 16px;
    position: relative;
    top: -10px;
    left: 7px;
  }
`;
