import * as React from "react"
import { observer } from "mobx-react-lite"
import { Col } from "../col"
import { Row } from "../row"
import { TextRS , Touchable } from "@Components"
import { hideCustomDialog } from "@Libs"
import { genHitSlop, responsive } from "@Utils"
import { Space } from "../space"
import { Center } from "../center"

export interface ConfirmModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  text?: string
  textConfirm?: string
  textCancel?: string
  onConfirm?: () => void
  onCancel?: () => void
  modalWidth?: number
  modalRadius?: number
  textAlign?: "right" | "left" | "center" | "auto" | "justify"
}

/**
 * Describe your component here
 */
export const ConfirmModal = observer(function ConfirmModal(props: ConfirmModalProps) {
  const {
    text,
    onConfirm,
    textConfirm,
    textCancel,
    modalWidth,
    modalRadius,
    textAlign = "center",
    onCancel,
  } = props

  const handleConfirm = React.useCallback(() => {
    hideCustomDialog()
    setTimeout(() => onConfirm(), 200)
  }, [onConfirm])

  const handleCancel = React.useCallback(() => {
    hideCustomDialog()
    setTimeout(() => onCancel?.(), 200)
  }, [onCancel])

  return (
    <Col
      width={responsive.widthNew0(modalWidth || 300)}
      borderRadius={modalRadius || responsive.widthNew0(10)}
      backgroundColor="light"
    >
      <Space height={responsive.heightNew0(25)} />
      <Center paddingHorizontal="s:24">
        <TextRS variant="fsn:16:400" color="textDark" textAlign={textAlign}>
          {text}
        </TextRS>
      </Center>
      <Space height={responsive.heightNew0(30)} />
      <Row justifyContent="center">
        <Touchable
          onPress={handleCancel}
          borderRadius={responsive.widthNew0(90)}
          backgroundColor="light"
          width={responsive.widthNew0(100)}
          center
          height={responsive.widthNew0(35)}
          borderWidth={1}
          borderColor="primary"
          hitSlop={genHitSlop(22)}
        >
          <TextRS variant="fsn:14:700" color="primary">
            {textCancel || "キャンセル"}
          </TextRS>
        </Touchable>
        <Space width={responsive.widthNew0(20)} />
        <Touchable
          onPress={handleConfirm}
          borderRadius={responsive.widthNew0(90)}
          backgroundColor="primary"
          width={responsive.widthNew0(100)}
          center
          height={responsive.widthNew0(35)}
          hitSlop={genHitSlop(22)}
        >
          <TextRS variant="fsn:14:700" color="textLight">
            {textConfirm || "変更"}
          </TextRS>
        </Touchable>
      </Row>
      <Space height={responsive.heightNew0(30)} />
    </Col>
  )
})
