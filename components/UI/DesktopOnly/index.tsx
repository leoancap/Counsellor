import React from "react";

import { Container } from "./styles";

interface IProps {
  children: React.ReactChild;
}

export const DesktopOnly = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};
