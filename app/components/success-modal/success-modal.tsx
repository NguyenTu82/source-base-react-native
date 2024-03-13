import * as React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { responsive } from "@Utils"
import { TextRS } from "../text-restyle"
import { Center } from "../center"
import { Touchable } from "../touchable/touchable"
import { Space } from "../space"
import { hideCustomDialog } from "@Libs"
import { Col } from "../col"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

export interface SuccessModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  text?: string
}

/**
 * Describe your component here
 */
export const SuccessModal = observer(function SuccessModal(props: SuccessModalProps) {
  const { style, text } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <Center
      style={styles}
      backgroundColor="white"
      width={responsive.widthNew0(300)}
      paddingVertical="s:84"
      paddingHorizontal="s:24"
    >
      <Col>
        <TextRS variant="fsn:16:400" textAlign="center">
          {text}
        </TextRS>
      </Col>
      <Space height={responsive.height(60)} />
      <Touchable
        backgroundColor="primary"
        borderRadius={responsive.widthNew0(90)}
        width={responsive.widthNew0(100)}
        height={responsive.widthNew0(35)}
        onPress={hideCustomDialog}
      >
        <TextRS variant="fsn:14:700" color="white">
          OK
        </TextRS>
      </Touchable>
    </Center>
  )
})
