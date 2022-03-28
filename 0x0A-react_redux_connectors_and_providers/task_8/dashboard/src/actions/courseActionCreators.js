import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";

import 'node-fetch'

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  }
}
export function boundSelectCourse(index) {
  return (dispatch(selectCourse(index)));
}
export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  }
}
export function boundUnSelectCourse(index) {
  return (dispatch(unSelectCourse(index)));
}
export const setCourses = (data) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
};
export const fetchCourses = () => {
  return (dispatch) => {
    return fetch("./courses.json")
      .then((r) => r.json())
      .then((data) => dispatch(setCourses(data)))
      .catch((err) => console.log("failed to fetch courses"));
  };
};