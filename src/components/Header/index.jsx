import React from "react";
import { Container, LogoContainer } from "./styles";
import Logo from "../../assets/images/eiericksilva.png";

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>
    </Container>
  );
};

export default Header;
