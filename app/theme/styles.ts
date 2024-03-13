import { responsive } from "@Utils"
import { StyleSheet } from "react-native"
import { color } from "./color"
import { fontFamily } from "./theme"

export const borderInputError = () => {
  return {
    ...appStyles.input,
    borderColor: color.borderInputProfile,
  }
}

export const appStyles = StyleSheet.create({
  bgImage: {
    height: responsive.HEIGHT,
    position: "absolute",
    width: responsive.WIDTH,
  },
  boxShadow: {
    elevation: 10,
    shadowColor: color.palette.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  buttonPrimary: {
    alignSelf: "center",
    backgroundColor: color.primary,
    borderRadius: responsive.widthNew0(58),
    overflow: "hidden",
  },
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: color.palette.white,
    borderColor: color.transparent,
    borderRadius: responsive.height(37),
    borderWidth: 1,
    fontFamily,
    height: responsive.widthNew(39),
    paddingHorizontal: responsive.width(36),
    padding: 0,
    width: "100%",
  },
})
