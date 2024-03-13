import { ConfirmModal, ErrorModal } from "@Components"
import { ResponsiveValue, ThemeProvider } from "@shopify/restyle"
import { responsive } from "@Utils"
import React from "react"
import {
  ActivityIndicator,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native"
import { ModalPortal } from "react-native-modals"
import RootSiblings from "react-native-root-siblings"
import { color, lightTheme } from "@Theme"

const modal: any = ModalPortal

const loadingIds: string[] = []
const modalIds: string[] = []

export const siblings = []

export function hideLoading() {
  const id = loadingIds.shift()
  modal.dismiss(id)
}

export function showLoading() {
  const id = modal.show(<ActivityIndicator color="white" />, {
    modalStyle: { backgroundColor: "transparent" },
  })
  loadingIds.push(id)
}

export function hideModalComponent() {
  const id = modalIds.shift()
  modal.dismiss(id)
}

export function showModalComponent(Component: React.FC) {
  const id = modal.show(<Component />, {
    modalStyle: { backgroundColor: "transparent" },
    onTouchOutside: hideModalComponent,
  })
  modalIds.push(id)
}

export function showCustomDialog(component, isHide = false) {
  const style = {
    width: responsive.WIDTH,
    height: responsive.HEIGHT,
  }

  const sibling = new RootSiblings(
    (
      <ThemeProvider theme={lightTheme}>
        {isHide ? (
          <TouchableWithoutFeedback onPress={hideCustomDialog}>
            <View style={[styles.backDrop, style]}>{component}</View>
          </TouchableWithoutFeedback>
        ) : (
          <View style={[styles.backDrop, style]}>{component}</View>
        )}
      </ThemeProvider>
    ),
  )
  siblings.push(sibling)
}

export function hideCustomDialog() {
  // const sibling = siblings.shift()
  // sibling && sibling.destroy()
  hideAllCustomDialog()
}

export function hideAllCustomDialog() {
  siblings.forEach((sib) => sib?.destroy())
  siblings.length = 0
}

export function showError(txt: string, hideAll = false, styleDone: ViewStyle = {}) {
  return showCustomDialog(<ErrorModal error={txt} hideAll={hideAll} styleDone={styleDone} />)
}

export function showSuccess(
  txt: string,
  onDone?: () => void,
  textConfirm = "OK",
  styleDone: ViewStyle = {},
  textAlign?: ResponsiveValue<"center" | "right" | "left" | "auto" | "justify", any>,
) {
  return showCustomDialog(
    <ErrorModal
      error={txt}
      txtDone={textConfirm}
      onDone={onDone}
      styleDone={styleDone}
      textAlign={textAlign}
    />,
  )
}

export function showConfirm(txt: string, onConfirm: () => void, onCancel?: () => void) {
  return showCustomDialog(
    <ConfirmModal text={txt} onConfirm={onConfirm} textConfirm="OK" onCancel={onCancel} />,
  )
}

const styles = StyleSheet.create({
  backDrop: {
    alignItems: "center",
    backgroundColor: color.palette.black05,
    justifyContent: "center",
    position: "absolute",
  },
})
