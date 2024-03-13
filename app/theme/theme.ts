import { createTheme } from "@shopify/restyle"
import { responsive } from "@Utils"
import { Platform } from "react-native"
import { color } from "./color"

import { palette } from "./palette"
import { spacingObj } from "./spacing"

export const fontFamily = Platform.select({
  ios: "NotoSansJP-Regular", // The font family name
  android: "NotoSansJP", // The file name
})

export const fontFamilyEN = Platform.select({
  ios: "Roboto-Regular", // The font family name
  android: "Roboto", // The file name
})

export const lightTheme: any = createTheme({
  colors: {
    ...palette,
    ...color,
  } as any,
  spacing: {
    ...spacingObj,
  } as any,
  textInputVariants: {
    defaults: {
      fontFamily: fontFamilyEN,
    },
    "fs:40:400:1": {
      fontSize: 12,
      fontWeight: "400",
      height: 50,
      fontFamily: fontFamilyEN,
    },
    "fs:40:400": {
      fontSize: 12,
      fontWeight: "400",
      height: responsive.height(92),
      fontFamily: fontFamilyEN,
    },
    "fs:40:400:54": {
      fontSize: responsive.width(40),
      fontWeight: "400",
      lineHeight: responsive.width(54.48),
      fontFamily: fontFamilyEN,
    },
    "fs:40:400:0": {
      fontSize: responsive.width(40),
      fontWeight: "400",
      lineHeight: responsive.width(0),
      fontFamily: fontFamilyEN,
    },
    "fs:40:400:2": {
      fontSize: responsive.width(40),
      fontWeight: "400",
      lineHeight: responsive.width(40 * 1.5),
      fontFamily: fontFamilyEN,
    },
    "fsn:14:400": {
      fontSize: responsive.widthNew0(14),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(14 * 1.5),
      fontFamily: fontFamilyEN,
    },
    "fsn:14:400:0": {
      fontSize: responsive.widthNew0(14),
      fontWeight: "400",
      fontFamily: fontFamilyEN,
    },
    "fsn:16:400:0": {
      fontSize: responsive.widthNew0(16),
      fontWeight: "400",
      fontFamily: fontFamilyEN,
    },
    "fsn:12:400": {
      fontSize: responsive.widthNew0(12),
      fontWeight: "400",
      fontFamily,
    },
    "fsn:16:400": {
      fontSize: responsive.widthNew0(16),
      fontWeight: "400",
      fontFamily,
    },
    "fsn:20:400:0": {
      fontSize: responsive.widthNew0(20),
      fontWeight: "400",
      fontFamily: fontFamilyEN,
    },
  },
  textVariants: {
    emoji: {
      fontSize: 50,
      fontFamily,
    },
    defaults: {
      fontSize: 16,
      fontFamily,
    },
    normal: {
      fontWeight: "bold",
      fontSize: 16,
      fontFamily,
    },
    h1: {
      fontWeight: "bold",
      fontSize: 28,
      fontFamily,
    },
    h2: {
      fontSize: 28,
      fontFamily,
    },
    "fs:90:400": {
      fontSize: responsive.width(90),
      fontWeight: "400",
      lineHeight: responsive.width(114.7),
      fontFamily,
    },
    "fs:70:400": {
      fontSize: responsive.width(70),
      fontWeight: "400",
      lineHeight: responsive.width(89.21),
      fontFamily,
    },
    "fs:32:400": {
      fontSize: responsive.width(32),
      fontWeight: "400",
      lineHeight: responsive.width(40.78),
      fontFamily,
    },

    "fs:36:400": {
      fontSize: responsive.width(36),
      fontWeight: "400",
      lineHeight: responsive.width(49.68),
      fontFamily,
    },
    "fs:48:400": {
      fontSize: responsive.width(48),
      fontWeight: "400",
      lineHeight: responsive.width(56.63),
      fontFamily,
    },
    "fs:48:400:0": {
      fontSize: responsive.width(48),
      fontWeight: "400",
      lineHeight: responsive.width(48 * 1.5),
      fontFamily,
    },
    "fs:64:400": {
      fontSize: responsive.width(64),
      fontWeight: "400",
      lineHeight: responsive.width(88.63),
      fontFamily,
    },
    "fs:40:400": {
      fontSize: responsive.width(40),
      fontWeight: "400",
      lineHeight: responsive.width(40),
      fontFamily,
    },
    "fs:60:400": {
      fontSize: responsive.width(60),
      fontWeight: "400",
      lineHeight: responsive.width(72.61),
      fontFamily,
    },
    "fs:30:700": {
      fontSize: responsive.width(30),
      fontWeight: "700",
      lineHeight: responsive.width(45),
      fontFamily,
    },
    "fs:30:400": {
      fontSize: responsive.width(30),
      fontWeight: "400",
      lineHeight: responsive.width(45),
      fontFamily,
    },
    "fs:40:400:54": {
      fontSize: responsive.width(40),
      fontWeight: "400",
      lineHeight: responsive.width(54.98),
      fontFamily,
    },
    "fs:40:400:1": {
      fontSize: responsive.width(40),
      fontWeight: "400",
      lineHeight: responsive.width(50.98),
      fontFamily,
    },
    "fs:36:400:1": {
      fontSize: responsive.width(36),
      fontWeight: "400",
      lineHeight: responsive.width(43.2),
      fontFamily,
    },
    "fs:36:400:2": {
      fontSize: responsive.width(36),
      fontWeight: "400",
      lineHeight: responsive.width(50 * 1.5),
      fontFamily,
    },
    "fs:45:400": {
      fontSize: responsive.width(45),
      fontWeight: "400",
      lineHeight: responsive.width(54),
      fontFamily,
    },
    "fs:32:400:1": {
      fontSize: responsive.width(32),
      fontWeight: "400",
      lineHeight: responsive.width(38.4),
      fontFamily,
    },
    "fs:70:400:1": {
      fontSize: responsive.width(70),
      fontWeight: "400",
      lineHeight: responsive.width(96.6),
      fontFamily,
    },
    "fs:30:400:1": {
      fontSize: responsive.width(30),
      fontWeight: "400",
      lineHeight: responsive.width(36),
      fontFamily,
    },
    "fs:35:400": {
      fontSize: responsive.width(35),
      fontWeight: "400",
      lineHeight: responsive.width(41.29),
      fontFamily,
    },
    "fs:24:700": {
      fontSize: responsive.width(24),
      fontWeight: "700",
      lineHeight: responsive.width(24 * 1.5),
      fontFamily,
    },
    "fs:64:700": {
      fontSize: responsive.width(64),
      fontWeight: "400",
      lineHeight: responsive.width(64 * 1.5),
      fontFamily,
    },
    "fs:32:700": {
      fontSize: responsive.width(32),
      fontWeight: "700",
      lineHeight: responsive.width(24),
      fontFamily,
    },
    "fs:32:700:1": {
      fontSize: responsive.width(32),
      fontWeight: "700",
      fontFamily,
    },
    "fs:24:400": {
      fontSize: responsive.width(24),
      fontWeight: "700",
      lineHeight: responsive.width(24),
      fontFamily,
    },
    "fs:24:400:0": {
      fontSize: responsive.width(24),
      fontWeight: "700",
      lineHeight: responsive.width(24 * 1.5),
      fontFamily,
    },
    "fs:28:700": {
      fontSize: responsive.width(24),
      fontWeight: "700",
      lineHeight: responsive.width(24),
      fontFamily,
    },
    "fs:26:400": {
      fontSize: responsive.width(24),
      fontWeight: "700",
      lineHeight: responsive.width(24),
      fontFamily,
    },
    "fs:36:700:1": {
      fontSize: responsive.width(36),
      fontWeight: "700",
      lineHeight: responsive.width(43.2),
      fontFamily,
    },
    "fs:50:700": {
      fontSize: responsive.width(50),
      fontWeight: "700",
      lineHeight: responsive.width(50 * 1.5),
      fontFamily,
    },
    "fs:50:400": {
      fontSize: responsive.width(50),
      fontWeight: "400",
      lineHeight: responsive.width(50 * 1.3),
      fontFamily,
    },
    "fs:50:400:1": {
      fontSize: responsive.width(50),
      fontWeight: "400",
      lineHeight: responsive.width(50 * 1.5),
      fontFamily,
    },
    "fs:20:400": {
      fontSize: responsive.width(20),
      fontWeight: "400",
      fontFamily,
    },
    "fs:15:400": {
      fontSize: responsive.width(15),
      fontWeight: "400",
      fontFamily,
    },
    "fs:40:400:0": {
      fontSize: responsive.width(40),
      fontWeight: "400",
      lineHeight: responsive.width(48.1),
      fontFamily,
    },
    "fs:45:400:0": {
      fontSize: responsive.width(45),
      fontWeight: "400",
      fontFamily,
    },
    "fs:30:400:0": {
      fontSize: responsive.width(30),
      fontWeight: "400",
      fontFamily,
    },
    "fs:32:700:0": {
      fontSize: responsive.width(32),
      fontWeight: "700",
      lineHeight: responsive.width(0),
      fontFamily,
    },
    "fs:32:400:0": {
      fontSize: responsive.width(32),
      fontWeight: "400",
      lineHeight: responsive.width(32 * 1.5),
      fontFamily,
    },
    "fs:36:700:0": {
      fontSize: responsive.width(36),
      fontWeight: "700",
      lineHeight: responsive.width(36 * 1.5),
      fontFamily,
    },
    "fs:40:700": {
      fontSize: responsive.width(40),
      fontWeight: "700",
      lineHeight: responsive.width(40 * 1.5),
      fontFamily,
    },
    "fs:40:400:2": {
      fontSize: responsive.width(40),
      fontWeight: "400",
      lineHeight: responsive.width(40 * 1.5),
      fontFamily,
    },
    "fsn:12:200": {
      fontSize: responsive.widthNew0(12),
      fontWeight: "200",
      lineHeight: responsive.widthNew0(12 * 1.5),
      fontFamily,
    },
    "fsn:14:200": {
      fontSize: responsive.widthNew0(14),
      fontWeight: "200",
      lineHeight: responsive.widthNew0(14 * 1.5),
      fontFamily,
    },
    "fsn:16:200": {
      fontSize: responsive.widthNew0(16),
      fontWeight: "200",
      lineHeight: responsive.widthNew0(14 * 1.5),
      fontFamily,
    },
    "fsn:12:400": {
      fontSize: responsive.widthNew0(12),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(12 * 1.5),
      fontFamily,
    },
    "fsn:12:700": {
      fontSize: responsive.widthNew0(12),
      fontWeight: "700",
      lineHeight: responsive.widthNew0(12 * 1.5),
      fontFamily,
    },
    "fsn:14:400": {
      fontSize: responsive.widthNew0(14),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(14 * 1.5),
      fontFamily,
    },
    "fsn:16:400": {
      fontSize: responsive.widthNew0(16),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(16 * 1.5),
      fontFamily,
    },
    "fsn:10:400": {
      fontSize: responsive.widthNew0(10),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(10 * 1.5),
      fontFamily,
    },
    "fsn:20:700": {
      fontSize: responsive.widthNew0(20),
      fontWeight: "700",
      lineHeight: responsive.widthNew0(20 * 1.5),
      fontFamily,
    },
    "fsn:8:400": {
      fontSize: responsive.widthNew0(8),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(8 * 1.5),
      fontFamily,
    },
    "fsn:7:400": {
      fontSize: responsive.widthNew0(7),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(7 * 1.5),
      fontFamily,
    },
    "fs:36:400:en": {
      fontSize: responsive.width(36),
      fontWeight: "400",
      lineHeight: responsive.width(36 * 1.5),
      fontFamily: fontFamilyEN,
    },
    "fs:30:400:en": {
      fontSize: responsive.width(30),
      fontWeight: "400",
      lineHeight: responsive.width(45),
      fontFamily: fontFamilyEN,
    },
    "fs:40:700:en": {
      fontSize: responsive.width(40),
      fontWeight: "700",
      lineHeight: responsive.width(40),
      fontFamily: fontFamilyEN,
    },
    "fsn:16:400:0": {
      fontSize: responsive.widthNew0(16),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(16 * 1.5),
      fontFamily,
    },
    "fsn:16:400:1": {
      fontSize: responsive.widthNew0(16),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(21),
      fontFamily,
    },
    "fsn:15:400": {
      fontSize: responsive.widthNew0(15),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(15 * 1.5),
      fontFamily,
    },
    "fsn:18:400": {
      fontSize: responsive.widthNew0(18),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(18 * 1.5),
      fontFamily,
    },
    "fsn:16:700": {
      fontSize: responsive.widthNew0(16),
      fontWeight: "700",
      lineHeight: responsive.widthNew0(16 * 1.5),
      fontFamily,
    },
    "fsn:14:700": {
      fontSize: responsive.widthNew0(14),
      fontWeight: "700",
      lineHeight: responsive.widthNew0(14 * 1.5),
      fontFamily,
    },
    "fsn:20:400": {
      fontSize: responsive.widthNew0(20),
      lineHeight: responsive.widthNew0(20 * 1.5),
      fontWeight: "400",
      fontFamily,
    },
    "fsn:24:700": {
      fontSize: responsive.widthNew0(24),
      fontWeight: "700",
      lineHeight: responsive.widthNew0(24 * 1.5),
      fontFamily,
    },
    "fsn:24:400": {
      fontSize: responsive.widthNew0(24),
      fontWeight: "400",
      lineHeight: responsive.widthNew0(24 * 1.5),
      fontFamily,
    },
    "fsn:18:700": {
      fontSize: responsive.widthNew0(18),
      fontWeight: "700",
      lineHeight: responsive.widthNew0(18 * 1.5),
      fontFamily,
    },
    "fsn:13:400": {
      fontSize: responsive.widthNew0(13),
      fontWeight: "400",
      fontFamily,
    },
    "fsn:20:400:0": {
      fontSize: responsive.widthNew0(20),
      lineHeight: responsive.widthNew0(20 * 1.3),
      fontWeight: "400",
      fontFamily,
    },
    "fsn:14:400:0": {
      fontSize: responsive.widthNew0(14),
      fontWeight: "400",
      fontFamily: fontFamilyEN,
      lineHeight: responsive.widthNew0(16),
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024,
  },
  isDark: false,
})

export type Theme = typeof lightTheme

export const darkTheme: Theme = {
  ...lightTheme,
  isDark: true,
  colors: {
    ...lightTheme.colors,
    background: palette.black,
    highlight: palette.white,
    text: palette.white,
  },
}
