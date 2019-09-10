import { Dispatch, SetStateAction } from 'react'
import { Moment } from 'moment'
import { IProfessional } from 'types/domain'

export type ILoadingStatus = 'loading' | 'done' | 'error'

export interface IAppState {
  timezone: string
  calendarStep: number
  calendarStructure: moment.Moment[]
  loadingStatus: ILoadingStatus
  isAppRunning: boolean
  professionals: IProfessional[]
  professional?: IProfessional
}

export type IAppAction = Dispatch<SetStateAction<IAppState>>
