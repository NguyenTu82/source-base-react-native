// import { Station } from "@Models"
import dayjs from "dayjs"
import { Insets } from "react-native"
// import { LatLng } from "react-native-maps"
import duration from "dayjs/plugin/duration"
import utc from "dayjs/plugin/utc"
// import { ResultType } from "@NativeModule/types"
import { translate } from "@I18n"
// import messaging from "@react-native-firebase/messaging"
// import valid from "card-validator"
// import { CREDIT_CARD_TYPE } from "@Utils/constant"

dayjs.extend(duration)
dayjs.extend(utc)

const TIME_FORMAT = "HH:mm"
const DATE_FORMAT = "MM/DD"

const TIMES = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
]

const genTime = () => {
  const time = dayjs().format(TIME_FORMAT)
  const current = time?.split(":")
  const hour = Number(current?.[0])
  const minute = Number(current?.[1])
  return TIMES.filter((item) => {
    const c = item?.split(":")
    const h = Number(c?.[0])
    const m = Number(c?.[1])
    return (h === hour && m >= minute) || h > hour
  })
}

export const genTimes = (full = false) => {
  if (full) return TIMES
  return genTime()
}

export const genDays = () => {
  const list = []
  let flag = false
  let date = dayjs("2021-08-01")
  while (!flag) {
    date = date.add(1, "day")
    if (date.date() < 30) {
      list.push(date.format(DATE_FORMAT))
    } else {
      flag = true
    }
  }
  return list
}

// export const haversineDistance = (latlngA: Station, latlngB: LatLng, isMiles: boolean) => {
//   const squared = (x) => x * x
//   const toRad = (x) => (x * Math.PI) / 180
//   const R = 6371 // Earth’s mean radius in km
//
//   const dLat = toRad(latlngB.latitude - parseFloat(latlngA.latitude))
//   const dLon = toRad(latlngB.longitude - parseFloat(latlngA.longitude))
//
//   const dLatSin = squared(Math.sin(dLat / 2))
//   const dLonSin = squared(Math.sin(dLon / 2))
//
//   const a =
//     dLatSin + Math.cos(toRad(latlngA.latitude)) * Math.cos(toRad(latlngB.latitude)) * dLonSin
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
//   let distance = R * c
//
//   if (isMiles) distance /= 1.609344
//
//   return distance
// }

// export const getPointInArea = (list: Station[], point: LatLng, maxDis: number) => {
//   const ps: Station[] = []
//   list.forEach((item) => {
//     const dis = haversineDistance(item, point, false)
//     if (dis && dis <= maxDis) ps.push(item)
//   })
//   return ps
// }

export const formatPrice = (price: string | number) => {
  return `￥${price ?? "--"}/分`
}

export const calDuration = (start: string, end: string) => {
  if (!dayjs(start).isValid() || !dayjs(end).isValid()) return ""
  const gap = dayjs(end).diff(dayjs(start))
  const hours = dayjs.duration(gap, "millisecond").asHours()
  return `${Math.floor(hours)}分${(hours - Math.floor(hours)) * 60}分`
}

export const formatToHourMinute = (time: string) => {
  try {
    if (!time) return null
    const t = parseFloat(time)
    if (t <= 0) return null
    const hours = Math.floor(t / 60)
    const minutes = t - hours * 60
    return `${hours}時間${minutes}分`
  } catch (error) {
    return null
  }
}

export const calDurationToHours = (start: string, end: string, onlyFormat = true) => {
  if (!dayjs(start).isValid() || !dayjs(end).isValid()) {
    if (onlyFormat) return ""
    return {
      hours: 0,
      text: "",
    }
  }
  const gap = dayjs.utc(end).diff(dayjs.utc(start))
  const hours = dayjs.duration(gap, "millisecond").asMinutes()
  // const text = `${formatToLocaleString(Number(hours?.toFixed(2)))}分`
  const text = formatToHourMinute(hours?.toString())
  if (!onlyFormat)
    return {
      hours,
      text,
    }
  return text
}

export const formatDateNoYear = (date: string) => {
  const day = dayjs(date)
  return day.isValid() ? day.format("MM/DD") : ""
}

export const formatToLocaleString = (num: number) => {
  if (!num && num !== 0) return "--"
  return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const genHitSlop = (space: number, type?: "horizontal" | "vertical"): Insets => {
  switch (type) {
    case "horizontal":
      return {
        left: space,
        right: space,
        top: 0,
        bottom: 0,
      }
    case "vertical":
      return {
        top: space,
        bottom: space,
        left: 0,
        right: 0,
      }
    default:
      return {
        bottom: space,
        top: space,
        left: space,
        right: space,
      }
  }
}

export const formatDateTime = (date: string) => {
  if (!dayjs(date).isValid()) return ""
  return dayjs.utc(date).format("YYYY/MM/DD HH:mm")
}

export const removeElementById = (list: any[], id: string | number) => {
  return list?.filter((item) => item?.id !== id)
}

// export const genLngLat = (str: string) =>
//   ({
//     latitude: parseFloat(str.split(",")[0]),
//     longitude: parseFloat(str.split(",")[1]),
//   } as unknown as LatLng)

export const genPhoneJapan = (phone: string) => {
  if (!phone) return ""
  if (phone.charAt(0) === "0") return `81${phone.slice(1)}`
  return phone
}

export const maskCreditCard = (card) => {
  if (!card) return null
  return card
    .replace(/.(?=.{4})/g, "*")
    .match(/.{1,4}/g)
    .join(" ")
}

export const convertFullToHalf = (str: string) =>
  str?.replace(/[！-～]/g, (r) => String.fromCharCode(r.charCodeAt(0) - 0xfee0)) ?? ""

export const debounce = (func, timeout = 0) => {
  if (!func) return
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

export const trimString = (txt: string) =>
  convertFullToHalf(txt)
    ?.trim()
    ?.replace(/\s{2,}/g, " ") ?? ""

export const trimAll = (data: any) => {
  const dataTrimmed = {}
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = trimString(data[key])
      dataTrimmed[key] = element
    }
  }
  return dataTrimmed
}

// export const getErrorMessage = (error: string) => {
//   const isSdkError = Object.keys(ResultType).includes(error)
//   if (isSdkError) return translate(`errors.${error}`)
//   return translate("errors.system")
// }

// export const getFCMToken = async () => {
//   let fcm
//   try {
//     await messaging().registerDeviceForRemoteMessages()
//     fcm = await messaging().getToken()
//   } catch (_) {}
//   return fcm
// }

// export const getTypeCreditCard = (cardNumber: string) => {
//   const infoCard = valid.number(cardNumber)
//   if (infoCard?.card) {
//     const typeC = infoCard?.card?.type || ""
//     return CREDIT_CARD_TYPE[typeC] || ""
//   }
//   return ""
// }
