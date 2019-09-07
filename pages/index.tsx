import React from "react";

import { Layout, Listing } from "components";
import { api } from "config";

function Home({ professionals }) {
  return (
    <Layout>
      <Listing professionals={professionals} />
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const { data } = await api.get("/professionals");

  return { professionals: data };
};

export default Home;
