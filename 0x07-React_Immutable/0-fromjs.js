import { fromJS } from './node_modules/immutable/dist/immutable';

fromJS = require('immutable');

const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;
