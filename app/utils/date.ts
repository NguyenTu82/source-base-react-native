import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween"
dayjs.extend(isBetween)

export const FormatCommon = "YYYY/MM/DD"

export function dateFormat2String(date: Date, format = "MM/DD/YYYY"): string {
  return dayjs(date).format(format)
}

export function stringDate2String(date: string, format = "MM/DD/YYYY"): string {
  if (date !== "") {
    return dateFormat2String(new Date(date), format)
  }

  return dateFormat2String(new Date(), format)
}

export function stringToDate(date?: string): Date {
  if (date) return new Date(date)
  return new Date()
}

export const isInRange = (timeStr: string, startStr: string, endStr: string, validDate: string) => {
  if (!timeStr || !startStr || !endStr || !validDate) return false

  const startDay = dayjs(startStr).subtract(30, "minute").format("YYYY-MM-DD HH:mm:ss")
  const endDay = dayjs.utc(endStr)
  const validDay = dayjs.utc(validDate)

  return (
    dayjs(timeStr).isBetween(startDay, endStr, "second", "[]") &&
    (validDay.isAfter(endDay, "day") || validDay.isSame(endDay, "day"))
  )
}

export const isBefore = (timeStr: string, endStr: string) => {
  if (!endStr) return false
  // const end = dayjs(endStr).add(9, "hour")
  let _timeStr = timeStr || undefined
  if (_timeStr === "now") _timeStr = undefined
  return dayjs(_timeStr).isBefore(endStr, "second")
}

export const verifyBirthday = (date: string) => {
  if (!date) return false
  const currentDate = dayjs(new Date())
  const validDate = currentDate.subtract(17, "years").subtract(10, "months")
  const selectedDate = dayjs.utc(date)
  return selectedDate.isBefore(validDate, "day") || selectedDate.isSame(validDate, "day")
}
