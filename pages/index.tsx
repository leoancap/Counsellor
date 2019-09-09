import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import moment from "moment";

import { Layout, Listing, WideSection } from "components";
import { api } from "services/api";
import { NextPageContext } from "next";
import { IProfessional } from "types/domain";
import { useAppContext } from "context";

interface IProps {
  professionals: IProfessional[];
}

const today = () => new Date().getDate();
const isServer = typeof window === "undefined";

const Home = ({ initialProfessionals }) => {
  const [appState] = useAppContext();
  const { calendarStep } = appState;
  const [professionals, setProfessionals] = useState<IProfessional[]>(
    initialProfessionals,
  );
  useEffect(() => {
    if (!isServer) {
      const startDate = today() + calendarStep;
      const endDate = today() + calendarStep + 3;
      api
        .professionals(startDate, endDate)
        .then(updatedProfessionals => setProfessionals(updatedProfessionals));
    }
  }, [calendarStep]);
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

  return { initialProfessionals: professionals };
};

export default Home;
