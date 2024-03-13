// import { trimString } from "@Utils"
// import axios from "axios"
// import Config from "react-native-config"
// import { LatLng } from "react-native-maps"
// const API_URL = "https://maps.googleapis.com/maps/api/place"
// const API_KEY = Config.API_KEY
//
// export type Prediction = {
//   description?: string
//   place_id?: string
// }
//
// export type SearchResponse = Prediction[]
//
// export type SearchDetailResponse = {
//   location: LatLng
//   isRegion: boolean
// }
//
// export const searchPlaceByText = async (txt: string): Promise<SearchResponse> => {
//   txt = trimString(txt)
//   const p0 = axios.get(
//     `${API_URL}/autocomplete/json?components=country:jp&language=ja&types=(regions)&input=${txt}&key=${API_KEY}`,
//   )
//
//   const p1 = axios.get(
//     `${API_URL}/autocomplete/json?components=country:jp&language=ja&input=${txt}&key=${API_KEY}`,
//   )
//
//   const p2 = axios.get(
//     `${API_URL}/autocomplete/json?components=country:jp&types=address&language=ja&input=${txt}&key=${API_KEY}`,
//   )
//
//   const [res0, res1, res2] = await Promise.all([p0, p1, p2])
//   const data0 = res0?.data?.status === "OK" ? res0?.data : {}
//   const data1 = res1?.data?.status === "OK" ? res1?.data : {}
//   const data2 = res2?.data?.status === "OK" ? res2?.data : {}
//
//   const regions = data0?.predictions
//     ?.filter((item) => item?.structured_formatting?.main_text?.includes(txt))
//     ?.map((item) => ({
//       place_id: item?.place_id,
//       description: item?.structured_formatting?.main_text,
//     }))
//
//   const dataAll = data1?.predictions?.map((item) => ({
//     place_id: item?.place_id,
//     description: item?.structured_formatting?.main_text,
//   }))
//
//   let data = [...(regions ?? []), ...(dataAll ?? []), ...(data2?.predictions ?? [])]
//
//   data = data?.filter((item, index, self) => {
//     const idx = self?.findIndex((item1) => item?.description === item1?.description)
//     return index === idx
//   })
//
//   return data
// }
//
// const TYPES_REGION = ["colloquial_area", "locality", "political"]
//
// const checkIsRegion = (list: string[]) => {
//   const l = list?.filter((item) => TYPES_REGION?.includes(item))
//   return l?.length > 0
// }
//
// export const getPlaceById = async (placeId: string): Promise<SearchDetailResponse> => {
//   const rs = await axios.get(
//     `${API_URL}/details/json?place_id=${placeId}&fields=geometry,type&key=${API_KEY}`,
//   )
//   return rs?.data?.status === "OK"
//     ? {
//         location: {
//           longitude: rs?.data?.result?.geometry?.location?.lng,
//           latitude: rs?.data?.result?.geometry?.location?.lat,
//         },
//         isRegion: checkIsRegion(rs?.data?.result?.types),
//       }
//     : null
// }
