<<<<<<< HEAD
import { fromJS } from "immutable"
import { List } from "./node_modules/immutable/dist/immutable"
=======
import { List } from 'immutable';
>>>>>>> 3bef0edff39464e4504dcfbd133aae0a29a37922

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  return list.push(element);
<<<<<<< HEAD
}
=======
}

// let arr = ["test", "test2"];

// console.log(getListObject(arr));
>>>>>>> 3bef0edff39464e4504dcfbd133aae0a29a37922
