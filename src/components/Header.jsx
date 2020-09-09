import React from "react";
import { Container } from "semantic-ui-react";

const Header = () => {
  return (
    <Container id="header">
      <img id="logo"
        src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
        alt="viaplay logo"
      />
    </Container>
  );
};

export default Header