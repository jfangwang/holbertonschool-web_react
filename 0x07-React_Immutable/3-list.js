import { fromJS } from "immutable"
import { List } from "./node_modules/immutable/dist/immutable"
export function getListObject(array) {
  List(array);
}
export function addElementToList(list, element) {
  list.push(element);
}