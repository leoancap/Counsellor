import React from 'react'
import Link from 'next/link'

import { Container, Logo, LogoText, LogoWrapper } from './styles'
import { useIsScrolled } from 'hooks/useIsScrolled'

export function Nav() {
  const isScrolled = useIsScrolled()
  return (
    <Container invert={isScrolled}>
      <Link href="/">
        <LogoWrapper>
          <Logo invert={isScrolled}>
            <span>C</span>
          </Logo>
          <LogoText invert={isScrolled}>Counsellor</LogoText>
        </LogoWrapper>
      </Link>
    </Container>
  )
}
