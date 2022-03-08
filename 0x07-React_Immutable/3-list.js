import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  return list.push(element);
}

// let arr = ["test", "test2"];

// console.log(getListObject(arr));
