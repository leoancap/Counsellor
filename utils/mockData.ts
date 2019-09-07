const availabilitySlots = [
  { start: "2019-09-10T08:00:00.000Z", end: "2019-09-10T09:00:00.000Z" },
  { start: "2019-09-10T08:30:00.000Z", end: "2019-09-10T09:30:00.000Z" },
  { start: "2019-09-10T09:00:00.000Z", end: "2019-09-10T10:00:00.000Z" },
  { start: "2019-09-10T09:30:00.000Z", end: "2019-09-10T10:30:00.000Z" },
  { start: "2019-09-10T10:00:00.000Z", end: "2019-09-10T11:00:00.000Z" },
  { start: "2019-09-10T10:30:00.000Z", end: "2019-09-10T11:30:00.000Z" },
  { start: "2019-09-10T11:00:00.000Z", end: "2019-09-10T12:00:00.000Z" },
  { start: "2019-09-10T11:30:00.000Z", end: "2019-09-10T12:30:00.000Z" },
  { start: "2019-09-10T12:00:00.000Z", end: "2019-09-10T13:00:00.000Z" },
  { start: "2019-09-10T12:30:00.000Z", end: "2019-09-10T13:30:00.000Z" },
  { start: "2019-09-10T13:00:00.000Z", end: "2019-09-10T14:00:00.000Z" },
  { start: "2019-09-10T13:30:00.000Z", end: "2019-09-10T14:30:00.000Z" },
  { start: "2019-09-10T14:00:00.000Z", end: "2019-09-10T15:00:00.000Z" },
  { start: "2019-09-10T14:30:00.000Z", end: "2019-09-10T15:30:00.000Z" },
  { start: "2019-09-10T15:00:00.000Z", end: "2019-09-10T16:00:00.000Z" },
  { start: "2019-09-10T21:00:00.000Z", end: "2019-09-10T22:00:00.000Z" },
  { start: "2019-09-10T21:30:00.000Z", end: "2019-09-10T22:30:00.000Z" },
  { start: "2019-09-11T08:00:00.000Z", end: "2019-09-11T09:00:00.000Z" },
  { start: "2019-09-11T08:30:00.000Z", end: "2019-09-11T09:30:00.000Z" },
  { start: "2019-09-11T09:00:00.000Z", end: "2019-09-11T10:00:00.000Z" },
  { start: "2019-09-11T09:30:00.000Z", end: "2019-09-11T10:30:00.000Z" },
  { start: "2019-09-11T10:00:00.000Z", end: "2019-09-11T11:00:00.000Z" },
  { start: "2019-09-11T10:30:00.000Z", end: "2019-09-11T11:30:00.000Z" },
  { start: "2019-09-11T11:00:00.000Z", end: "2019-09-11T12:00:00.000Z" },
  { start: "2019-09-11T11:30:00.000Z", end: "2019-09-11T12:30:00.000Z" },
  { start: "2019-09-11T12:00:00.000Z", end: "2019-09-11T13:00:00.000Z" },
  { start: "2019-09-11T12:30:00.000Z", end: "2019-09-11T13:30:00.000Z" },
  { start: "2019-09-11T13:00:00.000Z", end: "2019-09-11T14:00:00.000Z" },
  { start: "2019-09-11T13:30:00.000Z", end: "2019-09-11T14:30:00.000Z" },
  { start: "2019-09-11T14:00:00.000Z", end: "2019-09-11T15:00:00.000Z" },
  { start: "2019-09-11T14:30:00.000Z", end: "2019-09-11T15:30:00.000Z" },
  { start: "2019-09-11T15:00:00.000Z", end: "2019-09-11T16:00:00.000Z" },
  { start: "2019-09-11T21:00:00.000Z", end: "2019-09-11T22:00:00.000Z" },
  { start: "2019-09-11T21:30:00.000Z", end: "2019-09-11T22:30:00.000Z" },
  { start: "2019-09-12T08:00:00.000Z", end: "2019-09-12T09:00:00.000Z" },
  { start: "2019-09-12T08:30:00.000Z", end: "2019-09-12T09:30:00.000Z" },
  { start: "2019-09-12T09:00:00.000Z", end: "2019-09-12T10:00:00.000Z" },
  { start: "2019-09-12T09:30:00.000Z", end: "2019-09-12T10:30:00.000Z" },
  { start: "2019-09-12T10:00:00.000Z", end: "2019-09-12T11:00:00.000Z" },
  { start: "2019-09-12T10:30:00.000Z", end: "2019-09-12T11:30:00.000Z" },
  { start: "2019-09-12T11:00:00.000Z", end: "2019-09-12T12:00:00.000Z" },
  { start: "2019-09-12T11:30:00.000Z", end: "2019-09-12T12:30:00.000Z" },
  { start: "2019-09-12T12:00:00.000Z", end: "2019-09-12T13:00:00.000Z" },
  { start: "2019-09-12T12:30:00.000Z", end: "2019-09-12T13:30:00.000Z" },
  { start: "2019-09-12T13:00:00.000Z", end: "2019-09-12T14:00:00.000Z" },
  { start: "2019-09-12T13:30:00.000Z", end: "2019-09-12T14:30:00.000Z" },
  { start: "2019-09-12T14:00:00.000Z", end: "2019-09-12T15:00:00.000Z" },
  { start: "2019-09-12T14:30:00.000Z", end: "2019-09-12T15:30:00.000Z" },
  { start: "2019-09-12T15:00:00.000Z", end: "2019-09-12T16:00:00.000Z" },
  { start: "2019-09-12T21:00:00.000Z", end: "2019-09-12T22:00:00.000Z" },
  { start: "2019-09-12T21:30:00.000Z", end: "2019-09-12T22:30:00.000Z" },
  { start: "2019-09-13T08:00:00.000Z", end: "2019-09-13T09:00:00.000Z" },
  { start: "2019-09-13T08:30:00.000Z", end: "2019-09-13T09:30:00.000Z" },
  { start: "2019-09-13T09:00:00.000Z", end: "2019-09-13T10:00:00.000Z" },
  { start: "2019-09-13T09:30:00.000Z", end: "2019-09-13T10:30:00.000Z" },
  { start: "2019-09-13T10:00:00.000Z", end: "2019-09-13T11:00:00.000Z" },
  { start: "2019-09-13T10:30:00.000Z", end: "2019-09-13T11:30:00.000Z" },
  { start: "2019-09-13T11:00:00.000Z", end: "2019-09-13T12:00:00.000Z" },
  { start: "2019-09-13T11:30:00.000Z", end: "2019-09-13T12:30:00.000Z" },
  { start: "2019-09-13T12:00:00.000Z", end: "2019-09-13T13:00:00.000Z" },
  { start: "2019-09-13T12:30:00.000Z", end: "2019-09-13T13:30:00.000Z" },
  { start: "2019-09-13T13:00:00.000Z", end: "2019-09-13T14:00:00.000Z" },
  { start: "2019-09-13T13:30:00.000Z", end: "2019-09-13T14:30:00.000Z" },
  { start: "2019-09-13T14:00:00.000Z", end: "2019-09-13T15:00:00.000Z" },
  { start: "2019-09-13T14:30:00.000Z", end: "2019-09-13T15:30:00.000Z" },
  { start: "2019-09-13T15:00:00.000Z", end: "2019-09-13T16:00:00.000Z" },
  { start: "2019-09-13T21:00:00.000Z", end: "2019-09-13T22:00:00.000Z" },
  { start: "2019-09-13T21:30:00.000Z", end: "2019-09-13T22:30:00.000Z" },
];

export const doctors = [
  {
    name: "Nathaniel Branden",
    profession: "Psychologist",
    location: "Lisbon",
    description:
      "Nathaniel Branden was a Canadian–American psychotherapist and writer known for his work in the psychology of self-esteem. A former associate and romantic partner of Ayn Rand, Branden also played a prominent role in the 1960s in promoting Rand's philosophy, Objectivism. Rand and Branden split acrimoniously in 1968, after which Branden focused on developing his own psychological theories and modes of therapy.",
    reviews: [0.7, 0.8, 0.2, 0.5],
    ratesPerHour: 160,
    availabilitySlots,
  },
];
