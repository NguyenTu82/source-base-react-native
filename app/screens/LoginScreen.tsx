import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, ViewStyle, Image, ImageStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../themeBase"
import { responsive } from "@Utils"

const IC_CAM = require("../../assets/images/ic_camera.png")
const LOGO_APP = require("../../assets/images/logo_app.png")

interface LoginScreenProps extends AppStackScreenProps<"Login"> { }

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const { navigation } = _props

  function login() {
    navigation.navigate("Search")
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Image style={$welcomeFace} source={IC_CAM} resizeMode="contain" />
      <Text text="ようこそ！" style={$txtWelcome} />
      <Text text="QRコードを確認できるアプリです。" style={$txtContent} />

      <Button
        text="はじめる"
        style={$tapButton}
        preset="reversed"
        onPress={login}
      />

      <Image style={$logoApp} source={LOGO_APP} resizeMode="contain" />

    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.huge,
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1
}

const $txtWelcome: TextStyle = {
  fontSize: responsive.widthNew(24),
  marginTop: responsive.heightNew(80)
}

const $txtContent: TextStyle = {
  marginBottom: responsive.heightNew(37),
  fontSize: responsive.widthNew(18),
  marginTop: responsive.heightNew(20)
}

const $welcomeFace: ImageStyle = {
  height: responsive.heightNew(142),
  width: responsive.widthNew(142),
}

const $logoApp: ImageStyle = {
  width: responsive.widthNew(190),
  position: 'absolute',
  bottom: responsive.heightNew(15)
}


const $tapButton: ViewStyle = {
  backgroundColor: '#00AFD4',
  width: responsive.widthNew(350),
  height: responsive.heightNew(60),
  alignItems: 'center',
  alignSelf: 'center'
}


// @demo remove-file
