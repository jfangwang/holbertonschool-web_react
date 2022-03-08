import { List, Map } from "./node_modules/immutable/dist/immutable";

export function concatElement(page1, page2) {
  return List(page1, page2);
}
export function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}
