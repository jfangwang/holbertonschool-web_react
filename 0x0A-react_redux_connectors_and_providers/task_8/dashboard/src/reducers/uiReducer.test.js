import { uiReducer } from "./uiReducer";
import { LOGIN } from "../actions/uiActionTypes";

const defaultState = {
  user: null,
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false
}
const USER = { email: "asdf@gmail.com", password: 'willy'}

describe("Reducers Test Suite", () => {
  it("Equals initial state with no action passed", () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(defaultState);
  })
  it("Equals state with action", () => {
    expect(uiReducer(undefined, {type: "SELECT_COURSE"}).toJS()).toEqual(defaultState)
  })
  it("Action display drawer is passed", () => {
    const update = {...defaultState, isNotificationDrawerVisible: true}
    expect(uiReducer(undefined, {type: "DISPLAY_NOTIFICATION_DRAWER"}).toJS()).toEqual(update)
  })
  it("State is reuturned when LOGIN is passed, changes correctly the user property", function () {
    const state = uiReducer(undefined, { type: LOGIN, user: USER });

    expect(state.toJS()).toEqual({
      ...defaultState,
      user: USER,
    });
  });
})