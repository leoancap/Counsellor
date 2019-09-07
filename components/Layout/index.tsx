import Head from "next/head";
import React from "react";
import { Container } from "./styles";
import { Nav } from "components";

interface IProps {
  children: React.ReactChild;
}

function Layout({ children }: IProps) {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      {children}
    </Container>
  );
}

export { Layout };
