import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes'
import { Map } from 'immutable'
import { coursesNormalizer } from '../schema/courses'

const defaultState = {};

export const courseReducer = (state = Map(defaultState), action) => {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS: {
      return (
        state.merge(coursesNormalizer(action.data))
      )
    }
    case SELECT_COURSE: return (
      state.setIn([String(action.index), 'isSelected'], true)
    )
    case UNSELECT_COURSE: return (
      state.setIn([String(action.index), 'isSelected'], false)
    )
    default: return (
      state
    )
  }
}