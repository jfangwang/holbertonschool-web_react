import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}
export function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}

// const a = [1, 2, 3, 4]
// const b = ["a", "b", "c", "d"]

// console.log(concatElements(a, b))
