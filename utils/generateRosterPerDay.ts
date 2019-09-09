import moment from 'moment'
import { sampleSize, random } from 'lodash'

const dayOfTheMonth = () => new Date().getDate()
const formatDate = 'YYYY-MM-DDTHH:mm:ss.SSSZ'

export function generateRosterPerDay(startDay: number = dayOfTheMonth()) {
  const items = []
  new Array(8).fill(null).forEach((_, index) => {
    items.push({
      start: moment({ day: startDay, hour: index + 9 }).format(formatDate),
      end: moment({ day: startDay, hour: index + 9, minute: 30 }).format(
        formatDate,
      ),
    })
    items.push({
      start: moment({ day: startDay, hour: index + 9, minute: 30 }).format(
        formatDate,
      ),
      end: moment({ day: startDay, hour: index + 10 }).format(formatDate),
    })
  })
  const sample = sampleSize(items, random(0, 12))
  sample.sort((a, b) => moment(a.start).valueOf() - moment(b.start).valueOf())
  return sample
}

export function generateRosterInterval(startDate: number, endDate: number) {
  const availabilitySlots = []
  for (let i = startDate; i <= endDate; i++) {
    availabilitySlots.push(...generateRosterPerDay(i))
  }
  return availabilitySlots
}
