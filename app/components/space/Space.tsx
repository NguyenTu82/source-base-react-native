import { ViewProps } from "app/types"
import React from "react"
import { FlexAlignType, StyleProp, ViewStyle } from "react-native"
import { Col } from "../col"

export interface SpaceProps {
  style?: StyleProp<ViewStyle>
  height?: number | string
  width?: number | string
  align?: FlexAlignType
}

export const Space: React.FC<SpaceProps & ViewProps> = function ({
  style,
  height = 0,
  width = "100%",
  align = "flex-start",
  ...props
}) {
  const styles = [style, { height, width }]

  return <Col alignSelf={align} {...props} style={styles} />
}
