import { Dimensions, PixelRatio } from "react-native"
import { iPad, isTabletAndroid } from "./constant"

const { width: DEVICE_SCREEN_WIDTH, height: DEVICE_SCREEN_HEIGHT } = Dimensions.get("screen")

const DESIGN_SCREEN_WIDTH = 1170
const DESIGN_SCREEN_HEIGHT = 2532

const DESIGN_SCREEN_WIDTH_NEW = 384.34
const DESIGN_SCREEN_HEIGHT_NEW = 834.49

const DESIGN_SCREEN_WIDTH_NEW_0 = 390
const DESIGN_SCREEN_HEIGHT_NEW_0 = 844

const widthNew0 = (designWidth: number) => {
  const elemWidth = typeof designWidth === "number" ? designWidth : parseFloat(designWidth)
  const tabletWidth = iPad || isTabletAndroid ? 2 : 1
  return PixelRatio.roundToNearestPixel(
    (DEVICE_SCREEN_WIDTH * elemWidth) / tabletWidth / DESIGN_SCREEN_WIDTH_NEW_0,
  )
}

const heightNew0 = (designHeight: number) => {
  const elemHeight = typeof designHeight === "number" ? designHeight : parseFloat(designHeight)
  return PixelRatio.roundToNearestPixel(
    (DEVICE_SCREEN_HEIGHT * elemHeight) / DESIGN_SCREEN_HEIGHT_NEW_0,
  )
}

const widthNew = (designWidth: number) => {
  const elemWidth = typeof designWidth === "number" ? designWidth : parseFloat(designWidth)
  const tabletWidth = iPad || isTabletAndroid ? 2 : 1
  return PixelRatio.roundToNearestPixel(
    (DEVICE_SCREEN_WIDTH * elemWidth) / tabletWidth / DESIGN_SCREEN_WIDTH_NEW,
  )
}

const heightNew = (designHeight: number) => {
  const elemHeight = typeof designHeight === "number" ? designHeight : parseFloat(designHeight)
  return PixelRatio.roundToNearestPixel(
    (DEVICE_SCREEN_HEIGHT * elemHeight) / DESIGN_SCREEN_HEIGHT_NEW,
  )
}

const width = (designWidth: number) => {
  const elemWidth = typeof designWidth === "number" ? designWidth : parseFloat(designWidth)
  const tabletWidth = iPad || isTabletAndroid ? 2 : 1
  return PixelRatio.roundToNearestPixel(
    (DEVICE_SCREEN_WIDTH * elemWidth) / tabletWidth / DESIGN_SCREEN_WIDTH,
  )
}

const height = (designHeight: number) => {
  const elemHeight = typeof designHeight === "number" ? designHeight : parseFloat(designHeight)
  return PixelRatio.roundToNearestPixel((DEVICE_SCREEN_HEIGHT * elemHeight) / DESIGN_SCREEN_HEIGHT)
}

export const responsive = {
  width,
  height,
  WIDTH: DEVICE_SCREEN_WIDTH,
  HEIGHT: DEVICE_SCREEN_HEIGHT,
  widthNew,
  heightNew,
  widthNew0,
  heightNew0,
}
