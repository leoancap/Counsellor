import { random, sampleSize } from 'lodash'
import moment from 'moment'

const dayOfTheMonth = () => new Date().getDate()
const monthOfTheYear = () => new Date().getMonth()

const formatDate = 'YYYY-MM-DDTHH:mm:ss.SSSZ'

export function generateRosterPerDay(startDay: number = dayOfTheMonth()) {
  const items = []
  new Array(8).fill(null).forEach((_, index) => {
    items.push({
      start: moment({
        month: monthOfTheYear() + Math.floor(startDay / 31),
        day: startDay % 31,
        hour: index + 9,
      }).format(formatDate),
      end: moment({
        month: monthOfTheYear() + Math.floor(startDay / 31),
        day: startDay % 31,
        hour: index + 9,
        minute: 30,
      }).format(formatDate),
    })
    items.push({
      start: moment({
        month: monthOfTheYear() + Math.floor(startDay / 31),
        day: startDay % 31,
        hour: index + 9,
        minute: 30,
      }).format(formatDate),
      end: moment({
        month: monthOfTheYear() + Math.floor(startDay / 31),
        day: startDay % 31,
        hour: index + 10,
      }).format(formatDate),
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
