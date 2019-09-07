export interface IDoctor {
  name: string;
  profession: string;
  field: string[];
  location: string;
  description: string;
  reviews: number[];
  ratesPerHour: number;
  availabilitySlots: IAvailabilitySlot[];
}

export interface IAvailabilitySlot {
  start: string;
  end: string;
}
