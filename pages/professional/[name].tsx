import React from 'react'
import { useAmp } from 'next/amp'
import { NextPageContext } from 'next'
import Head from 'next/head'
import Router from 'next/router'

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
  // TODO
  // This AMP Page should be better implemented
  // read more: https://nextjs.org/docs#amp-first-page
  // read more: https://github.com/ampproject/amp-toolbox/tree/master/packages/optimizer
  // Maybe a redirect to the normal page once mounted?!?!?!? <-- That would defeat the purpose of it
  const AmpPage = (
    <>
      <Head>
        <title>{currentProfessional.name}</title>
        <meta
          name={currentProfessional.name}
          content={currentProfessional.summary}
        />
      </Head>
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
    <>
      <Head>
        <title>{currentProfessional.name}</title>
        <meta
          name={currentProfessional.name}
          content={currentProfessional.summary}
        />
      </Head>
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
  return useAmp() ? AmpPage : NormalPage
}

Professional.getInitialProps = async ({ query, res }: NextPageContext) => {
  const { name } = query
  const professional = await api.professional(name as string)
  if (professional === 'Not found') {
    if (res) {
      res.writeHead(302, {
        Location: '/',
      })
      res.end()
    } else {
      Router.push('/')
    }
  } else {
    return { currentProfessional: professional }
  }
}

export default Professional
