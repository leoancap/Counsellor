import React from 'react'

import { Container } from './styles'

interface IProps {
  children: React.ReactNode
}

export function WideSection({ children }: IProps) {
  return <Container>{children}</Container>
}
