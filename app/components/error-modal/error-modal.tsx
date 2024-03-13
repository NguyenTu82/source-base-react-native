import * as React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { genHitSlop, responsive } from "@Utils"
import { TextRS } from "../text-restyle"
import { Center } from "../center"
import { Touchable } from "../touchable/touchable"
import { Space } from "../space"
import { hideAllCustomDialog, hideCustomDialog } from "@Libs"
import { Col } from "../col"
import { translate } from "@I18n"
import { ResponsiveValue } from "@shopify/restyle"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

export interface ErrorModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  error?: string
  txtDone?: string
  hideAll?: boolean
  onDone?: () => void
  styleDone?: ViewStyle
  textAlign?: ResponsiveValue<"center" | "right" | "left" | "auto" | "justify", any>
}

/**
 * Describe your component here
 */
export const ErrorModal = observer(function ErrorModal(props: ErrorModalProps) {
  const { style, error, txtDone, hideAll = false, onDone, styleDone, textAlign = "center" } = props
  const styles = Object.assign({}, CONTAINER, style)

  const handleDone = React.useCallback(() => {
    onDone && onDone()
    hideAll ? hideAllCustomDialog() : hideCustomDialog()
  }, [hideAll, onDone])

  return (
    <Center
      style={styles}
      backgroundColor="white"
      width={responsive.widthNew0(300)}
      paddingVertical="s:84"
      paddingHorizontal="s:24"
      borderRadius={responsive.widthNew0(10)}
    >
      <Col>
        <TextRS variant="fsn:14:400" color="textNew" textAlign={textAlign}>
          {typeof error === "object" ? JSON.stringify(error) : error}
        </TextRS>
      </Col>
      <Space height={responsive.height(60)} />
      <Touchable
        backgroundColor="primary"
        borderRadius={responsive.widthNew0(90)}
        onPress={handleDone}
        width={responsive.widthNew0((styleDone?.width as number) || 100)}
        center
        height={responsive.widthNew0((styleDone?.height as number) || 35)}
        hitSlop={genHitSlop(22)}
      >
        <TextRS variant="fsn:14:700" color="white">
          {txtDone || translate("common.cancel")}
        </TextRS>
      </Touchable>
    </Center>
  )
})
