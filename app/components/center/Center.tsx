import React from "react"
import { ViewProps } from "../../types"
import { Col } from "../col"

export interface CenterProps {
  horizontal?: boolean
  vertical?: boolean
}

export const Center: React.FC<ViewProps & CenterProps> = function ({
  horizontal = false,
  vertical = false,
  children = null,
  ...props
}) {
  return (
    <Col
      alignItems={(horizontal && !vertical) || (!horizontal && !vertical) ? "center" : "flex-start"}
      justifyContent={
        (vertical && !horizontal) || (!horizontal && !vertical) ? "center" : "flex-start"
      }
      {...props}
    >
      {children}
    </Col>
  )
}
