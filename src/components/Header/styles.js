import styled from "styled-components";

export const Container = styled.div`
  background-color: #1a0000;
  width: 100%;
  height: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 300px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
    filter: invert(100%);
  }
`;

export const ListButtons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px;

  li,
  a {
    color: #ffff44;
    list-style: none;
    text-decoration: none;
    font-size: 1rem;
  }

  a {
    &:hover {
      border-bottom: 1px solid #ffff44;
    }
  }
`;
