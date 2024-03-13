import { Platform } from "react-native"
import DeviceInfo from "react-native-device-info"
// import creditCardType from "credit-card-type"

export const BOOKING_STATUS = {
  CANCELLED: 3,
}

export const DIVISION = {
  APP_LAUNCH: 1, // アプリ起動,
  LOGIN: 2, // ログイン,
  START_USING: 3, // 利用開始,
  UNLOCK: 4, // 開錠,
  LOCK: 5, // 施錠,
  RETURN: 6, // 返却,
}

export const MIN_DATE = new Date("1930-01-01")

export const CURRENT_DATE = new Date()

export type STATUS_LOCK = "" | "LOCK" | "UNLOCK"

export const NUM_CARD_LIMIT = 5

export const webClientId =
  "376583074347-doj9v6h2ev5fm16g8pd1t9aira0pquk7.apps.googleusercontent.com"

export const TYPE_SOCIAL = {
  IMAGE: "IMAGE",
  MP3: "MP3",
  MP4: "MP4",
}

export const MAX_LENGTH = 10000

export const STATUS_TEST = {
  FAIL: "FAIL",
  PASS: "PASS",
}

export const Loading = {
  disable: "disable_loading",
  enable: "enable_loading",
}

export const LESSON_STATUS = {
  COMPLETED: "COMPLETED",
  UNCOMPLETED: "UNCOMPLETED",
}

export const INDIVIDUAL_USER = "INDIVIDUAL_USER"

export const iOS = Platform.OS === "ios"
export const Android = Platform.OS === "android"
export const isAndroid = Platform.OS === "android"
export const iPad = Platform.OS === "ios" && Platform.isPad
export const isTabletAndroid = Platform.OS === "android" && DeviceInfo.isTablet()

export const IOS_PLATFORM = Platform.OS === "ios"

export const GENDER = {
  MALE: "MALE",
  FEMALE: "FEMALE",
}

export const GENDER_LABEL = {
  MALE: "profileEdit.male",
  FEMALE: "profileEdit.feMale",
  NOT_SELECT: "profileEdit.none",
}

export const GENDER_VALUE = {
  MALE: 0,
  FEMALE: 1,
  NOT_SELECT: 2,
}

export const emailRegex = /^[a-zA-Z0-9@._-]*$/g

export const regexEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Minimum nine characters, at least one letter and one number
export const regexFormatPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/

// Minimum eight characters, at least one letter, one number and one special character
export const regexFormatPassword1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
export const regexFormatPassword2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

export const regexKatakana = /[\u{3000}-\u{301C}\u{30A1}-\u{30F6}\u{30FB}-\u{30FE}]/mu

export const regexSpace = /^\s+$/

// eslint-disable-next-line no-irregular-whitespace
export const regex01 = /[^\u3040-\u309f\uff60-\uffef\u30a0-\u30ff\-.•･ 　]/g

export const halfsizeAndAlphanumbericRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/

export const regexFullSize = /[\u30A0-\u30FF]/g

export const EVENT_LOG_OUT = "EVENT_LOG_OUT"
export const EVENT_RESET_AND_RECHECK_BIO = "EVENT_RESET_AND_RECHECK_BIO"

export const GG_VIEWER = "http://docs.google.com/gview?embedded=true&url="

// short card name
// export const CREDIT_CARD_TYPE = {
//   [creditCardType.types.VISA]: "VISA",
//   [creditCardType.types.MASTERCARD]: "MASTER",
//   [creditCardType.types.AMERICAN_EXPRESS]: "AMEX",
//   [creditCardType.types.DINERS_CLUB]: "DINERS",
//   [creditCardType.types.DISCOVER]: "DISCOVER",
//   [creditCardType.types.JCB]: "JCB",
//   [creditCardType.types.UNIONPAY]: "UNION",
//   [creditCardType.types.MAESTRO]: "MAESTRO",
//   [creditCardType.types.ELO]: "ELO",
//   [creditCardType.types.MIR]: "MIR",
//   [creditCardType.types.HIPER]: "HIPER",
//   [creditCardType.types.HIPERCARD]: "HIPERCARD",
// }

export const EKYC_UPDATE_URL = "https://user-uqey.dev-freekey.hitseries.com/ekyc.html"

export const URL_ADD_CARD_GMO = "http://13.112.200.121:8082/gmo_payment.html"

export const INJECTED_DISABLE_ZOOM =
  " const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); "
