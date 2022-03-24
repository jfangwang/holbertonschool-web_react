import { uiReducer } from "./uiReducer";

const defaultState = {
  user: {},
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false
}

describe("Reducers Test Suite", () => {
  it("Equals initial state with no action passed", () => {
    expect(uiReducer(undefined, {})).toEqual(defaultState);
  })
  it("Equals state with action", () => {
    expect(uiReducer(undefined, {type: "SELECT_COURSE"})).toEqual(defaultState)
  })
  it("Action display drawer is passed", () => {
    const update = {...defaultState, isNotificationDrawerVisible: true}
    expect(uiReducer(undefined, {type: "DISPLAY_NOTIFICATION_DRAWER"})).toEqual(update)
  })
})