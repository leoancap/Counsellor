export interface IProfessional {
  name: string
  profession: string
  complaints: string[]
  location: string
  summary: string
  reviews: number[]
  ratesPerHour: number
  availabilitySlots: IAvailabilitySlot[]
}

export interface IAvailabilitySlot {
  start: string
  end: string
}
