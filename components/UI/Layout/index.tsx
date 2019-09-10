import Head from 'next/head'
import React from 'react'

import { Nav } from 'components'
import { GlobalStyles, MainContainer } from './styles'
import AppProvider from 'context'
import { IAppState } from 'types/app'

interface IProps {
  children: (appState: IAppState) => JSX.Element
  initialState?: IAppState
  title?: string
  name?: string
  content?: string
}

function Layout({
  children,
  initialState,
  title = 'Counsellor',
  name = 'Meet stars',
  content = 'Meet your favourite thinker',
}: IProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
        <meta name={name} content={content} />
      </Head>
      <MainContainer>
        <AppProvider initialState={initialState}>
          {appState => (
            <>
              <Nav />
              {children(appState)}
            </>
          )}
        </AppProvider>
      </MainContainer>
    </>
  )
}

export { Layout }
