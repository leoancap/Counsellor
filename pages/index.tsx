import React from "react";
import moment from "moment";

import { Layout, Listing, WideSection } from "components";
import { api } from "services/api";
import { NextPageContext } from "next";
import { IProfessional } from "types/domain";

interface IProps {
  professionals: IProfessional[];
}

const Home = ({ professionals }) => {
  return (
    <Layout>
      <WideSection>
        <Listing professionals={professionals} />
      </WideSection>
    </Layout>
  );
};

Home.getInitialProps = async ({  }: NextPageContext) => {
  const professionals = await api.professionals();

  return { professionals };
};

export default Home;
