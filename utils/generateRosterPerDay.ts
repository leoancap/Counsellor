import moment from "moment";
import { sampleSize, random } from "lodash";

const today = () => new Date().getDate();
const formatDate = "YYYY-MM-DDTHH:mm:ss.SSSZ";

export function generateRosterPerDay(startDay: number = today()) {
  const items = [];
  new Array(8).fill(null).forEach((_, index) => {
    items.push({
      start: moment({ day: startDay, hour: index + 9 }).format(formatDate),
      end: moment({ day: startDay, hour: index + 9, minute: 30 }).format(
        formatDate,
      ),
    });
    items.push({
      start: moment({ day: startDay, hour: index + 9, minute: 30 }).format(
        formatDate,
      ),
      end: moment({ day: startDay, hour: index + 10 }).format(formatDate),
    });
  });
  return sampleSize(items, random(1, 16));
}

export function generateRosterInterval(startDate: number, endDate: number) {
  const availabilitySlots = [];
  for (let i = startDate; i <= endDate; i++) {
    availabilitySlots.push(...generateRosterPerDay(i));
  }
  return availabilitySlots;
}