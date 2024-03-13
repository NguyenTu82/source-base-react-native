export class EventRegister {
  static listeners = {
    count: 0,
    refs: {},
  }

  static checkEventExist(eventName) {
    const refs = EventRegister.listeners.refs
    let eventExist = false
    for (const key in refs) {
      // eslint-disable-next-line no-prototype-builtins
      if (refs.hasOwnProperty(key)) {
        const element = refs[key]
        if (element && element.name && element.name === eventName) {
          eventExist = true
        }
      }
    }
    return eventExist
  }

  static getIdEvent(eventName) {
    const refs = EventRegister.listeners.refs
    let eventId = null
    for (const key in refs) {
      // eslint-disable-next-line no-prototype-builtins
      if (refs.hasOwnProperty(key)) {
        const element = refs[key]
        if (element && element.name && element.name === eventName) {
          eventId = element.id
        }
      }
    }
    return eventId
  }

  static addEventListener(eventName, callback) {
    if (EventRegister.checkEventExist(eventName)) return false
    if (typeof eventName === "string" && typeof callback === "function") {
      EventRegister.listeners.count++
      const eventId = "l" + EventRegister.listeners.count
      EventRegister.listeners.refs[eventId] = {
        name: eventName,
        callback,
      }
      return eventId
    }
    return false
  }

  static removeEventListener(eventName) {
    if (typeof eventName === "string" && EventRegister.checkEventExist(eventName)) {
      return delete EventRegister.listeners.refs[EventRegister.getIdEvent(eventName)]
    }
    return false
  }

  static removeAllListeners() {
    let removeError = false
    Object.keys(EventRegister.listeners.refs).forEach((id) => {
      const removed = delete EventRegister.listeners.refs[id]
      removeError = !removeError ? !removed : removeError
    })
    return !removeError
  }

  static emitEvent(eventName, data) {
    Object.keys(EventRegister.listeners.refs).forEach((id) => {
      if (EventRegister.listeners.refs[id] && eventName === EventRegister.listeners.refs[id].name) {
        EventRegister.listeners.refs[id].callback(data)
      }
    })
  }

  static on(eventName, callback) {
    return EventRegister.addEventListener(eventName, callback)
  }

  static off(eventName) {
    return EventRegister.removeEventListener(eventName)
  }

  static offAll() {
    return EventRegister.removeAllListeners()
  }

  static emit(eventName, data) {
    EventRegister.emitEvent(eventName, data)
  }
}

export const RESET_REQUEST = "RESET_REQUEST"
export const EVENT_LOGOUT = "EVENT_LOGOUT"
