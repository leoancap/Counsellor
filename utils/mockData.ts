import { IProfessional } from 'types/domain'
import { generateRosterInterval } from 'utils/generateRosterPerDay'

export const generateProfessionals = (
  startDate: number,
  endDate: number,
): IProfessional[] => [
  {
    name: 'Carl Jung',
    profession: 'Psychotherapist',
    location: 'Switzerland',
    complaints: [
      'Analytical psychology',
      'Unconscious complex',
      'Psychotherapy',
    ],
    summary:
      'was a Swiss psychiatrist and psychoanalyst who founded analytical psychology. Jung\'s work was influential in the complaints of psychiatry, anthropology, archaeology, literature, philosophy, and religious studies. Jung worked as a research scientist at the famous Burghölzli hospital, under Eugen Bleuler.',
    reviews: [5, 4, 4, 3, 3],
    ratesPerHour: 160,
    availabilitySlots: generateRosterInterval(startDate, endDate),
  },
  {
    name: 'Nathaniel Branden',
    profession: 'Psychologist',
    location: 'Canada',
    complaints: ['Self-Esteem'],
    summary:
      'Nathaniel Branden was a Canadian–American psychotherapist and writer known for his work in the psychology of self-esteem. A former associate and romantic partner of Ayn Rand, Branden also played a prominent role in the 1960s in promoting Rand\'s philosophy, Objectivism. Rand and Branden split acrimoniously in 1968, after which Branden focused on developing his own psychological theories and modes of therapy.',
    reviews: [5, 5, 5, 5, 5],
    ratesPerHour: 160,
    availabilitySlots: generateRosterInterval(startDate, endDate),
  },
  {
    name: 'Hermann Ebbinghaus',
    profession: 'Psychologist',
    location: 'Germany',
    complaints: ['Memory', 'Learning'],
    reviews: [5, 5, 5, 4, 4, 4, 4, 3, 4, 4, 4],
    summary:
      'was a German psychologist who pioneered the experimental study of memory, and is known for his discovery of the forgetting curve and the spacing effect. He was also the first person to describe the learning curve. He was the father of the neo-Kantian philosopher Julius Ebbinghaus.',
    ratesPerHour: 160,
    availabilitySlots: generateRosterInterval(startDate, endDate),
  },
  {
    name: 'Alfred Adler',
    profession: 'Therapist',
    location: 'Austria',
    complaints: [
      'Inferiority complex',
      'Individual psychology',
      'Style of life',
    ],
    summary:
      'Adler was the first to emphasize the importance of the social element in the re-adjustment process of the individual and who carried psychiatry into the community.[5] A Review of General Psychology survey, published in 2002, ranked Adler as the 67th most eminent psychologist of the 20th century',
    reviews: [2, 2, 2, 3, 3, 3, 1, 1, 2, 3, 4],
    ratesPerHour: 160,
    availabilitySlots: generateRosterInterval(startDate, endDate),
  },
]
