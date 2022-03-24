import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import { notificationReducer } from "./notificationReducer";

const defaultState = {
  notifications: [],
  filter: "DEFAULT",
}

const dummyData = [
  {
    id: 1,
    type: "default",
    value: "New course available"
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available"
  },
  {
    id: 3,
    type: "urgent",
    value: "New data available"
  }
]

const expectedData = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ],
}

const changedData = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: true,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ],
}

describe("Course Reducer Test Suite", () => {
  it('return defaultstate with no action', () => {
    expect(notificationReducer(undefined, {})).toEqual(defaultState);
  })
  it('return changeddata when fetch notifications success is passed', () => {
    expect(notificationReducer(undefined, {type: "FETCH_NOTIFICATIONS_SUCCESS", data: dummyData})).toEqual(expectedData);
  })
  it('return changedData when markasred is passed', () => {
    const test = expectedData
    expect(notificationReducer(test, {type: 'MARK_AS_READ', index: 2})).toEqual(changedData)
  })
  it('return changedData when filter:urgent is passed', () => {
    const test = expectedData
    expect(notificationReducer(test, { type: 'SET_TYPE_FILTER', filter: "URGENT"})).toEqual({...expectedData, filter: "URGENT" });
  })
})