import Head from "next/head";
import React, { ReactChild } from "react";

import { Nav } from "components";
import { Container, GlobalStyles, MainContainer } from "./styles";

interface IProps {
  children: ReactChild | ReactChild[];
}

function Layout({ children }: IProps) {
  return (
    <MainContainer>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Nav />
        <>{children}</>
      </Container>
    </MainContainer>
  );
}

export { Layout };
