import { NextPageContext } from "next";
import React, { useEffect, useState } from "react";

import { Layout, Listing, WideSection } from "components";
import AppProvider, { useAppContext } from "context";
import { api } from "services/api";
import { IAppState } from "types/app";
import { IProfessional } from "types/domain";
import { getTimezone } from "utils/getTimezone";
import { getCalendarStructure } from "utils/getCalendarStructure";

interface IProps {
  professionals: IProfessional[];
}

const today = () => new Date().getDate();
const isServer = typeof window === "undefined";

const defaultState: IAppState = {
  timezone: getTimezone(),
  calendarStep: 0,
  calendarStructure: getCalendarStructure(0),
  loadingStatus: "done",
  isAppRunning: false,
  professionals: [],
};

const Home = ({ initialProfessionals }) => {
  // const [appState, setAppState] = useAppContext();
  // const { calendarStep, isAppRunning, professionals } = appState;
  // useEffect(() => {
  //   if (!isServer && isAppRunning) {
  //     setAppState({ ...appState, loadingStatus: "loading" });
  //     const startDate = today() + calendarStep;
  //     const endDate = today() + calendarStep + 3;
  //     api
  //       .professionals(startDate, endDate)
  //       .then(updatedProfessionals => {
  //         setProfessionals(updatedProfessionals);
  //         setAppState({ ...appState, loadingStatus: "done" });
  //       })
  //       .catch(_ => {
  //         // Ignore error for now
  //         // setAppState({ ...appState, loadingStatus: "error" });
  //       });
  //   }
  // }, [calendarStep]);
  return (
    <AppProvider
      initialState={{ ...defaultState, professionals: initialProfessionals }}
    >
      {({ professionals }) => (
        <Layout>
          <WideSection>
            <Listing professionals={professionals} />
          </WideSection>
        </Layout>
      )}
    </AppProvider>
  );
};

Home.getInitialProps = async ({  }: NextPageContext) => {
  const professionals = await api.professionals();

  return { initialProfessionals: professionals };
};

export default Home;
