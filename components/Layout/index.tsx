import Head from "next/head";
import React, { ReactChild } from "react";

import { Nav } from "components";
import { GlobalStyles, MainContainer } from "./styles";

interface IProps {
  children: ReactChild | ReactChild[];
}

function Layout({ children }: IProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainContainer>
        <Nav />
        <>{children}</>
      </MainContainer>
    </>
  );
}

export { Layout };
