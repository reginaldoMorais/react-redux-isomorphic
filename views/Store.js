import {createStore, applyMiddleware, compose} from 'redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import reducers from './Reducers';
// import {immutifyState} from './Utils';

const configureStore = (initialState = {}, devTools = f => f) => {
  const middlewares = compose(applyMiddleware(multi, thunk, promise), devTools);
  // initialState = immutifyState(initialState);
  return createStore(reducers, initialState, middlewares);
};

export default configureStore;
