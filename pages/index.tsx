import React from "react";
import { date } from "faker";

import { Layout } from "components";
import { api } from "config";

function Home({ data }) {
  return (
    <Layout>
      <div>I am home</div>
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const { data } = await api.get("/doctors");
  console.log(data);

  return { data };
};

export default Home;
