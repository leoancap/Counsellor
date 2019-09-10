import React from 'react'
import { useAmp } from 'next/amp'
import Head from 'next/head'

import { Layout, Card, WideSection } from 'components'
import { api } from 'services/api'
import { IAppState } from 'types/app'
import { IProfessional } from 'types/domain'
import { getCalendarStructure } from 'utils/getCalendarStructure'
import { getTimezone } from 'utils/getTimezone'

// Enabling AMP support ⚡️
export const config = { amp: 'hybrid' }

const defaultState: IAppState = {
  timezone: getTimezone(),
  calendarStep: 0,
  calendarStructure: getCalendarStructure(0),
  loadingStatus: 'done',
  isAppRunning: false,
  professionals: [],
}

interface IProps {
  currentProfessional: IProfessional
}
const Professional = ({ currentProfessional }: IProps) => {
  const AmpPage = (
    <>
      <Layout
        initialState={{ ...defaultState, professional: currentProfessional }}
      >
        {({ professional }) => (
          <WideSection>
            <Card professional={professional} />
          </WideSection>
        )}
      </Layout>
    </>
  )
  const NormalPage = (
    <Layout
      initialState={{ ...defaultState, professional: currentProfessional }}
    >
      {({ professional }) => (
        <WideSection>
          <Card professional={professional} />
        </WideSection>
      )}
    </Layout>
  )
  return useAmp() ? AmpPage : NormalPage
}

Professional.getInitialProps = async ({ query }) => {
  const { name } = query
  const professional = await api.professional(name as string)

  return { currentProfessional: professional }
}

export default Professional
