import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes'
import { Map } from 'immutable'

export const courseReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => {
        return {
          ...course,
          isSelected: false,
        }
      })
    case SELECT_COURSE:
      return state.map((course, i) => {
        const courseList = {
          ...course
        }
        if (course.id === action.index) {
          courseList.isSelected = true;
        }
        return courseList;
      })
    case UNSELECT_COURSE:
      return state.map((course) => {
        const courseList = {
          ...course
        }
        if (course.id === action.index) {
          courseList.isSelected = false;
        }
        return courseList;
      })
    default: return (
      state
    )
  }
}