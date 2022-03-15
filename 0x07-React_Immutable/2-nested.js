<<<<<<< HEAD
import { fromJS } from "immutable"
=======
import { fromJS } from 'immutable';
>>>>>>> 3bef0edff39464e4504dcfbd133aae0a29a37922

export default function accessImmutableObject(object, array) {
  const mapObj = fromJS(object);

  return mapObj.getIn(array, undefined);
}
