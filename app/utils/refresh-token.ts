// import axios from "axios"
// import { getAccessToken } from "@Utils/storage"
// import { getRootStore } from "@Models"
// import { EventRegister, EVENT_LOGOUT } from "@Libs"
//
// let isAlreadyFetchingAccessToken = false
// let subscribers = []
//
// function onAccessTokenFetched(accessToken) {
//   subscribers.forEach((callback) => callback(accessToken))
//   subscribers = []
// }
//
// function addSubscriber(callback) {
//   subscribers.push(callback)
// }
//
// /**
//  * @author thanhnn@bap.jp - hungdq2@bap.jp
//  * Refresh token service - this function handle status 401 when token is expired or refresh token is invalid
//  * @param error
//  */
// export async function resetTokenService(error) {
//   try {
//     const { response: errorResponse } = error
//     const token = getAccessToken()
//
//     if (!token) {
//       return Promise.reject(error)
//     }
//
//     const { authStore } = getRootStore()
//
//     const retryOriginalRequest = new Promise((resolve) => {
//       addSubscriber((accessToken) => {
//         errorResponse.config.headers.Authorization = `Bearer ${accessToken}`
//         resolve(axios(errorResponse.config))
//       })
//     })
//     if (!isAlreadyFetchingAccessToken) {
//       isAlreadyFetchingAccessToken = true
//       const response = await authStore.refreshTokenAction()
//       if (response.kind !== "ok") {
//         // refresh token does not exist in db > can't refresh token > reset app
//         EventRegister.emit(EVENT_LOGOUT, null)
//         isAlreadyFetchingAccessToken = false
//         return Promise.reject(error)
//       }
//       // refresh new token
//       const newToken = response.data.access_token
//       onAccessTokenFetched(newToken)
//       isAlreadyFetchingAccessToken = false
//     }
//     return retryOriginalRequest
//   } catch (err) {
//     return Promise.reject(err)
//   }
// }
