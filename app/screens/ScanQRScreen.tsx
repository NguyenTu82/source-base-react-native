import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, ViewStyle, View, Image, ImageStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../themeBase"
import { responsive } from "@Utils"

const IC_WARNING = require("../../assets/images/ic_warning.png")

interface ScanQRScreenProps extends AppStackScreenProps<"ScanQR"> { }

export const ScanQRScreen: FC<ScanQRScreenProps> = observer(function ScanQRScreen(_props) {
    const authPasswordInput = useRef<TextInput>()
    const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [attemptsCount, setAttemptsCount] = useState(0)
    const [startQR, setStartQR] = useState(false)

    const {
        authenticationStore: {
            authEmail,
            authPassword,
            setAuthEmail,
            setAuthPassword,
            setAuthToken,
            validationErrors,
        },
    } = useStores()

    useEffect(() => {
        // Here is where you could fetch credientials from keychain or storage
        // and pre-fill the form fields.
        // setAuthEmail("ignite@infinite.red")
        setAuthPassword("ign1teIsAwes0m3")
    }, [])

    const errors: typeof validationErrors = isSubmitted ? validationErrors : ({} as any)

    function searchCode() {
        setStartQR(!startQR)
    }

    function startQRcode() {
        setStartQR(true)
    }

    useEffect(() => {
        return () => {
            setAuthPassword("")
            setAuthEmail("")
        }
    }, [])

    return (
        <Screen
            preset="auto"
            contentContainerStyle={$screenContentContainer}
            safeAreaEdges={["top", "bottom"]}
        >
            <View style={{ width: responsive.widthNew(360) }}>
                <Text text="hihhihiih" style={$txtWelcome} />
                <Text text="該当する地域のコードを入力してください。" style={$txtContent} />
            </View>

            <TextInput
                style={$input}
                maxLength={7}
                underlineColorAndroid="transparent"
                autoFocus={true}
                //   onChangeText={(text) => this.onChangeTextOther(text)}
                placeholder={"地域コードを入力"}
                placeholderTextColor={"#AAAAAA"}
            />
            <View style={$viewWarning}>
                <Image style={$icWarning} source={IC_WARNING} resizeMode="contain" />
                <Text text={`該当する地域が見つかりません。\n再度地域コードを入力して検索してください。`} style={$txtErr} />
            </View>

            <View style={{ width: responsive.widthNew(360)}}>
                <Text text="該当する地域のコードを入力してください。" style={$txtContent} />
                <Text text="地域：粟島浦村" style={$txtBold} />
            </View>

            <Button
                text="地域コード検索"
                style={$tapButton}
                preset="filled"
                onPress={searchCode}
                textStyle={$txtButton}
            />

            <Button
                text="受付開始"
                style={[$btnStartQRcode, !startQR && { opacity: 0.4 }]}
                preset="reversed"
                onPress={startQRcode}
                disabled={startQR}
                textStyle={$txtButton}

            />

        </Screen>
    )
})

const $screenContentContainer: ViewStyle = {
    paddingVertical: spacing.huge,
    alignItems: 'center',
    flex: 1
}

const $txtWelcome: TextStyle = {
    fontSize: responsive.widthNew(18),
    marginTop: responsive.widthNew(40),
    fontWeight: 'bold'
}

const $txtContent: TextStyle = {
    fontSize: responsive.widthNew(14),
}

const $txtBold: TextStyle = {
    fontSize: responsive.widthNew(14),
    fontWeight: 'bold'
}

const $txtErr: TextStyle = {
    fontSize: responsive.widthNew(14),
    color: '#DD2C88'
}

const $txtButton: TextStyle = {
    fontSize: responsive.widthNew(18),
    color: "white"
}

const $tapButton: ViewStyle = {
    marginTop: responsive.widthNew(10),
    backgroundColor: '#00AFD4',
    width: responsive.widthNew(360),
    height: responsive.heightNew(60),
    alignItems: 'center',
    borderRadius: responsive.widthNew(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
}

const $btnStartQRcode: ViewStyle = {
    backgroundColor: '#00AFD4',
    width: responsive.widthNew(360),
    height: responsive.heightNew(60),
    alignItems: 'center',
    borderRadius: responsive.widthNew(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    marginTop: responsive.heightNew(200)
}

const $input: ViewStyle = {
    marginTop: responsive.widthNew(15),
    width: responsive.widthNew(360),
    height: responsive.heightNew(60),
    borderRadius: responsive.widthNew(10),
    borderWidth: responsive.widthNew(1),
    borderColor: "#AAAAAA",
    paddingHorizontal: responsive.widthNew(10)
}

const $icWarning: ImageStyle = {
    width: responsive.widthNew(42),
    height: responsive.widthNew(42),
}

const $viewWarning: ViewStyle = {
    marginTop: responsive.widthNew(15),
    width: responsive.widthNew(360),
    // height: responsive.heightNew(60),
    flexDirection: 'row',
    alignItems: 'center',

}