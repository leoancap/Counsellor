import React from "react";

import { Container, Logo, LogoText, LogoWrapper } from "./styles";
import { useIsScrolled } from "hooks/useIsScrolled";
import { DateCarousel } from "components";

export function Nav() {
  const isScrolled = useIsScrolled();
  return (
    <Container invert={isScrolled}>
      <LogoWrapper>
        <Logo invert={isScrolled}>
          <span>C</span>
        </Logo>
        <LogoText invert={isScrolled}>Counsellor</LogoText>
      </LogoWrapper>
    </Container>
  );
}
