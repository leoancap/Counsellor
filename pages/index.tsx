import React from "react";

import { Layout } from "components";
import { api } from "config";

function Home({ data }) {
  return (
    <Layout>
      <div style={{ height: "800px" }}>I am home</div>
      <div style={{ height: "800px" }}>I am home</div>
      <div style={{ height: "800px" }}>I am home</div>
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const { data } = await api.get("/doctors");
  console.log(data);

  return { data };
};

export default Home;
