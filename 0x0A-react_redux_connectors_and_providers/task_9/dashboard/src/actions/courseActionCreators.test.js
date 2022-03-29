import { selectCourse, unSelectCourse, setCourses, fetchCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('courseActionCreator Test Suite', () => {
  it('selectCourse action is working', () => {
    const test = selectCourse(1)
    expect(test).toEqual({type: SELECT_COURSE, index: 1});
  });
  it('unSelectCourse action is working', () => {
    const test = unSelectCourse(1)
    expect(test).toEqual({type: UNSELECT_COURSE, index: 1});
  });
  it("Fetch is working", function () {
    const store = mockStore({});
    fetchMock.restore();
    fetchMock.get("./courses.json", "{}");
    return store.dispatch(fetchCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(setCourses({}));
    });
  });
})