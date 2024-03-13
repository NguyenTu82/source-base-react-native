// import { save } from "./keychain"
// import { getAccessToken, getTouchIDCurrent, saveAccessToken } from "./storage"
// import axios from "axios"
// import { EventRegister, EVENT_LOGOUT } from "@Libs"
//
// // for multiple requests
// let isRefreshing = false
// let failedQueue = []
//
// const processQueue = (error, token = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) {
//       prom.reject(error)
//     } else {
//       prom.resolve(token)
//     }
//   })
//
//   failedQueue = []
// }
//
// export const interceptorOnError = (error) => {
//   const _axios = axios
//   const originalRequest = error.config
//
//   const token = getAccessToken()
//
//   if (!token) {
//     EventRegister.emit(EVENT_LOGOUT, null)
//     return Promise.reject(error)
//   }
//
//   if (error.response.status === 401 && !originalRequest?._retry) {
//     if (isRefreshing) {
//       return new Promise(function (resolve, reject) {
//         failedQueue.push({ resolve, reject })
//       })
//         .then((token) => {
//           originalRequest.headers.Authorization = "Bearer " + token
//           return _axios.request(originalRequest)
//         })
//         .catch((err) => {
//           return Promise.reject(err)
//         })
//     }
//
//     originalRequest._retry = true
//     isRefreshing = true
//
//     return new Promise((resolve, reject) => {
//       _axios
//         .post(originalRequest?.baseURL + "/refresh", null, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then(({ data }) => {
//           const token = data?.data?.access_token
//           saveAccessToken(token)
//           originalRequest.headers.Authorization = "Bearer " + token
//           const username = getTouchIDCurrent()
//           if (username) save(username, token)
//           processQueue(null, token)
//           resolve(_axios(originalRequest))
//         })
//         .catch((err) => {
//           EventRegister.emit(EVENT_LOGOUT, null)
//           processQueue(err, null)
//           reject(err)
//         })
//         .finally(() => {
//           isRefreshing = false
//         })
//     })
//   }
//
//   return Promise.reject(error)
// }
