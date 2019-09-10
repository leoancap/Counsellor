import React, { createContext, useContext, useEffect, useState } from 'react'
import { IAppAction, IAppState } from 'types/app'
import { getCalendarStructure } from 'utils/getCalendarStructure'
import { api } from 'services/api'
import { useRouter } from 'next/dist/client/router'

const dayOfTheMonth = () => new Date().getDate()

const AppContext = createContext<[IAppState, IAppAction] | null>(null)

interface IProps {
  children: (appState: IAppState) => JSX.Element
  initialState: IAppState
}
const AppProvider = ({ children, initialState }: IProps) => {
  const [appState, setAppState] = useState<IAppState>(initialState)
  const { calendarStep, isAppRunning } = appState
  const router = useRouter()

  const fetchProfessionals = async (startDate: number, endDate: number) => {
    try {
      const updatedProfessionals = await api.professionals(startDate, endDate)
      setAppState(oldState => ({
        ...oldState,
        professionals: updatedProfessionals,
        loadingStatus: 'done',
      }))
    } catch (_) {
      // Ignore error for now
      setAppState({ ...appState, loadingStatus: 'error' })
    }
  }

  const fetchProfessional = async (
    name: string,
    startDate: number,
    endDate: number,
  ) => {
    try {
      const updatedProfessional = await api.professional(
        name,
        startDate,
        endDate,
      )
      console.log(updatedProfessional)
      setAppState(oldState => ({
        ...oldState,
        professional: updatedProfessional,
        loadingStatus: 'done',
      }))
    } catch (_) {
      // Ignore error for now
      setAppState({ ...appState, loadingStatus: 'error' })
    }
  }

  useEffect(() => {
    if (isAppRunning) {
      setAppState(oldState => ({
        ...oldState,
        calendarStructure: getCalendarStructure(calendarStep),
        loadingStatus: 'loading',
      }))

      const startDate = dayOfTheMonth() + calendarStep
      const endDate = dayOfTheMonth() + calendarStep + 3
      if (router.pathname.includes('professionals')) {
        fetchProfessionals(startDate, endDate)
      } else {
        fetchProfessional(appState.professional.name, startDate, endDate)
      }
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
