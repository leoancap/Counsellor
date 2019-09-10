import React from 'react'
import Head from 'next/head'

import { Layout, Listing, WideSection } from 'components'
import { api } from 'services/api'
import { IAppState } from 'types/app'
import { IProfessional } from 'types/domain'
import { getCalendarStructure } from 'utils/getCalendarStructure'
import { getTimezone } from 'utils/getTimezone'

const defaultState: IAppState = {
  timezone: getTimezone(),
  calendarStep: 0,
  calendarStructure: getCalendarStructure(0),
  loadingStatus: 'done',
  isAppRunning: false,
  professionals: [],
}

interface IProps {
  initialProfessionals: IProfessional[]
}
const Home = ({ initialProfessionals }: IProps) => {
  return (
    <Layout
      initialState={{ ...defaultState, professionals: initialProfessionals }}
    >
      {({ professionals }) => (
        <>
          <Head>
            <title>Counsellor</title>
            <meta name="Meet stars" content="Meet your favourite thinker" />
          </Head>
          <WideSection>
            <Listing professionals={professionals} />
          </WideSection>
        </>
      )}
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const professionals = await api.professionals()

  return { initialProfessionals: professionals }
}

export default Home
