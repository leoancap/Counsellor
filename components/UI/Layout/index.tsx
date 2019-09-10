import Head from 'next/head'
import React from 'react'

import { Nav } from 'components'
import { GlobalStyles, MainContainer } from './styles'
import AppProvider from 'context'
import { IAppState } from 'types/app'

interface IProps {
  children: (appState: IAppState) => JSX.Element
  initialState?: IAppState
}

function Layout({ children, initialState }: IProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
