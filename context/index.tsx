import React, { createContext, useContext, useEffect, useState } from 'react'
import { IAppAction, IAppState } from 'types/app'
import { getCalendarStructure } from 'utils/getCalendarStructure'
import { api } from 'services/api'

const dayOfTheMonth = () => new Date().getDate()

const AppContext = createContext<[IAppState, IAppAction] | null>(null)

interface IProps {
  children: (appState: IAppState) => JSX.Element
  initialState: IAppState
}
const AppProvider = ({ children, initialState }: IProps) => {
  const [appState, setAppState] = useState<IAppState>(initialState)
  const { calendarStep, isAppRunning } = appState

  useEffect(() => {
    if (isAppRunning) {
      setAppState(oldState => ({
        ...oldState,
        calendarStructure: getCalendarStructure(calendarStep),
        loadingStatus: 'loading',
      }))

      const startDate = dayOfTheMonth() + calendarStep
      const endDate = dayOfTheMonth() + calendarStep + 3
      api
        .professionals(startDate, endDate)
        .then(updatedProfessionals => {
          setAppState(oldState => ({
            ...oldState,
            professionals: updatedProfessionals,
            loadingStatus: 'done',
          }))
        })
        .catch(_ => {
          // Ignore error for now
          setAppState({ ...appState, loadingStatus: 'error' })
        })
    } else {
      setAppState({
        ...appState,
        isAppRunning: true,
      })
    }
  }, [calendarStep])

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {children(appState)}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
export default AppProvider
