import React from "react";

import { Layout, Listing } from "components";
import { api } from "config";

function Home({ doctors }) {
  return (
    <Layout>
      <Listing doctors={doctors} />
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const { data } = await api.get("/doctors");

  return { doctors: data };
};

export default Home;
