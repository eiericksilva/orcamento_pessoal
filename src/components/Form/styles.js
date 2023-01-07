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
    outline: 1px solid #1a0000;
    padding: 10px;
    border-radius: 5px;
  }
  input,
  select,
  textarea {
    &:focus {
      outline: 2px solid red;
      border: none;
    }
  }

  button {
    background-color: #cc0000;
    color: #ffffff;
    letter-spacing: 0.3rem;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      background-color: #cc0033;
      transition: 0.3s;
    }
  }

  span {
    color: #ff0000;
    font-size: 12px;
    position: relative;
    top: -15px;
    left: px;
  }
`;
