import * as React from "react"
import {
  Insets,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"
import { observer } from "mobx-react-lite"
import { Col } from "../col"
import { ViewProps } from "app/types"
import { Center } from "../center"
import { debounce } from "@Utils"
import { Android } from "@Utils/constant"
import { color } from "@Theme"

type Props = {
  onPress?: (data?: any) => void
  hitSlop?: Insets
  center?: boolean
  debounceTime?: number
  hasShadow?: boolean
}

export const Touchable = observer(function Touchable({
  onPress,
  hitSlop,
  center,
  disabled,
  debounceTime,
  hasShadow,
  ...props
}: Props & ViewProps & TouchableOpacityProps) {
  const View = center ? Center : Col

  if (Android && hasShadow) {
    return (
      <TouchableNativeFeedback
        onPress={debounce(onPress, debounceTime)}
        hitSlop={hitSlop}
        disabled={disabled}
        background={TouchableNativeFeedback.Ripple(color.light, false)}
        useForeground
      >
        <View {...props} />
      </TouchableNativeFeedback>
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={debounce(onPress, debounceTime)}
      hitSlop={hitSlop}
      disabled={disabled}
    >
      <View {...props} />
    </TouchableOpacity>
  )
})
