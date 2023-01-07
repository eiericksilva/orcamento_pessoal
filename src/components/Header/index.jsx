import React from "react";
import { Link } from "react-router-dom";
import { Container, LogoContainer, ListButtons } from "./styles";
import Logo from "../../assets/images/eiericksilva.png";

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>
      <ListButtons>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ListButtons>
    </Container>
  );
};

export default Header;
