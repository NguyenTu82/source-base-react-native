import { ViewProps } from "app/types"
import React from "react"
import { Col } from "../col"

export const Row: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <Col flexDirection="row" {...props}>
      {children}
    </Col>
  )
}
