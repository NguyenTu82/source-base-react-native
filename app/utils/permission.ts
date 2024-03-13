// import { translate } from "@I18n"
// import { Alert, Platform } from "react-native"
// import Config from "react-native-config"
// import {
//   checkMultiple,
//   openSettings,
//   PERMISSIONS,
//   requestMultiple,
//   RESULTS,
//   Permission,
// } from "react-native-permissions"
// import { ResultMap } from "react-native-permissions/dist/typescript/results"
// import { isAndroid } from "./constant"
// import { delay } from "./delay"
//
// type PermissionStatusResult = ResultMap[keyof ResultMap]
// type PermissionStatusRecord = Record<Permission, PermissionStatusResult>
//
// const isGranted = (statuses: PermissionStatusRecord) =>
//   Object.values(statuses).every((stt) => stt === RESULTS.GRANTED)
//
// const isBelowAndroid12 = isAndroid && Platform.Version < 31
//
// export const checkPermissionBluetooth = async () => {
//   let permissions: Permission[] = Platform.select({
//     ios: [PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL],
//     // DOCS: https://developer.android.com/guide/topics/connectivity/bluetooth/permissions#declare-android12-or-higher
//     //  >= Android 12 (API level 31)
//     android: [
//       PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
//       PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
//       PERMISSIONS.ANDROID.BLUETOOTH_ADVERTISE,
//     ],
//   })
//
//   //  < Android 12
//   if (isBelowAndroid12) permissions = [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]
//
//   let results = await checkMultiple(permissions)
//   if (isGranted(results)) return true
//
//   results = await requestMultiple(permissions)
//   if (isGranted(results)) return true
//
//   await requestSettings("鍵接続するため、Bluetoothをオンにしてください")
//   return false
// }
//
// export const checkPermissionMap = async () => {
//   if (isAndroid && Platform.Version < 23) return true
//
//   const permissions: Permission[] = Platform.select({
//     ios: [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
//     android: [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION],
//   })
//
//   let results = await checkMultiple(permissions)
//   if (isGranted(results)) return true
//
//   results = await requestMultiple(permissions)
//   if (isGranted(results)) return true
//
//   await requestSettings(
//     `位置情報サービスをオンにして、${Config.APP_NAME}に位置アクセス権限を付与してください。`,
//   )
//
//   return false
// }
//
// export const requestSettings = async (message?: string) => {
//   Alert.alert("", message, [
//     { text: translate("common.cancel1"), style: "cancel" },
//     { text: translate("common.goToSetting"), onPress: () => openSettings() },
//   ])
//
//   await delay(1000)
// }
