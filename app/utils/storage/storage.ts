import AsyncStorage from "@react-native-async-storage/async-storage"
import { mmkv } from "@Libs"

const KEYS = {
  TOKEN: "@TOKEN",
  FREEKEY_TOKEN: "@FREEKEY_TOKEN",
  TOUCHID_CURRENT: "@TOUCHID_CURRENT",
  LAUNCHED: "@LAUNCHED",
  LOGGED_IN: "@LOGGED_IN",
  FIRST_OPEN: "@FIRST_OPEN",
}

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export async function loadString(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key)
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export async function load(key: string): Promise<any | null> {
  try {
    const almostThere = await AsyncStorage.getItem(key)
    return JSON.parse(almostThere)
  } catch {
    return null
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function save(key: string, value: any): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function remove(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key)
  } catch {}
}

/**
 * Burn it all to the ground.
 */
export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear()
  } catch {}
}

export const saveAccessToken = (data: string) => {
  mmkv.set(KEYS.TOKEN, data)
}

export const getAccessToken = () => {
  return mmkv.getString(KEYS.TOKEN)
}

export const saveFreekeyToken = (token: string) => mmkv.set(KEYS.FREEKEY_TOKEN, token)

export const getFreekeyToken = () => mmkv.getString(KEYS.FREEKEY_TOKEN) || ""

export const saveTouchIDCurrent = (mail: string) => mmkv.set(KEYS.TOUCHID_CURRENT, mail)

export const getTouchIDCurrent = () => mmkv.getString(KEYS.TOUCHID_CURRENT) || ""

export const saveLaunched = (value: boolean) => mmkv.set(KEYS.LAUNCHED, value)

export const getLaunched = () => mmkv.getBoolean(KEYS.LAUNCHED) ?? false

export const saveLoggedIn = (value: boolean) => mmkv.set(KEYS.LOGGED_IN, value)

export const getLoggedIn = () => mmkv.getBoolean(KEYS.LOGGED_IN) ?? false

export const saveFirstOpen = (value: boolean) => mmkv.set(KEYS.FIRST_OPEN, value)

export const getFirstOpen = () => mmkv.getBoolean(KEYS.FIRST_OPEN) ?? false
