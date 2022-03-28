import React from 'react'
import { courseReducer } from './courseReducer'
import {defaultState as defaultCourseState} from './courseReducer'
import { notificationReducer } from './notificationReducer'
import { defaultState as defaultNotificationState } from './notificationReducer'
import { uiReducer } from './uiReducer'
import { defaultState as defaultUIReducer } from './uiReducer'
import { Map } from 'immutable'

export const initialState = {
  courses: Map(defaultCourseState),
  notifications: Map(defaultNotificationState),
  ui: Map(defaultUIReducer),
}

const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
}

export default rootReducer;