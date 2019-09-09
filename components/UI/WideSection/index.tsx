import React from "react";

import { Container } from "./styles";

interface IProps {
  children: React.ReactChild;
}

export function WideSection({ children }: IProps) {
  return <Container>{children}</Container>;
}
