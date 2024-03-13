import { createBox } from "@shopify/restyle"
import { Theme } from "app/theme/theme"
import { ViewProps } from "app/types"
import React from "react"

export const Box = createBox<Theme>()

export const Col: React.FC<ViewProps> = function ({ children, ...props }) {
  return (
    <Box flexDirection="column" {...props}>
      {children}
    </Box>
  )
}
