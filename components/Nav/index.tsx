import React from "react";

import { Container, Logo, LogoText } from "./styles";
import { useIsScrolled } from "hooks/useIsScrolled";

export function Nav() {
  const isScrolled = useIsScrolled();
  return (
    <Container invert={isScrolled}>
      <Logo invert={isScrolled}>
        <span>C</span>
      </Logo>
      <LogoText invert={isScrolled}>Counsellor</LogoText>
    </Container>
  );
}
