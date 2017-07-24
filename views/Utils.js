import {fromJS} from 'immutable';

const immutifyState = (obj) => {
  const objMut = {};

  fromJS(obj).forEach((v, k) => { objMut[k] = v; });

  return objMut;
};

export default immutifyState;
