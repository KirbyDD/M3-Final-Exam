import {combineReducers} from 'redux';
import animalsReducer from './animalsReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers ({
  animals: animalsReducer,
  isLoading: loadingReducer,
  error: errorReducer
})

export default rootReducer;