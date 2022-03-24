import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreator Test Suite', () => {
  it('selectCourse action is working', () => {
    const test = selectCourse(1)
    expect(test).toEqual({type: SELECT_COURSE, index: 1});
  });
  it('unSelectCourse action is working', () => {
    const test = unSelectCourse(1)
    expect(test).toEqual({type: UNSELECT_COURSE, index: 1});
  });
})