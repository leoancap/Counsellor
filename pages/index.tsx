import React from "react";
import moment from "moment";

import { Layout, Listing } from "components";
import {
  generateRosterPerDay,
  generateRosterInterval,
} from "utils/generateRosterPerDay";
import { api } from "services/api";
import { NextComponentType, NextPageContext } from "next";
import { IProfessional } from "types/domain";

interface IProps {
  professionals: IProfessional[];
}

const Home = ({ professionals }) => {
  return (
    <Layout>
      <Listing professionals={professionals} />
    </Layout>
  );
};

Home.getInitialProps = async ({  }: NextPageContext) => {
  const professionals = await api.professionals();

  return { professionals };
};

export default Home;
